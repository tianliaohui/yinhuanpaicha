/**
 * Created by liaohui1080 on 2016/12/23.
 */
console.log("box_2 企业列表");
var thisController = angular.module("box_2Module", []);
thisController.controller("box_2Controller", ['$scope', 'lh_ajax', '$rootScope',function ($scope, lh_ajax,$rootScope) {


    $scope.qiyeList = [];

    //接收主控制器 发过来的 刷新消息
    $scope.$on("boxAll", function (event, boxMsg) {
        lh_ajax.get({
            url: $rootScope.URL.box_3.url,
            data: boxMsg,
            success: function (msg) {

                // angular.forEach(msg.data, function (value, key) {
                //
                //     if (value.name == boxMsg.name) {
                //         msg.data[key].selected = true;
                //     } else {
                //         msg.data[key].selected = false;
                //     }
                // });
                $scope.qiyeList = msg.data;
                //获取数据所在的行号
                var liseNumber = _.findIndex(msg.data, {"name": boxMsg.name});
                $scope.qiyeList[liseNumber].selected = boxMsg.selected;

                $scope.nowTtime=new Date();

                $scope.$emit("box_2", {start: 1, info: msg.info, data: null});
            }
        });
    });

}]);

