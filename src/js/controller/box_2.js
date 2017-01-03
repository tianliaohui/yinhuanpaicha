/**
 * Created by liaohui1080 on 2016/12/23.
 */
console.log("box_2 企业列表");
var thisController = angular.module("box_2Module", []);
thisController.controller("box_2Controller", ['$scope', 'lh_ajax', function ($scope, lh_ajax) {


    $scope.qiyeList = []

    //接收主控制器 发过来的 刷新消息
    $scope.$on("boxAll", function (event, boxMsg) {
        lh_ajax.get({
            url: $scope.http+'box_2/1.json',
            data: boxMsg,
            success: function (msg) {

                angular.forEach(msg.data, function (value, key) {

                    if (value.name == boxMsg.name) {
                        msg.data[key].selected = true;
                    } else {
                        msg.data[key].selected = false;
                    }
                });
                $scope.qiyeList = msg.data

                $scope.$emit("box_2", {start: 1, info: msg.info, data: null});
            }
        });
    });

}]);

