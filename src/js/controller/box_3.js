/**
 * Created by liaohui1080 on 2016/12/23.
 */
console.log("box_3");
var thisController = angular.module("box_3Module", []);
thisController.controller("box_3Controller", ['$scope', 'lh_ajax', '$rootScope',
    function ($scope, lh_ajax, $rootScope) {
        $scope.ceshi = "测试成功"

        //选择svg
        var dlSvg = Snap("#svgLeida").attr({
            width: 263,
            height: 263
        });


        setInterval(function () {
            Snap.animate(360, 0, function (value) {
                // 旋转
                dlSvg.select('.yuan3').transform(new Snap.Matrix().rotate(value, 132, 132));

            }, 5000);


            Snap.animate(0, 360, function (value) {
                // 旋转指针
                dlSvg.select('.zhizhen').transform(new Snap.Matrix().rotate(value, 132, 132));

            }, 5000);


            Snap.animate(0, 360, function (value) {
                // 旋转
                dlSvg.select('.line-left').transform(new Snap.Matrix().rotate(value, 132, 132));
            }, 5000);
            Snap.animate(360, 0, function (value) {
                // 旋转
                dlSvg.select('.line-right').transform(new Snap.Matrix().rotate(value, 132, 132));
            }, 5000);


        }, 5000);
        setInterval(function () {
            Snap.animate(360, 0, function (value) {
                // 旋转指针
                dlSvg.select('.dian').transform(new Snap.Matrix().rotate(value, 132, 132));

            }, 1000);
        }, 1000);


        $scope.qiyeList = [];

        //接收主控制器 发过来的 刷新消息
        $scope.$on("boxAll", function (event, boxMsg) {
            lh_ajax.get({
                url: $rootScope.URL.box_3.url,
                // data: boxMsg,
                success: function (msg) {


                    if (boxMsg) {


                        $scope.qiyeList = msg.data;

                        //获取数据所在的行号
                        var liseNumber = _.findIndex(msg.data, {"name": boxMsg.name});
                        $scope.qiyeList[liseNumber].selected = boxMsg.selected;

                        $scope.title = {
                            "name": $scope.qiyeList[liseNumber].name,
                            "qyNum": $scope.qiyeList[liseNumber].qyNum,
                            "yhNum": $scope.qiyeList[liseNumber].yhNum
                        };

                        $scope.$emit("box_3", {start: 1, info: msg.info, data: null});
                    }


                }
            });


        });
    }]);

