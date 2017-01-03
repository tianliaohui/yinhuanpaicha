/**
 * Created by liaohui1080 on 2016/12/23.
 */
console.log("box_10");
var thisController = angular.module("box_10Module", []);
thisController.controller("box_10Controller", ['$scope', 'lh_ajax', function ($scope, lh_ajax) {


    $scope.ceshi = "测试成功box_10"


    $scope.$on('boxAll',function (event ,boxMsg) {
        lh_ajax.get({
            url: $scope.http + "box_10/1.json",
            data:boxMsg?boxMsg:null,
            success: function (msg) {
                // console.log(msg.data)
                shuliang1(msg.data)

                $scope.$emit("box_9",{start:1,info:"box_6?隐患加载成功",data:null});
            }

        });
    });

    function shuliang1(o) {
        var myChart = echarts.init(document.getElementById('box_10'));
        myChart.showLoading({
            text: '正在努力的读取数据中...',    //loading话术
        });
        myChart.hideLoading();
        // myChart.grid(20,20,0,0)
        window.onresize = myChart.resize;
        var option = {

            backgroundColor: '#021729',

            // 图表标题
            title: {
                text: " 企业监管隐患数 ",
                textStyle: {
                    fontWeight: 'normal',
                    color: '#fff' ,         // 图例文字颜色
                    fontSize:13,
                },
                x:"left",
                y:"top",
                backgroundColor:"#032D4F",

            },

            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '10',
                right: '20',
                bottom: '10',
                top: '40',
                containLabel: true
            },
            xAxis: {
                type:"category",
                data: ["dfsa"],

                axisLine: {
                    lineStyle: {
                        width: 1,
                        color: "#1c4960"
                    }
                },
                axisLabel: {
//					坐标轴相关刻度设置
                    show: false,
//						是否显示刻度标签
                    interval: 0,
                    //          坐标轴刻度标签的显示间隔，在类目轴中有效。
                    //          默认会采用标签不重叠的策略间隔显示标签。
                    //			可以设置成 0 强制显示所有标签。
                    rotate: 45,
//                       刻度标签旋转的角度，在类目轴的类目标签显示不下的时候可以通过旋转防止标签之间重叠。
//                       旋转的角度从 -90 度到 90 度。
                    margin: 10,
//                       刻度标签与轴线之间的距离。

                },

            },
            yAxis: {
                type: 'value',
                // scale: true,
                minInterval: 1,
                // splitNumber: 6,
                splitLine: {
                    show: false,
                },
                axisLabel: {
                    interval: '1',
                    inside: false,
                    textStyle: {
                        color: '#b3b3b3',

                    }
                },
                axisTick: {
                    show: true,
                    inside: true,
                    lineStyle: {
                        color: '#1c4960'
                    }
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#1c4960'
                    }

                },
            },
            series: {

                name: '数量',
                type: 'bar',
                barWidth: '7',
                data:[]
                // data: [
                //     {
                //         value: 100,
                //         itemStyle: {
                //             normal: {
                //                 color: '#fffd99'
                //
                //             }
                //         }
                //
                //     }
                // ],

            }
        };




        //把数据添加到option里面
        for (var s = 0; s < o.length; s++) {

            option.series.data[s] = {
                value:o[s].number,
                itemStyle: {
                    normal: {
                        color: o[s].color

                    }
                }
            };



            option.xAxis.data[s]=o[s].name

        }

        myChart.setOption(option)

    }
}]);

