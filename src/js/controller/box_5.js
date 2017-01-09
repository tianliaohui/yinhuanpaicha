/**
 * Created by liaohui1080 on 2016/12/23.
 */
console.log("box_5");
var thisController = angular.module("box_5Module", []);
thisController.controller("box_5Controller", ['$scope', 'lh_ajax', '$rootScope',
    function ($scope, lh_ajax, $rootScope) {
        $scope.qiyeList = [];
        $scope.maxNumbers=0; //最大数
        $scope.$on('boxAll', function (event, boxMsg) {

            lh_ajax.get({
                url: $rootScope.URL.box_5.url,
                data: {qyNum: 7},
                success: function (msg) {
                    $scope.qiyeList = msg.data;
                    $scope.maxNumbers = _.max(msg.data,function (stooge) {
                            return stooge.number;
                        });

                    $scope.title=msg.info;

                    $scope.$emit("box_5", {start: 1, info: "box_5?隐患加载成功", data: null});
                }

            });
        });

    }]);

