/**
 * Created by liaohui1080 on 2016/12/23.
 */
console.log("box_1");
var thisController = angular.module("box_1Module", []);
thisController.controller("box_1Controller", ['$scope', 'lh_ajax', '$rootScope',
    function ($scope, lh_ajax,$rootScope) {
    $scope.ceshi = "测试成功";


    $scope.switchPage = [];
    //切换页面
    $scope.switchPage = [
        {"name": "企业基础信息", "url": "http://www.baidu.com"},
        {"name": "隐患排查信息", "url": "http://www.baidu.com"},
        {"name": "用户操作权限3", "url": "http://www.baidu.com"},
        {"name": "用户操作权限4", "url": "http://www.baidu.com"}
    ];
    //给下拉菜单 初始值
    $scope.switchPage.selected = {"name": "隐患排查信息", "url": "http://www.baidu.com"};




    //接收主控制器 发过来的 刷新消息
    $scope.$on("boxAll", function (event, boxMsg) {
        lh_ajax.get({
            url: $rootScope.URL.box_1.url,
            data: boxMsg,
            success: function (msg) {

                $scope.zongheMsg=msg.data;

                $scope.$emit("box_1",{start:1,info:msg.info,data:null});
            }
        });
    });


}]);

