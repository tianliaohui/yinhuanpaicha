/**
 * Created by liaohui1080 on 2016/12/23.
 */
console.log("box_3");
var thisController = angular.module("box_3Module", []);
thisController.controller("box_3Controller", ['$scope', 'lh_ajax', function ($scope, lh_ajax) {
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






    // (function level() {
    //     var myChart = echarts.init(document.getElementById('box-3-chart'));
    //     var xAxisData = [];
    //     var data = [];
    //     var data2 = [];
    //     for (var i = 0; i < 50; i++) {
    //         xAxisData.push(i);
    //         data.push((Math.sin(i / 5) * (i / 5 -10) + i / 6) * 5);
    //         data2.push((Math.sin(i / 5) * (i / 5 + 10) + i / 6) * 3);
    //     }
    //
    //     var option = {
    //         backgroundColor: '#022038',
    //
    //         grid: {
    //             left: '0',
    //             right: '0',
    //             bottom: '0',
    //             top: '0',
    //         },
    //         xAxis: [{
    //             show: false,
    //             data: xAxisData
    //         }, {
    //             show: false,
    //             data: xAxisData
    //         }],
    //         visualMap: {
    //             show: false,
    //             min: 0,
    //             max: 50,
    //             dimension: 0,
    //             inRange: {
    //                 color: ['#FE5945', '#0071BB', '#00B9BB', '#FFFD99', '#FAAF3B', '#7BA6DB']
    //             }
    //         },
    //         yAxis: {
    //             axisLine: {
    //                 show: false
    //             },
    //             axisLabel: {
    //                 textStyle: {
    //                     color: '#4a657a'
    //                 }
    //             },
    //             splitLine: {
    //                 show: true,
    //                 lineStyle: {
    //                     color: '#08263f'
    //                 }
    //             },
    //             axisTick: {
    //                 show: false
    //             }
    //         },
    //         series: [{
    //             name: 'back',
    //             type: 'bar',
    //             data: data2,
    //             z: 1,
    //             itemStyle: {
    //                 normal: {
    //                     opacity: 0.4,
    //                     barBorderRadius: 5,
    //                     shadowBlur: 3,
    //                     shadowColor: '#111'
    //                 }
    //             }
    //         }, {
    //             name: 'Simulate Shadow',
    //             type: 'line',
    //             data: data,
    //             z: 2,
    //             showSymbol: false,
    //             animationDelay: 0,
    //             animationEasing: 'linear',
    //             animationDuration: 1200,
    //             lineStyle: {
    //                 normal: {
    //                     color: 'transparent'
    //                 }
    //             },
    //             areaStyle: {
    //                 normal: {
    //                     color: '#08263a',
    //                     shadowBlur: 50,
    //                     shadowColor: '#000'
    //                 }
    //             }
    //         }, {
    //             name: 'front',
    //             type: 'bar',
    //             data: data,
    //             xAxisIndex: 1,
    //             z: 3,
    //             itemStyle: {
    //                 normal: {
    //                     barBorderRadius: 5
    //                 }
    //             }
    //         }],
    //         animationEasing: 'elasticOut',
    //         animationEasingUpdate: 'elasticOut',
    //         animationDelay: function (idx) {
    //             return idx * 20;
    //         },
    //         animationDelayUpdate: function (idx) {
    //             return idx * 20;
    //         }
    //     };
    //     myChart.setOption(option)
    //
    // })();




    $scope.qiyeList = []

    //接收主控制器 发过来的 刷新消息
    $scope.$on("boxAll", function (event, boxMsg) {
        lh_ajax.get({
            url: $scope.http+"box_3/1.json",
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


                $scope.$emit("box_3", {start: 1, info: msg.info, data: null});
            }
        });

        lh_ajax.get({
            url: $scope.http+"box_3/2.json",
            data: boxMsg,
            success: function (msg) {



                $scope.title = msg.data


                $scope.$emit("box_3", {start: 1, info: msg.info, data: null});
            }
        });

    });
}]);

