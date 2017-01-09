/**
 * Created by liaohui1080 on 2016/12/23.
 */
console.log("rootController");
var rootController = angular.module("rootModule", []);

rootController.controller("rootController", ['$scope', 'lh_ajax', '$rootScope', '$timeout', '$interval',
    function ($scope, lh_ajax, $rootScope, $timeout, $interval) {

        //隐患类型对应的颜色值
        $rootScope.YHLXCOLOR = [
            {id: 1, "name": "一般隐患", "color": "#0071BB"},
            {id: 2, "name": "重大隐患", "color": "#FE5945"},
            {id: 3, "name": "未整改", "color": "#fff600"},
            {id: 4, "name": "已整改", "color": "#16b424"}
        ];


        //控制页面 加载模块
        $scope.include = {
            box_1: "box_1.html",
            box_2: "box_2.html",
            box_3: "box_3.html",
            box_4: "box_4.html",
            box_5: "box_5.html",
            box_6: "box_6.html",
            box_7: "box_7.html",
            box_8: "box_8.html",
            box_9: "box_9.html",
            box_10: "box_10.html",
            box_11: "box_11.html"
        };


        //所有ajax前面所要加的http地址
        $scope.http = "/proxy/220.197.219.235:8089/";

        //各个模块的url
        $rootScope.URL = {
            "box_1": {"url": $scope.http + 'YHPC/oneScreen/titleNum'},
            "box_2": {"url": $scope.http + 'YHPC/oneScreen/getNewestYh?num=5'},
            "box_3": {"url": $scope.http + 'YHPC/oneScreen/getRadarData'},
            "box_4": {"url": "server_json/box_4/guizhou.json"},
            "box_5": {"url": $scope.http + 'YHPC/oneScreen/getQyYhNum?'},
            "box_6": {"url": $scope.http + 'YHPC/oneScreen/getQyzcZgztNum'},
            "box_7": {"url": $scope.http + 'YHPC/oneScreen/getZfxcZgztNum'},
            "box_8": {"url": $scope.http + 'YHPC/oneScreen/getYhlbNum?num=5'},
            "box_9": {"url": $scope.http + 'YHPC/oneScreen/getCurveDate?ksyf=2016-01&jsyf=2016-11'},
            "box_10": {"url": $scope.http + 'YHPC/oneScreen/getCurveRightDate?ksnf=2014&jsnf=2016'},
            "box_11": {"url": $scope.http + 'YHPC/oneScreen/getHylbDate'},
        };






        //给全局广播的消息
        $scope.city = [
            {"name": "贵阳", "res": 12, "selected": true},
            {"name": "六盘水", "res": 12, "selected": true},
            {"name": "遵义", "res": 12, "selected": true},
            {"name": "安顺", "res": 12, "selected": true},
            {"name": "毕节", "res": 12, "selected": true},
            {"name": "铜仁", "res": 12, "selected": true},
            {"name": "黔南", "res": 12, "selected": true},
            {"name": "黔西南", "res": 12, "selected": true},
            {"name": "黔东南", "res": 12, "selected": true},

        ];

        // $scope.city2 = [
        //     {"name": "贵阳市", "res": 12, "selected": true},
        //     {"name": "六盘水市", "res": 12, "selected": true},
        //     {"name": "遵义市", "res": 12, "selected": true},
        //     {"name": "安顺市", "res": 12, "selected": true},
        //     {"name": "毕节市", "res": 12, "selected": true},
        //     {"name": "铜仁市", "res": 12, "selected": true},
        //     {"name": "黔南布依族苗族自治州", "res": 12, "selected": true},
        //     {"name": "黔西南布依族苗族自治州", "res": 12, "selected": true},
        //     {"name": "黔东南苗族侗族自治州", "res": 12, "selected": true},
        //
        // ];


        //发送默认广播,
        $timeout(function () {
            $scope.$broadcast("boxAll", $scope.city[0]);
        }, 0);


        //定时发送广播,
        var cityNumber = 0;
        $interval(function () {

            if (cityNumber == 8) {
                // $interval.cancel(stop);
                cityNumber = -1;

            } else {
                cityNumber = cityNumber + 1;
                $scope.$broadcast("boxAll", $scope.city[cityNumber]);
            }
        }, 50000); //这个参数是 定时刷机整个页面的参数



        //存储子控制器发来的消息,
        // $scope.boxMsg=[];
        // $scope.boxMsg = [];
        // $scope.boxMsgHtml = [];
        //
        //
        // var callback = function (event, msg) {
        //     $scope.boxMsg.push(msg)
        // };
        // $scope.$on("box_1", callback);
        // $scope.$on("box_2", callback);
        // $scope.$on("box_3", callback);
        // $scope.$on("box_4", callback);
        // $scope.$on("box_5", callback);
        // $scope.$on("box_6", callback);
        // $scope.$on("box_7", callback);
        // $scope.$on("box_8", callback);
        // $scope.$on("box_9", callback);
        // $scope.$on("box_10", callback);
        // $scope.$on("box_11", callback);
        // $scope.$on("box_12", callback);


        // setTimeout(function () {$scope.$on("box_1", callback)},1000)
        // setTimeout(function () {$scope.$on("box_2", callback)},4000)
        // setTimeout(function () {$scope.$on("box_3", callback)},6000)
        // setTimeout(function () {
        //     $scope.boxMsg[0]="ddddddd"
        //     console.log("adf")
        //     $scope.$apply();
        // },1000);
        // $scope.abc="dddddd"
        // setTimeout(function () {
        //     $scope.abc="cccccc";
        //
        // },1000);
        //
        // $scope.timeke=setTimeout($scope.timeke4,3000);
        // $scope.timeke4=function () {
        //     $scope.abc="cccccc";
        // };
        //
        //
        //


        // $scope.$watch('boxMsg', function (newValue, oldValue) {
        //
        //     console.log(oldValue);
        //     console.log(newValue);
        //
        //
        // });
        //
        //
        //
        //
        // $scope.abc = 0;
        // $interval(function () {
        //     $scope.abc = $scope.abc+1;
        //     $scope.boxMsgHtml[$scope.abc] = $scope.boxMsg[$scope.abc]
        // }, 1000);
        //

    }]);

