/**
 * Created by liaohui1080 on 2016/12/23.
 */
console.log("box_8");
var thisController = angular.module("box_8Module", []);
thisController.controller("box_8Controller", ['$scope', 'lh_ajax', '$rootScope',
    function ($scope, lh_ajax,$rootScope) {
    $scope.qiyeList=[];


    $scope.$on('boxAll',function (event ,boxMsg) {
        lh_ajax.get({
            url: $rootScope.URL.box_8.url,
            data:boxMsg?boxMsg:null,
            success: function (msg) {
                // console.log(msg.data)
                $scope.qiyeList=msg.data;

                $scope.maxNumbers = _.max(msg.data,function (stooge) {
                    return stooge.number;
                });

                $scope.title=msg.info;
                $scope.$emit("box_7",{start:1,info:msg.info,data:null});
            }

        });
    });
}]);

