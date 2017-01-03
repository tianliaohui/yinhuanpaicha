/**
 * Created by liaohui1080 on 2016/12/23.
 */
console.log("box_9");
var thisController = angular.module("box_9Module", []);
thisController.controller("box_9Controller", ['$scope', 'lh_ajax', function ($scope, lh_ajax) {
    $scope.ceshi="测试成功"


    $scope.$on('boxAll',function (event ,boxMsg) {
        lh_ajax.get({
            url: $scope.http + "box_9/1.json",
            data:boxMsg?boxMsg:null,
            success: function (msg) {
                // console.log(msg.data)
                quxiantu(msg.data)
                $scope.$emit("box_9",{start:1,info:"box_6?隐患加载成功",data:null});
            }

        });
    });


}]);




//曲线图
function quxiantu(o) {
    var myChart = echarts.init(document.getElementById('box_9'));
    // 过渡---------------------
    myChart.showLoading({
        text: '正在努力的读取数据中...',    //loading话术
    });
    myChart.hideLoading();
    // myChart.grid(20,20,0,0)
    window.onresize = myChart.resize;


    var option = {
        // 全图默认背景
        backgroundColor: '#021729',

        // 默认色板
        // color: [
        //     '#FE8463', '#9BCA63', '#FAD860', '#60C0DD', '#0084C6',
        //     '#D7504B', '#C6E579', '#26C0C0', '#F0805A', '#F4E001',
        //     '#B5C334'
        // ],
        //边距网格
        grid: {
            left: '10',
            right: '20',
            bottom: '12',
            top: '40',
            containLabel: true
        },
        textStyle:{
            color:"#fff"
        },


        // 图表标题
        title: {
            text: " 全年隐患监察趋势 ",
            textStyle: {
                fontWeight: 'normal',
                color: '#fff' ,         // 图例文字颜色
                fontSize:13,
            },
            x:"left",
            y:"top",
            backgroundColor:"#032D4F",

        },

        // 图例
        legend: {

            textStyle: {
                color: '#3a87ad',         // 图例文字颜色
                fontSize: 10,
                fontFamily:"方正舒体",
                fontStyle:'normal'
            },
            data: [],
            x: "right",
            y: "top",

        },


        //工具条
        // toolbox: {
        //     show: true,
        //     feature: {
        //         mark: {show: true},
        //         dataView: {show: true, readOnly: false},
        //         magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
        //         restore: {show: true},
        //         saveAsImage: {show: true},
        //         // myTool1: {
        //         //     show: true,
        //         //     title: '刷新',
        //         //     icon: 'path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891',
        //         //     onclick: function () {
        //         //         alert('myToolHandler1')
        //         //     }
        //         // }
        //     },
        //     x: "right",
        //     y: "top",
        //     backgroundColor:"#333"
        // },


        // 提示框
        tooltip: {
            backgroundColor: 'rgba(250,250,250,0.8)',     // 提示背景颜色，默认为透明度为0.7的黑色
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'line',         // 默认为直线，可选为：'line' | 'shadow'
                lineStyle: {          // 直线指示器样式设置
                    color: '#aaa'
                },
                crossStyle: {
                    color: '#aaa'
                },
                shadowStyle: {                     // 阴影指示器样式设置
                    color: 'rgba(200,200,200,0.2)'
                }
            },
            textStyle: {
                color: '#333',
                fontSize:12
            }
        },


        xAxis: [
            {

                splitLine: {
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: '#173452'
                    }
                },
                //设置坐标轴文字颜色
                axisLabel: {
                    textStyle: {color: "#0096FC"}
                },
                type: 'category',
                boundaryGap: false,
                data: o.xAxis,

            }
        ],
        yAxis: [
            {
                type: 'value',
                //设置坐标轴边框颜色
                splitLine: {
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: '#173452'
                    }
                },
                //设置坐标轴文字颜色
                axisLabel: {
                    textStyle: {color: "#0096FC"}
                }
            }
        ],
        // series: [
        //     {
        //         name: '成交',
        //         type: 'line',
        //         smooth: true,
        //         itemStyle: {normal: {color: "#FFFF00", areaStyle: {color: '#FFFF00'}}},
        //         data: [10, 12, 21, 54, 260, 830, 0]
        //     },
        //     {
        //         name: '预购',
        //         type: 'line',
        //         smooth: true,
        //         itemStyle: {normal: {color: "#8B2BCC", areaStyle: {color: '#8B2BCC'}}},
        //         data: [0, 182, 434, 791, 390, 30, 10, 40, 900, 100, 300, 200, 500]
        //     },
        //     {
        //         name: '意向',
        //         type: 'line',
        //         smooth: true,
        //         itemStyle: {normal: {color: "#00D7FB", areaStyle: {color: '#00D7FB'}}},
        //         data: [1000, 800, 601, 234, 120, 90, 20]
        //     }
        // ]

        series: []
    };


    //把数据添加到option里面
    for (var s = 0; s < o.series.length; s++) {

        //给节点增加数据,显示线性图
        o.series[s].type = 'line';
        o.series[s].itemStyle = {
            normal: {
                color: o.series[s].colorBg,
                borderWidth:5,
                opacity:1,
                areaStyle: {
                    opacity:0.5
                }
            }
        }; //设置图背景
        o.series[s].smooth = true; //线的转折点转换为圆角
        option.series.push(o.series[s]); //把数据添加到节点上


        //给图例添加数据
        option.legend.data.push(o.series[s].name)

    }


    myChart.setOption(option);
}
