/**
 * Created by liaohui1080 on 2016/12/23.
 */
 angular.module("myApp", [

    //自己写的
    'lh_http',



    'box_1Module',
    'box_2Module',
    'box_3Module',
    'box_4Module',
    'box_5Module',
    'box_6Module',
    'box_7Module',
    'box_8Module',
    'box_9Module',
    'box_10Module',
    'box_11Module',
    'rootModule', //主控制器 写在html上的

    //第三方控件
     'ngAnimate',
    'ngSanitize',
    'ui.select',
    'ui.select-filter'


]).config(function($httpProvider){

    console.log($httpProvider.defaults.headers.common)

    //修改/操作$httpProvider.defaults.headers.common对象的属性以改变$http的默认请求头配置


})

/**
 * Created by liaohui1080 on 2016/12/23.
 */
console.log("box_1");
var thisController = angular.module("box_1Module", []);
thisController.controller("box_1Controller", ['$scope', 'lh_ajax', function ($scope, lh_ajax) {
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
            url: $scope.http+'box_1/1.json',
            data: boxMsg,
            success: function (msg) {

                $scope.zongheMsg=msg.data;

                $scope.$emit("box_1",{start:1,info:msg.info,data:null});
            }
        });
    });


}]);


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


/**
 * Created by liaohui1080 on 2016/12/23.
 */
console.log("box_11");
var thisController = angular.module("box_11Module", []);
thisController.controller("box_11Controller", ['$scope', 'lh_ajax', function ($scope, lh_ajax) {



    $scope.$on('boxAll',function (event ,boxMsg) {
        lh_ajax.get({
            url: $scope.http + "box_11/1.json",
            data:boxMsg?boxMsg:null,
            success: function (msg) {
                // console.log(msg.data)
                box_11_jianguanshu2(msg.data)

                $scope.$emit("box_9",{start:1,info:"box_6?隐患加载成功",data:null});
            }

        });
    });
}]);



function box_11_jianguanshu2(o) {
    var myChart = echarts.init(document.getElementById('box_11'));

    var option = {
        //     // 图表标题
        title: {
            text: " 企业捡管隐患数 ",
            textStyle: {

                color: '#fff',         // 图例文字颜色
                fontSize: 13,
            },
            backgroundColor: "#032D4F",

        },
        backgroundColor: '#021729',

        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}"
        },

        series: {
            name: '监管隐患数',
            type: 'pie',
            startAngle: 10,
            minAngle: 5,
            roseType: 'angle',
            radius: '70%',
            center: ['50%', '50%'],
            itemStyle: {
                emphasis: {
                    //阴影的大小
                    shadowBlur: 50,
                    // 阴影水平方向上的偏移
                    shadowOffsetX: 0,
                    // 阴影垂直方向上的偏移
                    shadowOffsetY: 0,
                    // 阴影颜色
                    shadowColor: '#000'
                }
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#B3B3B3'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: '#B3B3B3'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            data:[].sort(function (a, b) {
                return a.value - b.value
            }),
        }
    };


    //把数据添加到option里面
    for (var s = 0; s < o.length; s++) {

        option.series.data[s] = {
            value:o[s].value,
            name:o[s].name,
            itemStyle: {
                normal: {
                    color: o[s].color

                }
            }
        };

    }


    myChart.setOption(option);
}

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


/**
 * Created by liaohui1080 on 2016/12/23.
 */
console.log("box_4 地图");
var thisController = angular.module("box_4Module", []);
thisController.controller("box_4Controller", ['$scope', 'lh_ajax', function ($scope, lh_ajax) {






    lh_ajax.get({
        url: $scope.http + "box_4/guizhou.json",
        success: function (msg) {

            var chart = echarts.init(document.getElementById('map'));

            echarts.registerMap('guizhou', msg.data);//设置地图


            //圆点坐标点
            var gz_data = [];
            for (var cps = 0; cps < msg.data.features.length; cps++) {
                gz_data[cps] = msg.data.features[cps].properties.cp

            }

            var option3 = {


                geo: {
                    show: true,
                    map: 'guizhou',
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                color: "white"
                            }
                        },
                    },
                    itemStyle: {
                        normal: {
                            areaColor: '#021729',
                            borderColor: '#27a2d7',

                        },
                        emphasis: {
                            areaColor: '#ff6a00',
                            borderColor: '#bf4c00',


                        }
                    },
                    regions:[{"name":"贵阳市","selected":true}]

                },
                series: {
                    name: "guizhou",
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    geoIndex: 0,
                    data: gz_data,
                    itemStyle: {
                        normal: {
                            color: '#ffffff'
                        }
                    }

                }
            };


            //默认第一次加载地图
            // chart.setOption(option3);


            //接到主控制器发来的刷新消息
            $scope.$on("boxAll",function (event,msg) {
                // console.log(msg)
                option3.geo.regions=[msg];
                chart.setOption(option3);

                $scope.$emit("box_4", {start: 1, info: "box_4?隐患加载成功", data: null});
            })

        }
    });






}]);

/**
 * Created by liaohui1080 on 2016/12/23.
 */
console.log("box_5");
var thisController = angular.module("box_5Module", []);
thisController.controller("box_5Controller", ['$scope', 'lh_ajax','$timeout', function ($scope, lh_ajax,$timeout) {
    $scope.qiyeList=[];

    $scope.$on('boxAll',function (event ,boxMsg) {

        lh_ajax.get({
            url:$scope.http+"box_5/1.json",
            data:boxMsg?boxMsg:null,
            success: function (msg) {
                // console.log(msg.data)
                $scope.qiyeList=msg.data;


                $scope.$emit("box_5",{start:1,info:"box_6?隐患加载成功",data:null});
            }

        });
    });

}]);


/**
 * Created by liaohui1080 on 2016/12/23.
 */
console.log("box_6");
var thisController = angular.module("box_6Module", []);
thisController.controller("box_6Controller", ['$scope', 'lh_ajax', function ($scope, lh_ajax) {
    $scope.ceshi = "测试成功"



    $scope.$on('boxAll',function (event ,boxMsg) {
        lh_ajax.get({
            url: $scope.http + "box_6/1.json",
            data:boxMsg?boxMsg:null,
            success: function (msg) {
                // console.log(msg.data)
                level(msg.data)
                $scope.$emit("box_6",{start:1,info:"box_6?隐患加载成功",data:null});
            }

        });
    });

    function level(o) {
        var myChart = echarts.init(document.getElementById('box_6'));
        var option = {

            backgroundColor: '#021729',
            color: [],
            title: {
                text: '隐患排查级别',
                bottom: 0,
                textStyle: {

                    color: '#fff',         // 图例文字颜色
                    fontSize: 13,
                },
                backgroundColor: "#032D4F",

            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} "
            },
            legend: {
                orient: 'vertical',
                y: 'bottom',
                x: "right",

                height: 20,
                data: ['第一个', '第二个'],
                formatter: function (name) {
                    return ""
                }
            },
            series: {
                name: '用户属性',
                type: 'pie',
                radius: '70%',
                center: ['50%', '45%'],
                label: {
                    normal: {
                        show: true,
                        formatter: function (param) {
                            return param.percent.toFixed(0) + '%';
                        },
                        position: 'inner',

                    },
                    emphasis: {
                        show: true,
                        formatter: function (param) {
                            return param.percent.toFixed(0) + '%';
                        },
                        textStyle: {
                            fontSize: 20,
                            fontWeight: 'bold'
                        }
                    }


                },
                itemStyle: {
                    normal: {
                        borderWidth: 5,
                        borderColor: "#021729"
                    }
                },
                data: []
            }
        };

        //把数据添加到option里面
        for (var s = 0; s < o.length; s++) {
            option.series.data[s] = {
                value:o[s].value,
                name:o[s].name,
                itemStyle: {
                    normal: {
                        color: o[s].color

                    }
                }
            };

        }
        myChart.setOption(option)

    }



}]);


/**
 * Created by liaohui1080 on 2016/12/23.
 */
console.log("box_7");
var thisController = angular.module("box_7Module", []);
thisController.controller("box_7Controller", ['$scope', 'lh_ajax', function ($scope, lh_ajax) {
    $scope.ceshi="测试成功"



    $scope.$on('boxAll',function (event ,boxMsg) {
        lh_ajax.get({
            url: $scope.http + "box_7/1.json",
            data:boxMsg?boxMsg:null,
            success: function (msg) {
                // console.log(msg.data)
                level(msg.data)
                $scope.$emit("box_7",{start:1,info:"box_7?隐患加载成功",data:null});
            }

        });
    });

    function level(o) {
        var myChart = echarts.init(document.getElementById('box_7'));
        var option = {

            backgroundColor: '#021729',
            color: [],
            title: {
                text: '检查主体',
                bottom: 0,
                textStyle: {

                    color: '#fff',         // 图例文字颜色
                    fontSize: 13,
                },
                backgroundColor: "#032D4F",

            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} "
            },
            legend: {
                orient: 'vertical',
                y: 'bottom',
                x: "right",

                height: 20,
                data: ['第一个', '第二个'],
                formatter: function (name) {
                    return ""
                }
            },
            series: {
                name: '用户属性',
                type: 'pie',
                radius: '70%',
                center: ['50%', '45%'],
                label: {
                    normal: {
                        show: true,
                        formatter: function (param) {
                            return param.percent.toFixed(0) + '%';
                        },
                        position: 'inner',

                    },
                    emphasis: {
                        show: true,
                        formatter: function (param) {
                            return param.percent.toFixed(0) + '%';
                        },
                        textStyle: {
                            fontSize: 20,
                            fontWeight: 'bold'
                        }
                    }


                },
                itemStyle: {
                    normal: {
                        borderWidth: 5,
                        borderColor: "#021729"
                    }
                },
                data: []
            }
        };

        //把数据添加到option里面
        for (var s = 0; s < o.length; s++) {
            option.series.data[s] = {
                value:o[s].value,
                name:o[s].name,
                itemStyle: {
                    normal: {
                        color: o[s].color

                    }
                }
            };

        }
        myChart.setOption(option)

    }


}]);


/**
 * Created by liaohui1080 on 2016/12/23.
 */
console.log("box_8");
var thisController = angular.module("box_8Module", []);
thisController.controller("box_8Controller", ['$scope', 'lh_ajax', function ($scope, lh_ajax) {
    $scope.qiyeList=[];


    $scope.$on('boxAll',function (event ,boxMsg) {
        lh_ajax.get({
            url: $scope.http + "box_8/1.json",
            data:boxMsg?boxMsg:null,
            success: function (msg) {
                // console.log(msg.data)
                $scope.qiyeList=msg.data;
                $scope.$emit("box_7",{start:1,info:msg.info,data:null});
            }

        });
    });
}]);


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

/**
 * Created by liaohui1080 on 2016/12/23.
 */
console.log("rootController");
var rootController = angular.module("rootModule", []);

rootController.controller("rootController", ['$scope', 'lh_ajax', '$rootScope', '$timeout', '$interval',
    function ($scope, lh_ajax, $rootScope, $timeout, $interval) {

        //所有ajax前面所要加的http地址
        $scope.http = "server_json/";

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


        //给全局广播的消息
        $scope.city = [
            {"name": "贵阳市", "res": 12, "selected": true},
            {"name": "六盘水市", "res": 12, "selected": true},
            {"name": "遵义市", "res": 12, "selected": true},
            {"name": "安顺市", "res": 12, "selected": true},
            {"name": "毕节市", "res": 12, "selected": true},
            {"name": "铜仁市", "res": 12, "selected": true},
            {"name": "黔南布依族苗族自治州", "res": 12, "selected": true},
            {"name": "黔西南布依族苗族自治州", "res": 12, "selected": true},
            {"name": "黔东南苗族侗族自治州", "res": 12, "selected": true},

        ];

        //发送默认广播,
        $timeout(function () {
            $scope.$broadcast("boxAll", $scope.city[0]);
        },0);


        //定时发送广播
        var cityNumber = 0;
        $interval(function () {

            if (cityNumber == 8) {
                // $interval.cancel(stop);
                cityNumber = -1;

            }else{
                cityNumber = cityNumber + 1;
                $scope.$broadcast("boxAll", $scope.city[cityNumber]);
            }
        }, 10000);



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


/**
 * Created by liaohui1080 on 16/2/26. factory.js
 *
 * 服务创建页面
 */


//factory  服务添加位置

console.log("lh_http");
var lh_http = angular.module("lh_http", []);
lh_http.factory("lh_ajax", ["$http", function ($http) {

    var ajax = {
        "get": function (o) {
            // cfpLoadingBar.start();
            var load = layer.load(1);
            $http({
                ignoreLoadingBar: true,
                method: 'get',
                url: o.url,
                params: o.data
            }).then(
                function success(response) {
                    var data = response.data;

                    layer.close(load);

                    var infoSuccess = o.infoSuccess ? o.infoSuccess : data.info ? data.info : "成功";
                    var infoError = o.infoSuccess ? o.infoSuccess : data.info ? data.info : '数据格式错误';

                    if (data.status == 1) {

                        if (o.infoShow) {

                            layer.msg(infoSuccess);
                        }

                        o.success(data);

                    } else {
                        if (o.infoShow) {

                            layer.msg(infoError, function () {
                                //回震动提示的
                            });
                        }

                    }


                }, function error(response) {

                    layer.msg("服务器数据格式错误." + response, function () {
                        //回震动提示的
                    })
                });
        },
        "post": function (o) {
            var load = layer.load(1);
            $http({
                headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
                method: "post",
                url: o.url,
                params: o.params, //这个是url后缀 ?key=val的,不一定会用到
                data: jQuery.param(o.data) //把json数据 序列化
            }).then(
                function successCallback(data, status, headers, config) {
                    layer.close(load);

                    var infoSuccess = o.infoSuccess ? o.infoSuccess : data.info ? data.info : "成功";
                    var infoError = o.infoSuccess ? o.infoSuccess : data.info ? data.info : '数据格式错误';

                    if (data.status == 1) {

                        if (o.infoShow) {

                            layer.msg(infoSuccess);
                        }

                        o.success(data, status, headers, config);

                    } else {
                        if (o.infoShow) {

                            layer.msg(infoError, function () {
                                //回震动提示的
                            });
                        }

                    }


                }, function errorCallback(e) {
                    alert("服务器数据格式错误" + e);
                    layer.msg("服务器数据格式错误." + e, function () {
                        //回震动提示的
                    })
                });
        }
    };

    return ajax;

}]);

/**
 * Created by liaohui1080 on 2016/12/27.
 */


angular.module("ui.select-filter", []).filter('propsFilter', [function () {
    return function (items, props) {
        var out = [];

        if (angular.isArray(items)) {
            var keys = Object.keys(props);

            items.forEach(function (item) {
                var itemMatches = false;

                for (var i = 0; i < keys.length; i++) {
                    var prop = keys[i];
                    var text = props[prop].toLowerCase();
                    if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
                        itemMatches = true;
                        break;
                    }
                }

                if (itemMatches) {
                    out.push(item);
                }
            });
        } else {
            // Let the output be the input untouched
            out = items;
        }

        return out;
    };
}]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImNvbnRyb2xsZXIvYm94XzEuanMiLCJjb250cm9sbGVyL2JveF8xMC5qcyIsImNvbnRyb2xsZXIvYm94XzExLmpzIiwiY29udHJvbGxlci9ib3hfMi5qcyIsImNvbnRyb2xsZXIvYm94XzMuanMiLCJjb250cm9sbGVyL2JveF80LmpzIiwiY29udHJvbGxlci9ib3hfNS5qcyIsImNvbnRyb2xsZXIvYm94XzYuanMiLCJjb250cm9sbGVyL2JveF83LmpzIiwiY29udHJvbGxlci9ib3hfOC5qcyIsImNvbnRyb2xsZXIvYm94XzkuanMiLCJjb250cm9sbGVyL3Jvb3RDb250cm9sbGVyLmpzIiwiZmFjdG9yeS9odHRwLmpzIiwiZmlsdGVyL3NlbGVjdEZpbHRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0tBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbk9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNySUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1aWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IGxpYW9odWkxMDgwIG9uIDIwMTYvMTIvMjMuXG4gKi9cbiBhbmd1bGFyLm1vZHVsZShcIm15QXBwXCIsIFtcblxuICAgIC8v6Ieq5bex5YaZ55qEXG4gICAgJ2xoX2h0dHAnLFxuXG5cblxuICAgICdib3hfMU1vZHVsZScsXG4gICAgJ2JveF8yTW9kdWxlJyxcbiAgICAnYm94XzNNb2R1bGUnLFxuICAgICdib3hfNE1vZHVsZScsXG4gICAgJ2JveF81TW9kdWxlJyxcbiAgICAnYm94XzZNb2R1bGUnLFxuICAgICdib3hfN01vZHVsZScsXG4gICAgJ2JveF84TW9kdWxlJyxcbiAgICAnYm94XzlNb2R1bGUnLFxuICAgICdib3hfMTBNb2R1bGUnLFxuICAgICdib3hfMTFNb2R1bGUnLFxuICAgICdyb290TW9kdWxlJywgLy/kuLvmjqfliLblmagg5YaZ5ZyoaHRtbOS4iueahFxuXG4gICAgLy/nrKzkuInmlrnmjqfku7ZcbiAgICAgJ25nQW5pbWF0ZScsXG4gICAgJ25nU2FuaXRpemUnLFxuICAgICd1aS5zZWxlY3QnLFxuICAgICd1aS5zZWxlY3QtZmlsdGVyJ1xuXG5cbl0pLmNvbmZpZyhmdW5jdGlvbigkaHR0cFByb3ZpZGVyKXtcblxuICAgIGNvbnNvbGUubG9nKCRodHRwUHJvdmlkZXIuZGVmYXVsdHMuaGVhZGVycy5jb21tb24pXG5cbiAgICAvL+S/ruaUuS/mk43kvZwkaHR0cFByb3ZpZGVyLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9u5a+56LGh55qE5bGe5oCn5Lul5pS55Y+YJGh0dHDnmoTpu5jorqTor7fmsYLlpLTphY3nva5cblxuXG59KVxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGxpYW9odWkxMDgwIG9uIDIwMTYvMTIvMjMuXG4gKi9cbmNvbnNvbGUubG9nKFwiYm94XzFcIik7XG52YXIgdGhpc0NvbnRyb2xsZXIgPSBhbmd1bGFyLm1vZHVsZShcImJveF8xTW9kdWxlXCIsIFtdKTtcbnRoaXNDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJib3hfMUNvbnRyb2xsZXJcIiwgWyckc2NvcGUnLCAnbGhfYWpheCcsIGZ1bmN0aW9uICgkc2NvcGUsIGxoX2FqYXgpIHtcbiAgICAkc2NvcGUuY2VzaGkgPSBcIua1i+ivleaIkOWKn1wiO1xuXG5cbiAgICAkc2NvcGUuc3dpdGNoUGFnZSA9IFtdO1xuICAgIC8v5YiH5o2i6aG16Z2iXG4gICAgJHNjb3BlLnN3aXRjaFBhZ2UgPSBbXG4gICAgICAgIHtcIm5hbWVcIjogXCLkvIHkuJrln7rnoYDkv6Hmga9cIiwgXCJ1cmxcIjogXCJodHRwOi8vd3d3LmJhaWR1LmNvbVwifSxcbiAgICAgICAge1wibmFtZVwiOiBcIumakOaCo+aOkuafpeS/oeaBr1wiLCBcInVybFwiOiBcImh0dHA6Ly93d3cuYmFpZHUuY29tXCJ9LFxuICAgICAgICB7XCJuYW1lXCI6IFwi55So5oi35pON5L2c5p2D6ZmQM1wiLCBcInVybFwiOiBcImh0dHA6Ly93d3cuYmFpZHUuY29tXCJ9LFxuICAgICAgICB7XCJuYW1lXCI6IFwi55So5oi35pON5L2c5p2D6ZmQNFwiLCBcInVybFwiOiBcImh0dHA6Ly93d3cuYmFpZHUuY29tXCJ9XG4gICAgXTtcbiAgICAvL+e7meS4i+aLieiPnOWNlSDliJ3lp4vlgLxcbiAgICAkc2NvcGUuc3dpdGNoUGFnZS5zZWxlY3RlZCA9IHtcIm5hbWVcIjogXCLpmpDmgqPmjpLmn6Xkv6Hmga9cIiwgXCJ1cmxcIjogXCJodHRwOi8vd3d3LmJhaWR1LmNvbVwifTtcblxuXG5cblxuXG4gICAgLy/mjqXmlLbkuLvmjqfliLblmagg5Y+R6L+H5p2l55qEIOWIt+aWsOa2iOaBr1xuICAgICRzY29wZS4kb24oXCJib3hBbGxcIiwgZnVuY3Rpb24gKGV2ZW50LCBib3hNc2cpIHtcbiAgICAgICAgbGhfYWpheC5nZXQoe1xuICAgICAgICAgICAgdXJsOiAkc2NvcGUuaHR0cCsnYm94XzEvMS5qc29uJyxcbiAgICAgICAgICAgIGRhdGE6IGJveE1zZyxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChtc2cpIHtcblxuICAgICAgICAgICAgICAgICRzY29wZS56b25naGVNc2c9bXNnLmRhdGE7XG5cbiAgICAgICAgICAgICAgICAkc2NvcGUuJGVtaXQoXCJib3hfMVwiLHtzdGFydDoxLGluZm86bXNnLmluZm8sZGF0YTpudWxsfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG5cbn1dKTtcblxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGxpYW9odWkxMDgwIG9uIDIwMTYvMTIvMjMuXG4gKi9cbmNvbnNvbGUubG9nKFwiYm94XzEwXCIpO1xudmFyIHRoaXNDb250cm9sbGVyID0gYW5ndWxhci5tb2R1bGUoXCJib3hfMTBNb2R1bGVcIiwgW10pO1xudGhpc0NvbnRyb2xsZXIuY29udHJvbGxlcihcImJveF8xMENvbnRyb2xsZXJcIiwgWyckc2NvcGUnLCAnbGhfYWpheCcsIGZ1bmN0aW9uICgkc2NvcGUsIGxoX2FqYXgpIHtcblxuXG4gICAgJHNjb3BlLmNlc2hpID0gXCLmtYvor5XmiJDlip9ib3hfMTBcIlxuXG5cbiAgICAkc2NvcGUuJG9uKCdib3hBbGwnLGZ1bmN0aW9uIChldmVudCAsYm94TXNnKSB7XG4gICAgICAgIGxoX2FqYXguZ2V0KHtcbiAgICAgICAgICAgIHVybDogJHNjb3BlLmh0dHAgKyBcImJveF8xMC8xLmpzb25cIixcbiAgICAgICAgICAgIGRhdGE6Ym94TXNnP2JveE1zZzpudWxsLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKG1zZykge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG1zZy5kYXRhKVxuICAgICAgICAgICAgICAgIHNodWxpYW5nMShtc2cuZGF0YSlcblxuICAgICAgICAgICAgICAgICRzY29wZS4kZW1pdChcImJveF85XCIse3N0YXJ0OjEsaW5mbzpcImJveF82P+makOaCo+WKoOi9veaIkOWKn1wiLGRhdGE6bnVsbH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gc2h1bGlhbmcxKG8pIHtcbiAgICAgICAgdmFyIG15Q2hhcnQgPSBlY2hhcnRzLmluaXQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JveF8xMCcpKTtcbiAgICAgICAgbXlDaGFydC5zaG93TG9hZGluZyh7XG4gICAgICAgICAgICB0ZXh0OiAn5q2j5Zyo5Yqq5Yqb55qE6K+75Y+W5pWw5o2u5LitLi4uJywgICAgLy9sb2FkaW5n6K+d5pyvXG4gICAgICAgIH0pO1xuICAgICAgICBteUNoYXJ0LmhpZGVMb2FkaW5nKCk7XG4gICAgICAgIC8vIG15Q2hhcnQuZ3JpZCgyMCwyMCwwLDApXG4gICAgICAgIHdpbmRvdy5vbnJlc2l6ZSA9IG15Q2hhcnQucmVzaXplO1xuICAgICAgICB2YXIgb3B0aW9uID0ge1xuXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDIxNzI5JyxcblxuICAgICAgICAgICAgLy8g5Zu+6KGo5qCH6aKYXG4gICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICAgIHRleHQ6IFwiIOS8geS4muebkeeuoemakOaCo+aVsCBcIixcbiAgICAgICAgICAgICAgICB0ZXh0U3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2ZmZicgLCAgICAgICAgIC8vIOWbvuS+i+aWh+Wtl+minOiJslxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZToxMyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHg6XCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgeTpcInRvcFwiLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcIiMwMzJENEZcIixcblxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgICAgIHRyaWdnZXI6ICdheGlzJyxcbiAgICAgICAgICAgICAgICBheGlzUG9pbnRlcjogeyAgICAgICAgICAgIC8vIOWdkOagh+i9tOaMh+ekuuWZqO+8jOWdkOagh+i9tOinpuWPkeacieaViFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc2hhZG93JyAgICAgICAgLy8g6buY6K6k5Li655u057q/77yM5Y+v6YCJ5Li677yaJ2xpbmUnIHwgJ3NoYWRvdydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ3JpZDoge1xuICAgICAgICAgICAgICAgIGxlZnQ6ICcxMCcsXG4gICAgICAgICAgICAgICAgcmlnaHQ6ICcyMCcsXG4gICAgICAgICAgICAgICAgYm90dG9tOiAnMTAnLFxuICAgICAgICAgICAgICAgIHRvcDogJzQwJyxcbiAgICAgICAgICAgICAgICBjb250YWluTGFiZWw6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB4QXhpczoge1xuICAgICAgICAgICAgICAgIHR5cGU6XCJjYXRlZ29yeVwiLFxuICAgICAgICAgICAgICAgIGRhdGE6IFtcImRmc2FcIl0sXG5cbiAgICAgICAgICAgICAgICBheGlzTGluZToge1xuICAgICAgICAgICAgICAgICAgICBsaW5lU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzFjNDk2MFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGF4aXNMYWJlbDoge1xuLy9cdFx0XHRcdFx05Z2Q5qCH6L2055u45YWz5Yi75bqm6K6+572uXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxuLy9cdFx0XHRcdFx0XHTmmK/lkKbmmL7npLrliLvluqbmoIfnrb5cbiAgICAgICAgICAgICAgICAgICAgaW50ZXJ2YWw6IDAsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgIOWdkOagh+i9tOWIu+W6puagh+etvueahOaYvuekuumXtOmalO+8jOWcqOexu+ebrui9tOS4reacieaViOOAglxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICDpu5jorqTkvJrph4fnlKjmoIfnrb7kuI3ph43lj6DnmoTnrZbnlaXpl7TpmpTmmL7npLrmoIfnrb7jgIJcbiAgICAgICAgICAgICAgICAgICAgLy9cdFx0XHTlj6/ku6Xorr7nva7miJAgMCDlvLrliLbmmL7npLrmiYDmnInmoIfnrb7jgIJcbiAgICAgICAgICAgICAgICAgICAgcm90YXRlOiA0NSxcbi8vICAgICAgICAgICAgICAgICAgICAgICDliLvluqbmoIfnrb7ml4vovaznmoTop5LluqbvvIzlnKjnsbvnm67ovbTnmoTnsbvnm67moIfnrb7mmL7npLrkuI3kuIvnmoTml7blgJnlj6/ku6XpgJrov4fml4vovazpmLLmraLmoIfnrb7kuYvpl7Tph43lj6DjgIJcbi8vICAgICAgICAgICAgICAgICAgICAgICDml4vovaznmoTop5Lluqbku44gLTkwIOW6puWIsCA5MCDluqbjgIJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMCxcbi8vICAgICAgICAgICAgICAgICAgICAgICDliLvluqbmoIfnrb7kuI7ovbTnur/kuYvpl7TnmoTot53nprvjgIJcblxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB5QXhpczoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICd2YWx1ZScsXG4gICAgICAgICAgICAgICAgLy8gc2NhbGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbWluSW50ZXJ2YWw6IDEsXG4gICAgICAgICAgICAgICAgLy8gc3BsaXROdW1iZXI6IDYsXG4gICAgICAgICAgICAgICAgc3BsaXRMaW5lOiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYXhpc0xhYmVsOiB7XG4gICAgICAgICAgICAgICAgICAgIGludGVydmFsOiAnMScsXG4gICAgICAgICAgICAgICAgICAgIGluc2lkZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHRleHRTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjYjNiM2IzJyxcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBheGlzVGljazoge1xuICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBpbnNpZGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGxpbmVTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjMWM0OTYwJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBheGlzTGluZToge1xuICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBsaW5lU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnIzFjNDk2MCdcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXJpZXM6IHtcblxuICAgICAgICAgICAgICAgIG5hbWU6ICfmlbDph48nLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdiYXInLFxuICAgICAgICAgICAgICAgIGJhcldpZHRoOiAnNycsXG4gICAgICAgICAgICAgICAgZGF0YTpbXVxuICAgICAgICAgICAgICAgIC8vIGRhdGE6IFtcbiAgICAgICAgICAgICAgICAvLyAgICAge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgdmFsdWU6IDEwMCxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGl0ZW1TdHlsZToge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIG5vcm1hbDoge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBjb2xvcjogJyNmZmZkOTknXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgIC8vIF0sXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuXG5cblxuICAgICAgICAvL+aKiuaVsOaNrua3u+WKoOWIsG9wdGlvbumHjOmdolxuICAgICAgICBmb3IgKHZhciBzID0gMDsgcyA8IG8ubGVuZ3RoOyBzKyspIHtcblxuICAgICAgICAgICAgb3B0aW9uLnNlcmllcy5kYXRhW3NdID0ge1xuICAgICAgICAgICAgICAgIHZhbHVlOm9bc10ubnVtYmVyLFxuICAgICAgICAgICAgICAgIGl0ZW1TdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBub3JtYWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBvW3NdLmNvbG9yXG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cblxuXG4gICAgICAgICAgICBvcHRpb24ueEF4aXMuZGF0YVtzXT1vW3NdLm5hbWVcblxuICAgICAgICB9XG5cbiAgICAgICAgbXlDaGFydC5zZXRPcHRpb24ob3B0aW9uKVxuXG4gICAgfVxufV0pO1xuXG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgbGlhb2h1aTEwODAgb24gMjAxNi8xMi8yMy5cbiAqL1xuY29uc29sZS5sb2coXCJib3hfMTFcIik7XG52YXIgdGhpc0NvbnRyb2xsZXIgPSBhbmd1bGFyLm1vZHVsZShcImJveF8xMU1vZHVsZVwiLCBbXSk7XG50aGlzQ29udHJvbGxlci5jb250cm9sbGVyKFwiYm94XzExQ29udHJvbGxlclwiLCBbJyRzY29wZScsICdsaF9hamF4JywgZnVuY3Rpb24gKCRzY29wZSwgbGhfYWpheCkge1xuXG5cblxuICAgICRzY29wZS4kb24oJ2JveEFsbCcsZnVuY3Rpb24gKGV2ZW50ICxib3hNc2cpIHtcbiAgICAgICAgbGhfYWpheC5nZXQoe1xuICAgICAgICAgICAgdXJsOiAkc2NvcGUuaHR0cCArIFwiYm94XzExLzEuanNvblwiLFxuICAgICAgICAgICAgZGF0YTpib3hNc2c/Ym94TXNnOm51bGwsXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAobXNnKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobXNnLmRhdGEpXG4gICAgICAgICAgICAgICAgYm94XzExX2ppYW5ndWFuc2h1Mihtc2cuZGF0YSlcblxuICAgICAgICAgICAgICAgICRzY29wZS4kZW1pdChcImJveF85XCIse3N0YXJ0OjEsaW5mbzpcImJveF82P+makOaCo+WKoOi9veaIkOWKn1wiLGRhdGE6bnVsbH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgIH0pO1xufV0pO1xuXG5cblxuZnVuY3Rpb24gYm94XzExX2ppYW5ndWFuc2h1MihvKSB7XG4gICAgdmFyIG15Q2hhcnQgPSBlY2hhcnRzLmluaXQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JveF8xMScpKTtcblxuICAgIHZhciBvcHRpb24gPSB7XG4gICAgICAgIC8vICAgICAvLyDlm77ooajmoIfpophcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIHRleHQ6IFwiIOS8geS4muaNoeeuoemakOaCo+aVsCBcIixcbiAgICAgICAgICAgIHRleHRTdHlsZToge1xuXG4gICAgICAgICAgICAgICAgY29sb3I6ICcjZmZmJywgICAgICAgICAvLyDlm77kvovmloflrZfpopzoibJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogMTMsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMwMzJENEZcIixcblxuICAgICAgICB9LFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDIxNzI5JyxcblxuICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICB0cmlnZ2VyOiAnaXRlbScsXG4gICAgICAgICAgICBmb3JtYXR0ZXI6IFwie2F9IDxici8+e2J9IDoge2N9XCJcbiAgICAgICAgfSxcblxuICAgICAgICBzZXJpZXM6IHtcbiAgICAgICAgICAgIG5hbWU6ICfnm5HnrqHpmpDmgqPmlbAnLFxuICAgICAgICAgICAgdHlwZTogJ3BpZScsXG4gICAgICAgICAgICBzdGFydEFuZ2xlOiAxMCxcbiAgICAgICAgICAgIG1pbkFuZ2xlOiA1LFxuICAgICAgICAgICAgcm9zZVR5cGU6ICdhbmdsZScsXG4gICAgICAgICAgICByYWRpdXM6ICc3MCUnLFxuICAgICAgICAgICAgY2VudGVyOiBbJzUwJScsICc1MCUnXSxcbiAgICAgICAgICAgIGl0ZW1TdHlsZToge1xuICAgICAgICAgICAgICAgIGVtcGhhc2lzOiB7XG4gICAgICAgICAgICAgICAgICAgIC8v6Zi05b2x55qE5aSn5bCPXG4gICAgICAgICAgICAgICAgICAgIHNoYWRvd0JsdXI6IDUwLFxuICAgICAgICAgICAgICAgICAgICAvLyDpmLTlvbHmsLTlubPmlrnlkJHkuIrnmoTlgY/np7tcbiAgICAgICAgICAgICAgICAgICAgc2hhZG93T2Zmc2V0WDogMCxcbiAgICAgICAgICAgICAgICAgICAgLy8g6Zi05b2x5Z6C55u05pa55ZCR5LiK55qE5YGP56e7XG4gICAgICAgICAgICAgICAgICAgIHNoYWRvd09mZnNldFk6IDAsXG4gICAgICAgICAgICAgICAgICAgIC8vIOmYtOW9seminOiJslxuICAgICAgICAgICAgICAgICAgICBzaGFkb3dDb2xvcjogJyMwMDAnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgICAgICAgbm9ybWFsOiB7XG4gICAgICAgICAgICAgICAgICAgIHRleHRTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjQjNCM0IzJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxhYmVsTGluZToge1xuICAgICAgICAgICAgICAgIG5vcm1hbDoge1xuICAgICAgICAgICAgICAgICAgICBsaW5lU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI0IzQjNCMydcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc21vb3RoOiAwLjIsXG4gICAgICAgICAgICAgICAgICAgIGxlbmd0aDogMTAsXG4gICAgICAgICAgICAgICAgICAgIGxlbmd0aDI6IDIwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRhdGE6W10uc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICAgIHJldHVybiBhLnZhbHVlIC0gYi52YWx1ZVxuICAgICAgICAgICAgfSksXG4gICAgICAgIH1cbiAgICB9O1xuXG5cbiAgICAvL+aKiuaVsOaNrua3u+WKoOWIsG9wdGlvbumHjOmdolxuICAgIGZvciAodmFyIHMgPSAwOyBzIDwgby5sZW5ndGg7IHMrKykge1xuXG4gICAgICAgIG9wdGlvbi5zZXJpZXMuZGF0YVtzXSA9IHtcbiAgICAgICAgICAgIHZhbHVlOm9bc10udmFsdWUsXG4gICAgICAgICAgICBuYW1lOm9bc10ubmFtZSxcbiAgICAgICAgICAgIGl0ZW1TdHlsZToge1xuICAgICAgICAgICAgICAgIG5vcm1hbDoge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogb1tzXS5jb2xvclxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgfVxuXG5cbiAgICBteUNoYXJ0LnNldE9wdGlvbihvcHRpb24pO1xufVxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGxpYW9odWkxMDgwIG9uIDIwMTYvMTIvMjMuXG4gKi9cbmNvbnNvbGUubG9nKFwiYm94XzIg5LyB5Lia5YiX6KGoXCIpO1xudmFyIHRoaXNDb250cm9sbGVyID0gYW5ndWxhci5tb2R1bGUoXCJib3hfMk1vZHVsZVwiLCBbXSk7XG50aGlzQ29udHJvbGxlci5jb250cm9sbGVyKFwiYm94XzJDb250cm9sbGVyXCIsIFsnJHNjb3BlJywgJ2xoX2FqYXgnLCBmdW5jdGlvbiAoJHNjb3BlLCBsaF9hamF4KSB7XG5cblxuICAgICRzY29wZS5xaXllTGlzdCA9IFtdXG5cbiAgICAvL+aOpeaUtuS4u+aOp+WItuWZqCDlj5Hov4fmnaXnmoQg5Yi35paw5raI5oGvXG4gICAgJHNjb3BlLiRvbihcImJveEFsbFwiLCBmdW5jdGlvbiAoZXZlbnQsIGJveE1zZykge1xuICAgICAgICBsaF9hamF4LmdldCh7XG4gICAgICAgICAgICB1cmw6ICRzY29wZS5odHRwKydib3hfMi8xLmpzb24nLFxuICAgICAgICAgICAgZGF0YTogYm94TXNnLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKG1zZykge1xuXG4gICAgICAgICAgICAgICAgYW5ndWxhci5mb3JFYWNoKG1zZy5kYXRhLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5uYW1lID09IGJveE1zZy5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtc2cuZGF0YVtrZXldLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1zZy5kYXRhW2tleV0uc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICRzY29wZS5xaXllTGlzdCA9IG1zZy5kYXRhXG5cbiAgICAgICAgICAgICAgICAkc2NvcGUuJGVtaXQoXCJib3hfMlwiLCB7c3RhcnQ6IDEsIGluZm86IG1zZy5pbmZvLCBkYXRhOiBudWxsfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG59XSk7XG5cbiIsIi8qKlxuICogQ3JlYXRlZCBieSBsaWFvaHVpMTA4MCBvbiAyMDE2LzEyLzIzLlxuICovXG5jb25zb2xlLmxvZyhcImJveF8zXCIpO1xudmFyIHRoaXNDb250cm9sbGVyID0gYW5ndWxhci5tb2R1bGUoXCJib3hfM01vZHVsZVwiLCBbXSk7XG50aGlzQ29udHJvbGxlci5jb250cm9sbGVyKFwiYm94XzNDb250cm9sbGVyXCIsIFsnJHNjb3BlJywgJ2xoX2FqYXgnLCBmdW5jdGlvbiAoJHNjb3BlLCBsaF9hamF4KSB7XG4gICAgJHNjb3BlLmNlc2hpID0gXCLmtYvor5XmiJDlip9cIlxuXG4gICAgLy/pgInmi6lzdmdcbiAgICB2YXIgZGxTdmcgPSBTbmFwKFwiI3N2Z0xlaWRhXCIpLmF0dHIoe1xuICAgICAgICB3aWR0aDogMjYzLFxuICAgICAgICBoZWlnaHQ6IDI2M1xuICAgIH0pO1xuXG5cbiAgICBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIFNuYXAuYW5pbWF0ZSgzNjAsIDAsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgLy8g5peL6L2sXG4gICAgICAgICAgICBkbFN2Zy5zZWxlY3QoJy55dWFuMycpLnRyYW5zZm9ybShuZXcgU25hcC5NYXRyaXgoKS5yb3RhdGUodmFsdWUsIDEzMiwgMTMyKSk7XG5cbiAgICAgICAgfSwgNTAwMCk7XG5cblxuICAgICAgICBTbmFwLmFuaW1hdGUoMCwgMzYwLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIC8vIOaXi+i9rOaMh+mSiFxuICAgICAgICAgICAgZGxTdmcuc2VsZWN0KCcuemhpemhlbicpLnRyYW5zZm9ybShuZXcgU25hcC5NYXRyaXgoKS5yb3RhdGUodmFsdWUsIDEzMiwgMTMyKSk7XG5cbiAgICAgICAgfSwgNTAwMCk7XG5cblxuICAgICAgICBTbmFwLmFuaW1hdGUoMCwgMzYwLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIC8vIOaXi+i9rFxuICAgICAgICAgICAgZGxTdmcuc2VsZWN0KCcubGluZS1sZWZ0JykudHJhbnNmb3JtKG5ldyBTbmFwLk1hdHJpeCgpLnJvdGF0ZSh2YWx1ZSwgMTMyLCAxMzIpKTtcbiAgICAgICAgfSwgNTAwMCk7XG4gICAgICAgIFNuYXAuYW5pbWF0ZSgzNjAsIDAsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgLy8g5peL6L2sXG4gICAgICAgICAgICBkbFN2Zy5zZWxlY3QoJy5saW5lLXJpZ2h0JykudHJhbnNmb3JtKG5ldyBTbmFwLk1hdHJpeCgpLnJvdGF0ZSh2YWx1ZSwgMTMyLCAxMzIpKTtcbiAgICAgICAgfSwgNTAwMCk7XG5cblxuICAgIH0sIDUwMDApO1xuICAgIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgU25hcC5hbmltYXRlKDM2MCwgMCwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAvLyDml4vovazmjIfpkohcbiAgICAgICAgICAgIGRsU3ZnLnNlbGVjdCgnLmRpYW4nKS50cmFuc2Zvcm0obmV3IFNuYXAuTWF0cml4KCkucm90YXRlKHZhbHVlLCAxMzIsIDEzMikpO1xuXG4gICAgICAgIH0sIDEwMDApO1xuICAgIH0sIDEwMDApO1xuXG5cblxuXG5cblxuICAgIC8vIChmdW5jdGlvbiBsZXZlbCgpIHtcbiAgICAvLyAgICAgdmFyIG15Q2hhcnQgPSBlY2hhcnRzLmluaXQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JveC0zLWNoYXJ0JykpO1xuICAgIC8vICAgICB2YXIgeEF4aXNEYXRhID0gW107XG4gICAgLy8gICAgIHZhciBkYXRhID0gW107XG4gICAgLy8gICAgIHZhciBkYXRhMiA9IFtdO1xuICAgIC8vICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDUwOyBpKyspIHtcbiAgICAvLyAgICAgICAgIHhBeGlzRGF0YS5wdXNoKGkpO1xuICAgIC8vICAgICAgICAgZGF0YS5wdXNoKChNYXRoLnNpbihpIC8gNSkgKiAoaSAvIDUgLTEwKSArIGkgLyA2KSAqIDUpO1xuICAgIC8vICAgICAgICAgZGF0YTIucHVzaCgoTWF0aC5zaW4oaSAvIDUpICogKGkgLyA1ICsgMTApICsgaSAvIDYpICogMyk7XG4gICAgLy8gICAgIH1cbiAgICAvL1xuICAgIC8vICAgICB2YXIgb3B0aW9uID0ge1xuICAgIC8vICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzAyMjAzOCcsXG4gICAgLy9cbiAgICAvLyAgICAgICAgIGdyaWQ6IHtcbiAgICAvLyAgICAgICAgICAgICBsZWZ0OiAnMCcsXG4gICAgLy8gICAgICAgICAgICAgcmlnaHQ6ICcwJyxcbiAgICAvLyAgICAgICAgICAgICBib3R0b206ICcwJyxcbiAgICAvLyAgICAgICAgICAgICB0b3A6ICcwJyxcbiAgICAvLyAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICB4QXhpczogW3tcbiAgICAvLyAgICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAvLyAgICAgICAgICAgICBkYXRhOiB4QXhpc0RhdGFcbiAgICAvLyAgICAgICAgIH0sIHtcbiAgICAvLyAgICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAvLyAgICAgICAgICAgICBkYXRhOiB4QXhpc0RhdGFcbiAgICAvLyAgICAgICAgIH1dLFxuICAgIC8vICAgICAgICAgdmlzdWFsTWFwOiB7XG4gICAgLy8gICAgICAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgLy8gICAgICAgICAgICAgbWluOiAwLFxuICAgIC8vICAgICAgICAgICAgIG1heDogNTAsXG4gICAgLy8gICAgICAgICAgICAgZGltZW5zaW9uOiAwLFxuICAgIC8vICAgICAgICAgICAgIGluUmFuZ2U6IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgY29sb3I6IFsnI0ZFNTk0NScsICcjMDA3MUJCJywgJyMwMEI5QkInLCAnI0ZGRkQ5OScsICcjRkFBRjNCJywgJyM3QkE2REInXVxuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICB5QXhpczoge1xuICAgIC8vICAgICAgICAgICAgIGF4aXNMaW5lOiB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXG4gICAgLy8gICAgICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgICAgICBheGlzTGFiZWw6IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgdGV4dFN0eWxlOiB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyM0YTY1N2EnXG4gICAgLy8gICAgICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICB9LFxuICAgIC8vICAgICAgICAgICAgIHNwbGl0TGluZToge1xuICAgIC8vICAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgIC8vICAgICAgICAgICAgICAgICBsaW5lU3R5bGU6IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnIzA4MjYzZidcbiAgICAvLyAgICAgICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICAgICAgYXhpc1RpY2s6IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICB9LFxuICAgIC8vICAgICAgICAgc2VyaWVzOiBbe1xuICAgIC8vICAgICAgICAgICAgIG5hbWU6ICdiYWNrJyxcbiAgICAvLyAgICAgICAgICAgICB0eXBlOiAnYmFyJyxcbiAgICAvLyAgICAgICAgICAgICBkYXRhOiBkYXRhMixcbiAgICAvLyAgICAgICAgICAgICB6OiAxLFxuICAgIC8vICAgICAgICAgICAgIGl0ZW1TdHlsZToge1xuICAgIC8vICAgICAgICAgICAgICAgICBub3JtYWw6IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNCxcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGJhckJvcmRlclJhZGl1czogNSxcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHNoYWRvd0JsdXI6IDMsXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBzaGFkb3dDb2xvcjogJyMxMTEnXG4gICAgLy8gICAgICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICB9LCB7XG4gICAgLy8gICAgICAgICAgICAgbmFtZTogJ1NpbXVsYXRlIFNoYWRvdycsXG4gICAgLy8gICAgICAgICAgICAgdHlwZTogJ2xpbmUnLFxuICAgIC8vICAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgLy8gICAgICAgICAgICAgejogMixcbiAgICAvLyAgICAgICAgICAgICBzaG93U3ltYm9sOiBmYWxzZSxcbiAgICAvLyAgICAgICAgICAgICBhbmltYXRpb25EZWxheTogMCxcbiAgICAvLyAgICAgICAgICAgICBhbmltYXRpb25FYXNpbmc6ICdsaW5lYXInLFxuICAgIC8vICAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAxMjAwLFxuICAgIC8vICAgICAgICAgICAgIGxpbmVTdHlsZToge1xuICAgIC8vICAgICAgICAgICAgICAgICBub3JtYWw6IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAndHJhbnNwYXJlbnQnXG4gICAgLy8gICAgICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICB9LFxuICAgIC8vICAgICAgICAgICAgIGFyZWFTdHlsZToge1xuICAgIC8vICAgICAgICAgICAgICAgICBub3JtYWw6IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnIzA4MjYzYScsXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBzaGFkb3dCbHVyOiA1MCxcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHNoYWRvd0NvbG9yOiAnIzAwMCdcbiAgICAvLyAgICAgICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIH0sIHtcbiAgICAvLyAgICAgICAgICAgICBuYW1lOiAnZnJvbnQnLFxuICAgIC8vICAgICAgICAgICAgIHR5cGU6ICdiYXInLFxuICAgIC8vICAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgLy8gICAgICAgICAgICAgeEF4aXNJbmRleDogMSxcbiAgICAvLyAgICAgICAgICAgICB6OiAzLFxuICAgIC8vICAgICAgICAgICAgIGl0ZW1TdHlsZToge1xuICAgIC8vICAgICAgICAgICAgICAgICBub3JtYWw6IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGJhckJvcmRlclJhZGl1czogNVxuICAgIC8vICAgICAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgfV0sXG4gICAgLy8gICAgICAgICBhbmltYXRpb25FYXNpbmc6ICdlbGFzdGljT3V0JyxcbiAgICAvLyAgICAgICAgIGFuaW1hdGlvbkVhc2luZ1VwZGF0ZTogJ2VsYXN0aWNPdXQnLFxuICAgIC8vICAgICAgICAgYW5pbWF0aW9uRGVsYXk6IGZ1bmN0aW9uIChpZHgpIHtcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4gaWR4ICogMjA7XG4gICAgLy8gICAgICAgICB9LFxuICAgIC8vICAgICAgICAgYW5pbWF0aW9uRGVsYXlVcGRhdGU6IGZ1bmN0aW9uIChpZHgpIHtcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4gaWR4ICogMjA7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH07XG4gICAgLy8gICAgIG15Q2hhcnQuc2V0T3B0aW9uKG9wdGlvbilcbiAgICAvL1xuICAgIC8vIH0pKCk7XG5cblxuXG5cbiAgICAkc2NvcGUucWl5ZUxpc3QgPSBbXVxuXG4gICAgLy/mjqXmlLbkuLvmjqfliLblmagg5Y+R6L+H5p2l55qEIOWIt+aWsOa2iOaBr1xuICAgICRzY29wZS4kb24oXCJib3hBbGxcIiwgZnVuY3Rpb24gKGV2ZW50LCBib3hNc2cpIHtcbiAgICAgICAgbGhfYWpheC5nZXQoe1xuICAgICAgICAgICAgdXJsOiAkc2NvcGUuaHR0cCtcImJveF8zLzEuanNvblwiLFxuICAgICAgICAgICAgZGF0YTogYm94TXNnLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKG1zZykge1xuXG5cbiAgICAgICAgICAgICAgICBhbmd1bGFyLmZvckVhY2gobXNnLmRhdGEsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlLm5hbWUgPT0gYm94TXNnLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1zZy5kYXRhW2tleV0uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbXNnLmRhdGFba2V5XS5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJHNjb3BlLnFpeWVMaXN0ID0gbXNnLmRhdGFcblxuXG4gICAgICAgICAgICAgICAgJHNjb3BlLiRlbWl0KFwiYm94XzNcIiwge3N0YXJ0OiAxLCBpbmZvOiBtc2cuaW5mbywgZGF0YTogbnVsbH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBsaF9hamF4LmdldCh7XG4gICAgICAgICAgICB1cmw6ICRzY29wZS5odHRwK1wiYm94XzMvMi5qc29uXCIsXG4gICAgICAgICAgICBkYXRhOiBib3hNc2csXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAobXNnKSB7XG5cblxuXG4gICAgICAgICAgICAgICAgJHNjb3BlLnRpdGxlID0gbXNnLmRhdGFcblxuXG4gICAgICAgICAgICAgICAgJHNjb3BlLiRlbWl0KFwiYm94XzNcIiwge3N0YXJ0OiAxLCBpbmZvOiBtc2cuaW5mbywgZGF0YTogbnVsbH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH0pO1xufV0pO1xuXG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgbGlhb2h1aTEwODAgb24gMjAxNi8xMi8yMy5cbiAqL1xuY29uc29sZS5sb2coXCJib3hfNCDlnLDlm75cIik7XG52YXIgdGhpc0NvbnRyb2xsZXIgPSBhbmd1bGFyLm1vZHVsZShcImJveF80TW9kdWxlXCIsIFtdKTtcbnRoaXNDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJib3hfNENvbnRyb2xsZXJcIiwgWyckc2NvcGUnLCAnbGhfYWpheCcsIGZ1bmN0aW9uICgkc2NvcGUsIGxoX2FqYXgpIHtcblxuXG5cblxuXG5cbiAgICBsaF9hamF4LmdldCh7XG4gICAgICAgIHVybDogJHNjb3BlLmh0dHAgKyBcImJveF80L2d1aXpob3UuanNvblwiLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAobXNnKSB7XG5cbiAgICAgICAgICAgIHZhciBjaGFydCA9IGVjaGFydHMuaW5pdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJykpO1xuXG4gICAgICAgICAgICBlY2hhcnRzLnJlZ2lzdGVyTWFwKCdndWl6aG91JywgbXNnLmRhdGEpOy8v6K6+572u5Zyw5Zu+XG5cblxuICAgICAgICAgICAgLy/lnIbngrnlnZDmoIfngrlcbiAgICAgICAgICAgIHZhciBnel9kYXRhID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBjcHMgPSAwOyBjcHMgPCBtc2cuZGF0YS5mZWF0dXJlcy5sZW5ndGg7IGNwcysrKSB7XG4gICAgICAgICAgICAgICAgZ3pfZGF0YVtjcHNdID0gbXNnLmRhdGEuZmVhdHVyZXNbY3BzXS5wcm9wZXJ0aWVzLmNwXG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIG9wdGlvbjMgPSB7XG5cblxuICAgICAgICAgICAgICAgIGdlbzoge1xuICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBtYXA6ICdndWl6aG91JyxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZW1waGFzaXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgaXRlbVN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3JtYWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmVhQ29sb3I6ICcjMDIxNzI5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyMyN2EyZDcnLFxuXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZW1waGFzaXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmVhQ29sb3I6ICcjZmY2YTAwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNiZjRjMDAnLFxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcmVnaW9uczpbe1wibmFtZVwiOlwi6LS16Ziz5biCXCIsXCJzZWxlY3RlZFwiOnRydWV9XVxuXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzZXJpZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJndWl6aG91XCIsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzY2F0dGVyJyxcbiAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZVN5c3RlbTogJ2dlbycsXG4gICAgICAgICAgICAgICAgICAgIGdlb0luZGV4OiAwLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBnel9kYXRhLFxuICAgICAgICAgICAgICAgICAgICBpdGVtU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2ZmZmZmZidcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuXG4gICAgICAgICAgICAvL+m7mOiupOesrOS4gOasoeWKoOi9veWcsOWbvlxuICAgICAgICAgICAgLy8gY2hhcnQuc2V0T3B0aW9uKG9wdGlvbjMpO1xuXG5cbiAgICAgICAgICAgIC8v5o6l5Yiw5Li75o6n5Yi25Zmo5Y+R5p2l55qE5Yi35paw5raI5oGvXG4gICAgICAgICAgICAkc2NvcGUuJG9uKFwiYm94QWxsXCIsZnVuY3Rpb24gKGV2ZW50LG1zZykge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG1zZylcbiAgICAgICAgICAgICAgICBvcHRpb24zLmdlby5yZWdpb25zPVttc2ddO1xuICAgICAgICAgICAgICAgIGNoYXJ0LnNldE9wdGlvbihvcHRpb24zKTtcblxuICAgICAgICAgICAgICAgICRzY29wZS4kZW1pdChcImJveF80XCIsIHtzdGFydDogMSwgaW5mbzogXCJib3hfND/pmpDmgqPliqDovb3miJDlip9cIiwgZGF0YTogbnVsbH0pO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICB9XG4gICAgfSk7XG5cblxuXG5cblxuXG59XSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgbGlhb2h1aTEwODAgb24gMjAxNi8xMi8yMy5cbiAqL1xuY29uc29sZS5sb2coXCJib3hfNVwiKTtcbnZhciB0aGlzQ29udHJvbGxlciA9IGFuZ3VsYXIubW9kdWxlKFwiYm94XzVNb2R1bGVcIiwgW10pO1xudGhpc0NvbnRyb2xsZXIuY29udHJvbGxlcihcImJveF81Q29udHJvbGxlclwiLCBbJyRzY29wZScsICdsaF9hamF4JywnJHRpbWVvdXQnLCBmdW5jdGlvbiAoJHNjb3BlLCBsaF9hamF4LCR0aW1lb3V0KSB7XG4gICAgJHNjb3BlLnFpeWVMaXN0PVtdO1xuXG4gICAgJHNjb3BlLiRvbignYm94QWxsJyxmdW5jdGlvbiAoZXZlbnQgLGJveE1zZykge1xuXG4gICAgICAgIGxoX2FqYXguZ2V0KHtcbiAgICAgICAgICAgIHVybDokc2NvcGUuaHR0cCtcImJveF81LzEuanNvblwiLFxuICAgICAgICAgICAgZGF0YTpib3hNc2c/Ym94TXNnOm51bGwsXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAobXNnKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobXNnLmRhdGEpXG4gICAgICAgICAgICAgICAgJHNjb3BlLnFpeWVMaXN0PW1zZy5kYXRhO1xuXG5cbiAgICAgICAgICAgICAgICAkc2NvcGUuJGVtaXQoXCJib3hfNVwiLHtzdGFydDoxLGluZm86XCJib3hfNj/pmpDmgqPliqDovb3miJDlip9cIixkYXRhOm51bGx9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiAgICB9KTtcblxufV0pO1xuXG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgbGlhb2h1aTEwODAgb24gMjAxNi8xMi8yMy5cbiAqL1xuY29uc29sZS5sb2coXCJib3hfNlwiKTtcbnZhciB0aGlzQ29udHJvbGxlciA9IGFuZ3VsYXIubW9kdWxlKFwiYm94XzZNb2R1bGVcIiwgW10pO1xudGhpc0NvbnRyb2xsZXIuY29udHJvbGxlcihcImJveF82Q29udHJvbGxlclwiLCBbJyRzY29wZScsICdsaF9hamF4JywgZnVuY3Rpb24gKCRzY29wZSwgbGhfYWpheCkge1xuICAgICRzY29wZS5jZXNoaSA9IFwi5rWL6K+V5oiQ5YqfXCJcblxuXG5cbiAgICAkc2NvcGUuJG9uKCdib3hBbGwnLGZ1bmN0aW9uIChldmVudCAsYm94TXNnKSB7XG4gICAgICAgIGxoX2FqYXguZ2V0KHtcbiAgICAgICAgICAgIHVybDogJHNjb3BlLmh0dHAgKyBcImJveF82LzEuanNvblwiLFxuICAgICAgICAgICAgZGF0YTpib3hNc2c/Ym94TXNnOm51bGwsXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAobXNnKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobXNnLmRhdGEpXG4gICAgICAgICAgICAgICAgbGV2ZWwobXNnLmRhdGEpXG4gICAgICAgICAgICAgICAgJHNjb3BlLiRlbWl0KFwiYm94XzZcIix7c3RhcnQ6MSxpbmZvOlwiYm94XzY/6ZqQ5oKj5Yqg6L295oiQ5YqfXCIsZGF0YTpudWxsfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBsZXZlbChvKSB7XG4gICAgICAgIHZhciBteUNoYXJ0ID0gZWNoYXJ0cy5pbml0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib3hfNicpKTtcbiAgICAgICAgdmFyIG9wdGlvbiA9IHtcblxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzAyMTcyOScsXG4gICAgICAgICAgICBjb2xvcjogW10sXG4gICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICAgIHRleHQ6ICfpmpDmgqPmjpLmn6XnuqfliKsnLFxuICAgICAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgICAgICB0ZXh0U3R5bGU6IHtcblxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNmZmYnLCAgICAgICAgIC8vIOWbvuS+i+aWh+Wtl+minOiJslxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTMsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzAzMkQ0RlwiLFxuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgICAgIHRyaWdnZXI6ICdpdGVtJyxcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6IFwie2F9IDxici8+e2J9IDoge2N9IFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgb3JpZW50OiAndmVydGljYWwnLFxuICAgICAgICAgICAgICAgIHk6ICdib3R0b20nLFxuICAgICAgICAgICAgICAgIHg6IFwicmlnaHRcIixcblxuICAgICAgICAgICAgICAgIGhlaWdodDogMjAsXG4gICAgICAgICAgICAgICAgZGF0YTogWyfnrKzkuIDkuKonLCAn56ys5LqM5LiqJ10sXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXJpZXM6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiAn55So5oi35bGe5oCnJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAncGllJyxcbiAgICAgICAgICAgICAgICByYWRpdXM6ICc3MCUnLFxuICAgICAgICAgICAgICAgIGNlbnRlcjogWyc1MCUnLCAnNDUlJ10sXG4gICAgICAgICAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyYW0ucGVyY2VudC50b0ZpeGVkKDApICsgJyUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnaW5uZXInLFxuXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVtcGhhc2lzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyYW0ucGVyY2VudC50b0ZpeGVkKDApICsgJyUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAyMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGl0ZW1TdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBub3JtYWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiA1LFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwiIzAyMTcyOVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRhdGE6IFtdXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy/miormlbDmja7mt7vliqDliLBvcHRpb27ph4zpnaJcbiAgICAgICAgZm9yICh2YXIgcyA9IDA7IHMgPCBvLmxlbmd0aDsgcysrKSB7XG4gICAgICAgICAgICBvcHRpb24uc2VyaWVzLmRhdGFbc10gPSB7XG4gICAgICAgICAgICAgICAgdmFsdWU6b1tzXS52YWx1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOm9bc10ubmFtZSxcbiAgICAgICAgICAgICAgICBpdGVtU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogb1tzXS5jb2xvclxuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIH1cbiAgICAgICAgbXlDaGFydC5zZXRPcHRpb24ob3B0aW9uKVxuXG4gICAgfVxuXG5cblxufV0pO1xuXG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgbGlhb2h1aTEwODAgb24gMjAxNi8xMi8yMy5cbiAqL1xuY29uc29sZS5sb2coXCJib3hfN1wiKTtcbnZhciB0aGlzQ29udHJvbGxlciA9IGFuZ3VsYXIubW9kdWxlKFwiYm94XzdNb2R1bGVcIiwgW10pO1xudGhpc0NvbnRyb2xsZXIuY29udHJvbGxlcihcImJveF83Q29udHJvbGxlclwiLCBbJyRzY29wZScsICdsaF9hamF4JywgZnVuY3Rpb24gKCRzY29wZSwgbGhfYWpheCkge1xuICAgICRzY29wZS5jZXNoaT1cIua1i+ivleaIkOWKn1wiXG5cblxuXG4gICAgJHNjb3BlLiRvbignYm94QWxsJyxmdW5jdGlvbiAoZXZlbnQgLGJveE1zZykge1xuICAgICAgICBsaF9hamF4LmdldCh7XG4gICAgICAgICAgICB1cmw6ICRzY29wZS5odHRwICsgXCJib3hfNy8xLmpzb25cIixcbiAgICAgICAgICAgIGRhdGE6Ym94TXNnP2JveE1zZzpudWxsLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKG1zZykge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG1zZy5kYXRhKVxuICAgICAgICAgICAgICAgIGxldmVsKG1zZy5kYXRhKVxuICAgICAgICAgICAgICAgICRzY29wZS4kZW1pdChcImJveF83XCIse3N0YXJ0OjEsaW5mbzpcImJveF83P+makOaCo+WKoOi9veaIkOWKn1wiLGRhdGE6bnVsbH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gbGV2ZWwobykge1xuICAgICAgICB2YXIgbXlDaGFydCA9IGVjaGFydHMuaW5pdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm94XzcnKSk7XG4gICAgICAgIHZhciBvcHRpb24gPSB7XG5cbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwMjE3MjknLFxuICAgICAgICAgICAgY29sb3I6IFtdLFxuICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICB0ZXh0OiAn5qOA5p+l5Li75L2TJyxcbiAgICAgICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICAgICAgdGV4dFN0eWxlOiB7XG5cbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZmZmJywgICAgICAgICAvLyDlm77kvovmloflrZfpopzoibJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDEzLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMwMzJENEZcIixcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyOiAnaXRlbScsXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVyOiBcInthfSA8YnIvPntifSA6IHtjfSBcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgIG9yaWVudDogJ3ZlcnRpY2FsJyxcbiAgICAgICAgICAgICAgICB5OiAnYm90dG9tJyxcbiAgICAgICAgICAgICAgICB4OiBcInJpZ2h0XCIsXG5cbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgIGRhdGE6IFsn56ys5LiA5LiqJywgJ+esrOS6jOS4qiddLFxuICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VyaWVzOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ+eUqOaIt+WxnuaApycsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3BpZScsXG4gICAgICAgICAgICAgICAgcmFkaXVzOiAnNzAlJyxcbiAgICAgICAgICAgICAgICBjZW50ZXI6IFsnNTAlJywgJzQ1JSddLFxuICAgICAgICAgICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgICAgICAgICAgIG5vcm1hbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcmFtLnBlcmNlbnQudG9GaXhlZCgwKSArICclJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2lubmVyJyxcblxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBlbXBoYXNpczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcmFtLnBlcmNlbnQudG9GaXhlZCgwKSArICclJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0U3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMjAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogJ2JvbGQnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBpdGVtU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcIiMwMjE3MjlcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkYXRhOiBbXVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8v5oqK5pWw5o2u5re75Yqg5Yiwb3B0aW9u6YeM6Z2iXG4gICAgICAgIGZvciAodmFyIHMgPSAwOyBzIDwgby5sZW5ndGg7IHMrKykge1xuICAgICAgICAgICAgb3B0aW9uLnNlcmllcy5kYXRhW3NdID0ge1xuICAgICAgICAgICAgICAgIHZhbHVlOm9bc10udmFsdWUsXG4gICAgICAgICAgICAgICAgbmFtZTpvW3NdLm5hbWUsXG4gICAgICAgICAgICAgICAgaXRlbVN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIG5vcm1hbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IG9bc10uY29sb3JcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICB9XG4gICAgICAgIG15Q2hhcnQuc2V0T3B0aW9uKG9wdGlvbilcblxuICAgIH1cblxuXG59XSk7XG5cbiIsIi8qKlxuICogQ3JlYXRlZCBieSBsaWFvaHVpMTA4MCBvbiAyMDE2LzEyLzIzLlxuICovXG5jb25zb2xlLmxvZyhcImJveF84XCIpO1xudmFyIHRoaXNDb250cm9sbGVyID0gYW5ndWxhci5tb2R1bGUoXCJib3hfOE1vZHVsZVwiLCBbXSk7XG50aGlzQ29udHJvbGxlci5jb250cm9sbGVyKFwiYm94XzhDb250cm9sbGVyXCIsIFsnJHNjb3BlJywgJ2xoX2FqYXgnLCBmdW5jdGlvbiAoJHNjb3BlLCBsaF9hamF4KSB7XG4gICAgJHNjb3BlLnFpeWVMaXN0PVtdO1xuXG5cbiAgICAkc2NvcGUuJG9uKCdib3hBbGwnLGZ1bmN0aW9uIChldmVudCAsYm94TXNnKSB7XG4gICAgICAgIGxoX2FqYXguZ2V0KHtcbiAgICAgICAgICAgIHVybDogJHNjb3BlLmh0dHAgKyBcImJveF84LzEuanNvblwiLFxuICAgICAgICAgICAgZGF0YTpib3hNc2c/Ym94TXNnOm51bGwsXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAobXNnKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobXNnLmRhdGEpXG4gICAgICAgICAgICAgICAgJHNjb3BlLnFpeWVMaXN0PW1zZy5kYXRhO1xuICAgICAgICAgICAgICAgICRzY29wZS4kZW1pdChcImJveF83XCIse3N0YXJ0OjEsaW5mbzptc2cuaW5mbyxkYXRhOm51bGx9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiAgICB9KTtcbn1dKTtcblxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGxpYW9odWkxMDgwIG9uIDIwMTYvMTIvMjMuXG4gKi9cbmNvbnNvbGUubG9nKFwiYm94XzlcIik7XG52YXIgdGhpc0NvbnRyb2xsZXIgPSBhbmd1bGFyLm1vZHVsZShcImJveF85TW9kdWxlXCIsIFtdKTtcbnRoaXNDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJib3hfOUNvbnRyb2xsZXJcIiwgWyckc2NvcGUnLCAnbGhfYWpheCcsIGZ1bmN0aW9uICgkc2NvcGUsIGxoX2FqYXgpIHtcbiAgICAkc2NvcGUuY2VzaGk9XCLmtYvor5XmiJDlip9cIlxuXG5cbiAgICAkc2NvcGUuJG9uKCdib3hBbGwnLGZ1bmN0aW9uIChldmVudCAsYm94TXNnKSB7XG4gICAgICAgIGxoX2FqYXguZ2V0KHtcbiAgICAgICAgICAgIHVybDogJHNjb3BlLmh0dHAgKyBcImJveF85LzEuanNvblwiLFxuICAgICAgICAgICAgZGF0YTpib3hNc2c/Ym94TXNnOm51bGwsXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAobXNnKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobXNnLmRhdGEpXG4gICAgICAgICAgICAgICAgcXV4aWFudHUobXNnLmRhdGEpXG4gICAgICAgICAgICAgICAgJHNjb3BlLiRlbWl0KFwiYm94XzlcIix7c3RhcnQ6MSxpbmZvOlwiYm94XzY/6ZqQ5oKj5Yqg6L295oiQ5YqfXCIsZGF0YTpudWxsfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cblxufV0pO1xuXG5cblxuXG4vL+absue6v+WbvlxuZnVuY3Rpb24gcXV4aWFudHUobykge1xuICAgIHZhciBteUNoYXJ0ID0gZWNoYXJ0cy5pbml0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib3hfOScpKTtcbiAgICAvLyDov4fmuKEtLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBteUNoYXJ0LnNob3dMb2FkaW5nKHtcbiAgICAgICAgdGV4dDogJ+ato+WcqOWKquWKm+eahOivu+WPluaVsOaNruS4rS4uLicsICAgIC8vbG9hZGluZ+ivneacr1xuICAgIH0pO1xuICAgIG15Q2hhcnQuaGlkZUxvYWRpbmcoKTtcbiAgICAvLyBteUNoYXJ0LmdyaWQoMjAsMjAsMCwwKVxuICAgIHdpbmRvdy5vbnJlc2l6ZSA9IG15Q2hhcnQucmVzaXplO1xuXG5cbiAgICB2YXIgb3B0aW9uID0ge1xuICAgICAgICAvLyDlhajlm77pu5jorqTog4zmma9cbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzAyMTcyOScsXG5cbiAgICAgICAgLy8g6buY6K6k6Imy5p2/XG4gICAgICAgIC8vIGNvbG9yOiBbXG4gICAgICAgIC8vICAgICAnI0ZFODQ2MycsICcjOUJDQTYzJywgJyNGQUQ4NjAnLCAnIzYwQzBERCcsICcjMDA4NEM2JyxcbiAgICAgICAgLy8gICAgICcjRDc1MDRCJywgJyNDNkU1NzknLCAnIzI2QzBDMCcsICcjRjA4MDVBJywgJyNGNEUwMDEnLFxuICAgICAgICAvLyAgICAgJyNCNUMzMzQnXG4gICAgICAgIC8vIF0sXG4gICAgICAgIC8v6L656Led572R5qC8XG4gICAgICAgIGdyaWQ6IHtcbiAgICAgICAgICAgIGxlZnQ6ICcxMCcsXG4gICAgICAgICAgICByaWdodDogJzIwJyxcbiAgICAgICAgICAgIGJvdHRvbTogJzEyJyxcbiAgICAgICAgICAgIHRvcDogJzQwJyxcbiAgICAgICAgICAgIGNvbnRhaW5MYWJlbDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB0ZXh0U3R5bGU6e1xuICAgICAgICAgICAgY29sb3I6XCIjZmZmXCJcbiAgICAgICAgfSxcblxuXG4gICAgICAgIC8vIOWbvuihqOagh+mimFxuICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgdGV4dDogXCIg5YWo5bm06ZqQ5oKj55uR5a+f6LaL5Yq/IFwiLFxuICAgICAgICAgICAgdGV4dFN0eWxlOiB7XG4gICAgICAgICAgICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXG4gICAgICAgICAgICAgICAgY29sb3I6ICcjZmZmJyAsICAgICAgICAgLy8g5Zu+5L6L5paH5a2X6aKc6ImyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6MTMsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeDpcImxlZnRcIixcbiAgICAgICAgICAgIHk6XCJ0b3BcIixcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcIiMwMzJENEZcIixcblxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIOWbvuS+i1xuICAgICAgICBsZWdlbmQ6IHtcblxuICAgICAgICAgICAgdGV4dFN0eWxlOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICcjM2E4N2FkJywgICAgICAgICAvLyDlm77kvovmloflrZfpopzoibJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogMTAsXG4gICAgICAgICAgICAgICAgZm9udEZhbWlseTpcIuaWueato+iIkuS9k1wiLFxuICAgICAgICAgICAgICAgIGZvbnRTdHlsZTonbm9ybWFsJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRhdGE6IFtdLFxuICAgICAgICAgICAgeDogXCJyaWdodFwiLFxuICAgICAgICAgICAgeTogXCJ0b3BcIixcblxuICAgICAgICB9LFxuXG5cbiAgICAgICAgLy/lt6XlhbfmnaFcbiAgICAgICAgLy8gdG9vbGJveDoge1xuICAgICAgICAvLyAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgLy8gICAgIGZlYXR1cmU6IHtcbiAgICAgICAgLy8gICAgICAgICBtYXJrOiB7c2hvdzogdHJ1ZX0sXG4gICAgICAgIC8vICAgICAgICAgZGF0YVZpZXc6IHtzaG93OiB0cnVlLCByZWFkT25seTogZmFsc2V9LFxuICAgICAgICAvLyAgICAgICAgIG1hZ2ljVHlwZToge3Nob3c6IHRydWUsIHR5cGU6IFsnbGluZScsICdiYXInLCAnc3RhY2snLCAndGlsZWQnXX0sXG4gICAgICAgIC8vICAgICAgICAgcmVzdG9yZToge3Nob3c6IHRydWV9LFxuICAgICAgICAvLyAgICAgICAgIHNhdmVBc0ltYWdlOiB7c2hvdzogdHJ1ZX0sXG4gICAgICAgIC8vICAgICAgICAgLy8gbXlUb29sMToge1xuICAgICAgICAvLyAgICAgICAgIC8vICAgICBzaG93OiB0cnVlLFxuICAgICAgICAvLyAgICAgICAgIC8vICAgICB0aXRsZTogJ+WIt+aWsCcsXG4gICAgICAgIC8vICAgICAgICAgLy8gICAgIGljb246ICdwYXRoOi8vTTQzMi40NSw1OTUuNDQ0YzAsMi4xNzctNC42NjEsNi44Mi0xMS4zMDUsNi44MmMtNi40NzUsMC0xMS4zMDYtNC41NjctMTEuMzA2LTYuODJzNC44NTItNi44MTIsMTEuMzA2LTYuODEyQzQyNy44NDEsNTg4LjYzMiw0MzIuNDUyLDU5My4xOTEsNDMyLjQ1LDU5NS40NDRMNDMyLjQ1LDU5NS40NDR6IE00MjEuMTU1LDU4OS44NzZjLTMuMDA5LDAtNS40NDgsMi40OTUtNS40NDgsNS41NzJzMi40MzksNS41NzIsNS40NDgsNS41NzJjMy4wMSwwLDUuNDQ5LTIuNDk1LDUuNDQ5LTUuNTcyQzQyNi42MDQsNTkyLjM3MSw0MjQuMTY1LDU4OS44NzYsNDIxLjE1NSw1ODkuODc2TDQyMS4xNTUsNTg5Ljg3NnogTTQyMS4xNDYsNTkxLjg5MWMtMS45MTYsMC0zLjQ3LDEuNTg5LTMuNDcsMy41NDljMCwxLjk1OSwxLjU1NCwzLjU0OCwzLjQ3LDMuNTQ4czMuNDY5LTEuNTg5LDMuNDY5LTMuNTQ4QzQyNC42MTQsNTkzLjQ3OSw0MjMuMDYyLDU5MS44OTEsNDIxLjE0Niw1OTEuODkxTDQyMS4xNDYsNTkxLjg5MXpNNDIxLjE0Niw1OTEuODkxJyxcbiAgICAgICAgLy8gICAgICAgICAvLyAgICAgb25jbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyAgICAgICAgIC8vICAgICAgICAgYWxlcnQoJ215VG9vbEhhbmRsZXIxJylcbiAgICAgICAgLy8gICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgICAgICAgIC8vIH1cbiAgICAgICAgLy8gICAgIH0sXG4gICAgICAgIC8vICAgICB4OiBcInJpZ2h0XCIsXG4gICAgICAgIC8vICAgICB5OiBcInRvcFwiLFxuICAgICAgICAvLyAgICAgYmFja2dyb3VuZENvbG9yOlwiIzMzM1wiXG4gICAgICAgIC8vIH0sXG5cblxuICAgICAgICAvLyDmj5DnpLrmoYZcbiAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgyNTAsMjUwLDI1MCwwLjgpJywgICAgIC8vIOaPkOekuuiDjOaZr+minOiJsu+8jOm7mOiupOS4uumAj+aYjuW6puS4ujAuN+eahOm7keiJslxuICAgICAgICAgICAgYXhpc1BvaW50ZXI6IHsgICAgICAgICAgICAvLyDlnZDmoIfovbTmjIfnpLrlmajvvIzlnZDmoIfovbTop6blj5HmnInmlYhcbiAgICAgICAgICAgICAgICB0eXBlOiAnbGluZScsICAgICAgICAgLy8g6buY6K6k5Li655u057q/77yM5Y+v6YCJ5Li677yaJ2xpbmUnIHwgJ3NoYWRvdydcbiAgICAgICAgICAgICAgICBsaW5lU3R5bGU6IHsgICAgICAgICAgLy8g55u057q/5oyH56S65Zmo5qC35byP6K6+572uXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2FhYSdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNyb3NzU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjYWFhJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2hhZG93U3R5bGU6IHsgICAgICAgICAgICAgICAgICAgICAvLyDpmLTlvbHmjIfnpLrlmajmoLflvI/orr7nva5cbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDIwMCwyMDAsMjAwLDAuMiknXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRleHRTdHlsZToge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAnIzMzMycsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6MTJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuXG4gICAgICAgIHhBeGlzOiBbXG4gICAgICAgICAgICB7XG5cbiAgICAgICAgICAgICAgICBzcGxpdExpbmU6IHtcbiAgICAgICAgICAgICAgICAgICAgbGluZVN0eWxlOiB7ICAgICAgIC8vIOWxnuaAp2xpbmVTdHlsZeaOp+WItue6v+adoeagt+W8j1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjMTczNDUyJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAvL+iuvue9ruWdkOagh+i9tOaWh+Wtl+minOiJslxuICAgICAgICAgICAgICAgIGF4aXNMYWJlbDoge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0U3R5bGU6IHtjb2xvcjogXCIjMDA5NkZDXCJ9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0eXBlOiAnY2F0ZWdvcnknLFxuICAgICAgICAgICAgICAgIGJvdW5kYXJ5R2FwOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkYXRhOiBvLnhBeGlzLFxuXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHlBeGlzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3ZhbHVlJyxcbiAgICAgICAgICAgICAgICAvL+iuvue9ruWdkOagh+i9tOi+ueahhuminOiJslxuICAgICAgICAgICAgICAgIHNwbGl0TGluZToge1xuICAgICAgICAgICAgICAgICAgICBsaW5lU3R5bGU6IHsgICAgICAgLy8g5bGe5oCnbGluZVN0eWxl5o6n5Yi257q/5p2h5qC35byPXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyMxNzM0NTInXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIC8v6K6+572u5Z2Q5qCH6L205paH5a2X6aKc6ImyXG4gICAgICAgICAgICAgICAgYXhpc0xhYmVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHRleHRTdHlsZToge2NvbG9yOiBcIiMwMDk2RkNcIn1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIC8vIHNlcmllczogW1xuICAgICAgICAvLyAgICAge1xuICAgICAgICAvLyAgICAgICAgIG5hbWU6ICfmiJDkuqQnLFxuICAgICAgICAvLyAgICAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgICAgLy8gICAgICAgICBzbW9vdGg6IHRydWUsXG4gICAgICAgIC8vICAgICAgICAgaXRlbVN0eWxlOiB7bm9ybWFsOiB7Y29sb3I6IFwiI0ZGRkYwMFwiLCBhcmVhU3R5bGU6IHtjb2xvcjogJyNGRkZGMDAnfX19LFxuICAgICAgICAvLyAgICAgICAgIGRhdGE6IFsxMCwgMTIsIDIxLCA1NCwgMjYwLCA4MzAsIDBdXG4gICAgICAgIC8vICAgICB9LFxuICAgICAgICAvLyAgICAge1xuICAgICAgICAvLyAgICAgICAgIG5hbWU6ICfpooTotK0nLFxuICAgICAgICAvLyAgICAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgICAgLy8gICAgICAgICBzbW9vdGg6IHRydWUsXG4gICAgICAgIC8vICAgICAgICAgaXRlbVN0eWxlOiB7bm9ybWFsOiB7Y29sb3I6IFwiIzhCMkJDQ1wiLCBhcmVhU3R5bGU6IHtjb2xvcjogJyM4QjJCQ0MnfX19LFxuICAgICAgICAvLyAgICAgICAgIGRhdGE6IFswLCAxODIsIDQzNCwgNzkxLCAzOTAsIDMwLCAxMCwgNDAsIDkwMCwgMTAwLCAzMDAsIDIwMCwgNTAwXVxuICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgLy8gICAgIHtcbiAgICAgICAgLy8gICAgICAgICBuYW1lOiAn5oSP5ZCRJyxcbiAgICAgICAgLy8gICAgICAgICB0eXBlOiAnbGluZScsXG4gICAgICAgIC8vICAgICAgICAgc21vb3RoOiB0cnVlLFxuICAgICAgICAvLyAgICAgICAgIGl0ZW1TdHlsZToge25vcm1hbDoge2NvbG9yOiBcIiMwMEQ3RkJcIiwgYXJlYVN0eWxlOiB7Y29sb3I6ICcjMDBEN0ZCJ319fSxcbiAgICAgICAgLy8gICAgICAgICBkYXRhOiBbMTAwMCwgODAwLCA2MDEsIDIzNCwgMTIwLCA5MCwgMjBdXG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIF1cblxuICAgICAgICBzZXJpZXM6IFtdXG4gICAgfTtcblxuXG4gICAgLy/miormlbDmja7mt7vliqDliLBvcHRpb27ph4zpnaJcbiAgICBmb3IgKHZhciBzID0gMDsgcyA8IG8uc2VyaWVzLmxlbmd0aDsgcysrKSB7XG5cbiAgICAgICAgLy/nu5noioLngrnlop7liqDmlbDmja4s5pi+56S657q/5oCn5Zu+XG4gICAgICAgIG8uc2VyaWVzW3NdLnR5cGUgPSAnbGluZSc7XG4gICAgICAgIG8uc2VyaWVzW3NdLml0ZW1TdHlsZSA9IHtcbiAgICAgICAgICAgIG5vcm1hbDoge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBvLnNlcmllc1tzXS5jb2xvckJnLFxuICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOjUsXG4gICAgICAgICAgICAgICAgb3BhY2l0eToxLFxuICAgICAgICAgICAgICAgIGFyZWFTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OjAuNVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTsgLy/orr7nva7lm77og4zmma9cbiAgICAgICAgby5zZXJpZXNbc10uc21vb3RoID0gdHJ1ZTsgLy/nur/nmoTovazmipjngrnovazmjaLkuLrlnIbop5JcbiAgICAgICAgb3B0aW9uLnNlcmllcy5wdXNoKG8uc2VyaWVzW3NdKTsgLy/miormlbDmja7mt7vliqDliLDoioLngrnkuIpcblxuXG4gICAgICAgIC8v57uZ5Zu+5L6L5re75Yqg5pWw5o2uXG4gICAgICAgIG9wdGlvbi5sZWdlbmQuZGF0YS5wdXNoKG8uc2VyaWVzW3NdLm5hbWUpXG5cbiAgICB9XG5cblxuICAgIG15Q2hhcnQuc2V0T3B0aW9uKG9wdGlvbik7XG59XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgbGlhb2h1aTEwODAgb24gMjAxNi8xMi8yMy5cbiAqL1xuY29uc29sZS5sb2coXCJyb290Q29udHJvbGxlclwiKTtcbnZhciByb290Q29udHJvbGxlciA9IGFuZ3VsYXIubW9kdWxlKFwicm9vdE1vZHVsZVwiLCBbXSk7XG5cbnJvb3RDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJyb290Q29udHJvbGxlclwiLCBbJyRzY29wZScsICdsaF9hamF4JywgJyRyb290U2NvcGUnLCAnJHRpbWVvdXQnLCAnJGludGVydmFsJyxcbiAgICBmdW5jdGlvbiAoJHNjb3BlLCBsaF9hamF4LCAkcm9vdFNjb3BlLCAkdGltZW91dCwgJGludGVydmFsKSB7XG5cbiAgICAgICAgLy/miYDmnIlhamF45YmN6Z2i5omA6KaB5Yqg55qEaHR0cOWcsOWdgFxuICAgICAgICAkc2NvcGUuaHR0cCA9IFwic2VydmVyX2pzb24vXCI7XG5cbiAgICAgICAgLy/mjqfliLbpobXpnaIg5Yqg6L295qih5Z2XXG4gICAgICAgICRzY29wZS5pbmNsdWRlID0ge1xuICAgICAgICAgICAgYm94XzE6IFwiYm94XzEuaHRtbFwiLFxuICAgICAgICAgICAgYm94XzI6IFwiYm94XzIuaHRtbFwiLFxuICAgICAgICAgICAgYm94XzM6IFwiYm94XzMuaHRtbFwiLFxuICAgICAgICAgICAgYm94XzQ6IFwiYm94XzQuaHRtbFwiLFxuICAgICAgICAgICAgYm94XzU6IFwiYm94XzUuaHRtbFwiLFxuICAgICAgICAgICAgYm94XzY6IFwiYm94XzYuaHRtbFwiLFxuICAgICAgICAgICAgYm94Xzc6IFwiYm94XzcuaHRtbFwiLFxuICAgICAgICAgICAgYm94Xzg6IFwiYm94XzguaHRtbFwiLFxuICAgICAgICAgICAgYm94Xzk6IFwiYm94XzkuaHRtbFwiLFxuICAgICAgICAgICAgYm94XzEwOiBcImJveF8xMC5odG1sXCIsXG4gICAgICAgICAgICBib3hfMTE6IFwiYm94XzExLmh0bWxcIlxuICAgICAgICB9O1xuXG5cbiAgICAgICAgLy/nu5nlhajlsYDlub/mkq3nmoTmtojmga9cbiAgICAgICAgJHNjb3BlLmNpdHkgPSBbXG4gICAgICAgICAgICB7XCJuYW1lXCI6IFwi6LS16Ziz5biCXCIsIFwicmVzXCI6IDEyLCBcInNlbGVjdGVkXCI6IHRydWV9LFxuICAgICAgICAgICAge1wibmFtZVwiOiBcIuWFreebmOawtOW4glwiLCBcInJlc1wiOiAxMiwgXCJzZWxlY3RlZFwiOiB0cnVlfSxcbiAgICAgICAgICAgIHtcIm5hbWVcIjogXCLpgbXkuYnluIJcIiwgXCJyZXNcIjogMTIsIFwic2VsZWN0ZWRcIjogdHJ1ZX0sXG4gICAgICAgICAgICB7XCJuYW1lXCI6IFwi5a6J6aG65biCXCIsIFwicmVzXCI6IDEyLCBcInNlbGVjdGVkXCI6IHRydWV9LFxuICAgICAgICAgICAge1wibmFtZVwiOiBcIuavleiKguW4glwiLCBcInJlc1wiOiAxMiwgXCJzZWxlY3RlZFwiOiB0cnVlfSxcbiAgICAgICAgICAgIHtcIm5hbWVcIjogXCLpk5zku4HluIJcIiwgXCJyZXNcIjogMTIsIFwic2VsZWN0ZWRcIjogdHJ1ZX0sXG4gICAgICAgICAgICB7XCJuYW1lXCI6IFwi6buU5Y2X5biD5L6d5peP6IuX5peP6Ieq5rK75beeXCIsIFwicmVzXCI6IDEyLCBcInNlbGVjdGVkXCI6IHRydWV9LFxuICAgICAgICAgICAge1wibmFtZVwiOiBcIum7lOilv+WNl+W4g+S+neaXj+iLl+aXj+iHquayu+W3nlwiLCBcInJlc1wiOiAxMiwgXCJzZWxlY3RlZFwiOiB0cnVlfSxcbiAgICAgICAgICAgIHtcIm5hbWVcIjogXCLpu5TkuJzljZfoi5fml4/kvpfml4/oh6rmsrvlt55cIiwgXCJyZXNcIjogMTIsIFwic2VsZWN0ZWRcIjogdHJ1ZX0sXG5cbiAgICAgICAgXTtcblxuICAgICAgICAvL+WPkemAgem7mOiupOW5v+aSrSxcbiAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJHNjb3BlLiRicm9hZGNhc3QoXCJib3hBbGxcIiwgJHNjb3BlLmNpdHlbMF0pO1xuICAgICAgICB9LDApO1xuXG5cbiAgICAgICAgLy/lrprml7blj5HpgIHlub/mkq1cbiAgICAgICAgdmFyIGNpdHlOdW1iZXIgPSAwO1xuICAgICAgICAkaW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICBpZiAoY2l0eU51bWJlciA9PSA4KSB7XG4gICAgICAgICAgICAgICAgLy8gJGludGVydmFsLmNhbmNlbChzdG9wKTtcbiAgICAgICAgICAgICAgICBjaXR5TnVtYmVyID0gLTE7XG5cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGNpdHlOdW1iZXIgPSBjaXR5TnVtYmVyICsgMTtcbiAgICAgICAgICAgICAgICAkc2NvcGUuJGJyb2FkY2FzdChcImJveEFsbFwiLCAkc2NvcGUuY2l0eVtjaXR5TnVtYmVyXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMDAwKTtcblxuXG5cbiAgICAgICAgLy/lrZjlgqjlrZDmjqfliLblmajlj5HmnaXnmoTmtojmga8sXG4gICAgICAgIC8vICRzY29wZS5ib3hNc2c9W107XG4gICAgICAgIC8vICRzY29wZS5ib3hNc2cgPSBbXTtcbiAgICAgICAgLy8gJHNjb3BlLmJveE1zZ0h0bWwgPSBbXTtcbiAgICAgICAgLy9cbiAgICAgICAgLy9cbiAgICAgICAgLy8gdmFyIGNhbGxiYWNrID0gZnVuY3Rpb24gKGV2ZW50LCBtc2cpIHtcbiAgICAgICAgLy8gICAgICRzY29wZS5ib3hNc2cucHVzaChtc2cpXG4gICAgICAgIC8vIH07XG4gICAgICAgIC8vICRzY29wZS4kb24oXCJib3hfMVwiLCBjYWxsYmFjayk7XG4gICAgICAgIC8vICRzY29wZS4kb24oXCJib3hfMlwiLCBjYWxsYmFjayk7XG4gICAgICAgIC8vICRzY29wZS4kb24oXCJib3hfM1wiLCBjYWxsYmFjayk7XG4gICAgICAgIC8vICRzY29wZS4kb24oXCJib3hfNFwiLCBjYWxsYmFjayk7XG4gICAgICAgIC8vICRzY29wZS4kb24oXCJib3hfNVwiLCBjYWxsYmFjayk7XG4gICAgICAgIC8vICRzY29wZS4kb24oXCJib3hfNlwiLCBjYWxsYmFjayk7XG4gICAgICAgIC8vICRzY29wZS4kb24oXCJib3hfN1wiLCBjYWxsYmFjayk7XG4gICAgICAgIC8vICRzY29wZS4kb24oXCJib3hfOFwiLCBjYWxsYmFjayk7XG4gICAgICAgIC8vICRzY29wZS4kb24oXCJib3hfOVwiLCBjYWxsYmFjayk7XG4gICAgICAgIC8vICRzY29wZS4kb24oXCJib3hfMTBcIiwgY2FsbGJhY2spO1xuICAgICAgICAvLyAkc2NvcGUuJG9uKFwiYm94XzExXCIsIGNhbGxiYWNrKTtcbiAgICAgICAgLy8gJHNjb3BlLiRvbihcImJveF8xMlwiLCBjYWxsYmFjayk7XG5cblxuXG5cblxuICAgICAgICAvLyBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHskc2NvcGUuJG9uKFwiYm94XzFcIiwgY2FsbGJhY2spfSwxMDAwKVxuICAgICAgICAvLyBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHskc2NvcGUuJG9uKFwiYm94XzJcIiwgY2FsbGJhY2spfSw0MDAwKVxuICAgICAgICAvLyBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHskc2NvcGUuJG9uKFwiYm94XzNcIiwgY2FsbGJhY2spfSw2MDAwKVxuICAgICAgICAvLyBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gICAgICRzY29wZS5ib3hNc2dbMF09XCJkZGRkZGRkXCJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiYWRmXCIpXG4gICAgICAgIC8vICAgICAkc2NvcGUuJGFwcGx5KCk7XG4gICAgICAgIC8vIH0sMTAwMCk7XG4gICAgICAgIC8vICRzY29wZS5hYmM9XCJkZGRkZGRcIlxuICAgICAgICAvLyBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gICAgICRzY29wZS5hYmM9XCJjY2NjY2NcIjtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gfSwxMDAwKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gJHNjb3BlLnRpbWVrZT1zZXRUaW1lb3V0KCRzY29wZS50aW1la2U0LDMwMDApO1xuICAgICAgICAvLyAkc2NvcGUudGltZWtlND1mdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vICAgICAkc2NvcGUuYWJjPVwiY2NjY2NjXCI7XG4gICAgICAgIC8vIH07XG4gICAgICAgIC8vXG4gICAgICAgIC8vXG4gICAgICAgIC8vXG5cblxuICAgICAgICAvLyAkc2NvcGUuJHdhdGNoKCdib3hNc2cnLCBmdW5jdGlvbiAobmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhvbGRWYWx1ZSk7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhuZXdWYWx1ZSk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vXG4gICAgICAgIC8vIH0pO1xuICAgICAgICAvL1xuICAgICAgICAvL1xuICAgICAgICAvL1xuICAgICAgICAvL1xuICAgICAgICAvLyAkc2NvcGUuYWJjID0gMDtcbiAgICAgICAgLy8gJGludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gICAgICRzY29wZS5hYmMgPSAkc2NvcGUuYWJjKzE7XG4gICAgICAgIC8vICAgICAkc2NvcGUuYm94TXNnSHRtbFskc2NvcGUuYWJjXSA9ICRzY29wZS5ib3hNc2dbJHNjb3BlLmFiY11cbiAgICAgICAgLy8gfSwgMTAwMCk7XG4gICAgICAgIC8vXG5cbiAgICB9XSk7XG5cbiIsIi8qKlxuICogQ3JlYXRlZCBieSBsaWFvaHVpMTA4MCBvbiAxNi8yLzI2LiBmYWN0b3J5LmpzXG4gKlxuICog5pyN5Yqh5Yib5bu66aG16Z2iXG4gKi9cblxuXG4vL2ZhY3RvcnkgIOacjeWKoea3u+WKoOS9jee9rlxuXG5jb25zb2xlLmxvZyhcImxoX2h0dHBcIik7XG52YXIgbGhfaHR0cCA9IGFuZ3VsYXIubW9kdWxlKFwibGhfaHR0cFwiLCBbXSk7XG5saF9odHRwLmZhY3RvcnkoXCJsaF9hamF4XCIsIFtcIiRodHRwXCIsIGZ1bmN0aW9uICgkaHR0cCkge1xuXG4gICAgdmFyIGFqYXggPSB7XG4gICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICAvLyBjZnBMb2FkaW5nQmFyLnN0YXJ0KCk7XG4gICAgICAgICAgICB2YXIgbG9hZCA9IGxheWVyLmxvYWQoMSk7XG4gICAgICAgICAgICAkaHR0cCh7XG4gICAgICAgICAgICAgICAgaWdub3JlTG9hZGluZ0JhcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdnZXQnLFxuICAgICAgICAgICAgICAgIHVybDogby51cmwsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiBvLmRhdGFcbiAgICAgICAgICAgIH0pLnRoZW4oXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gc3VjY2VzcyhyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHJlc3BvbnNlLmRhdGE7XG5cbiAgICAgICAgICAgICAgICAgICAgbGF5ZXIuY2xvc2UobG9hZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGluZm9TdWNjZXNzID0gby5pbmZvU3VjY2VzcyA/IG8uaW5mb1N1Y2Nlc3MgOiBkYXRhLmluZm8gPyBkYXRhLmluZm8gOiBcIuaIkOWKn1wiO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaW5mb0Vycm9yID0gby5pbmZvU3VjY2VzcyA/IG8uaW5mb1N1Y2Nlc3MgOiBkYXRhLmluZm8gPyBkYXRhLmluZm8gOiAn5pWw5o2u5qC85byP6ZSZ6K+vJztcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5zdGF0dXMgPT0gMSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoby5pbmZvU2hvdykge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXIubXNnKGluZm9TdWNjZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgby5zdWNjZXNzKGRhdGEpO1xuXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoby5pbmZvU2hvdykge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXIubXNnKGluZm9FcnJvciwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+Wbnumch+WKqOaPkOekuueahFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3IocmVzcG9uc2UpIHtcblxuICAgICAgICAgICAgICAgICAgICBsYXllci5tc2coXCLmnI3liqHlmajmlbDmja7moLzlvI/plJnor68uXCIgKyByZXNwb25zZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy/lm57pnIfliqjmj5DnpLrnmoRcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgXCJwb3N0XCI6IGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICB2YXIgbG9hZCA9IGxheWVyLmxvYWQoMSk7XG4gICAgICAgICAgICAkaHR0cCh7XG4gICAgICAgICAgICAgICAgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PVVURi04J30sXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgICAgICAgICB1cmw6IG8udXJsLFxuICAgICAgICAgICAgICAgIHBhcmFtczogby5wYXJhbXMsIC8v6L+Z5Liq5pivdXJs5ZCO57yAID9rZXk9dmFs55qELOS4jeS4gOWumuS8mueUqOWIsFxuICAgICAgICAgICAgICAgIGRhdGE6IGpRdWVyeS5wYXJhbShvLmRhdGEpIC8v5oqKanNvbuaVsOaNriDluo/liJfljJZcbiAgICAgICAgICAgIH0pLnRoZW4oXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKGRhdGEsIHN0YXR1cywgaGVhZGVycywgY29uZmlnKSB7XG4gICAgICAgICAgICAgICAgICAgIGxheWVyLmNsb3NlKGxvYWQpO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmZvU3VjY2VzcyA9IG8uaW5mb1N1Y2Nlc3MgPyBvLmluZm9TdWNjZXNzIDogZGF0YS5pbmZvID8gZGF0YS5pbmZvIDogXCLmiJDlip9cIjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGluZm9FcnJvciA9IG8uaW5mb1N1Y2Nlc3MgPyBvLmluZm9TdWNjZXNzIDogZGF0YS5pbmZvID8gZGF0YS5pbmZvIDogJ+aVsOaNruagvOW8j+mUmeivryc7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuc3RhdHVzID09IDEpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG8uaW5mb1Nob3cpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyLm1zZyhpbmZvU3VjY2Vzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG8uc3VjY2VzcyhkYXRhLCBzdGF0dXMsIGhlYWRlcnMsIGNvbmZpZyk7XG5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvLmluZm9TaG93KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllci5tc2coaW5mb0Vycm9yLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Zue6ZyH5Yqo5o+Q56S655qEXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCLmnI3liqHlmajmlbDmja7moLzlvI/plJnor69cIiArIGUpO1xuICAgICAgICAgICAgICAgICAgICBsYXllci5tc2coXCLmnI3liqHlmajmlbDmja7moLzlvI/plJnor68uXCIgKyBlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL+Wbnumch+WKqOaPkOekuueahFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBhamF4O1xuXG59XSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgbGlhb2h1aTEwODAgb24gMjAxNi8xMi8yNy5cbiAqL1xuXG5cbmFuZ3VsYXIubW9kdWxlKFwidWkuc2VsZWN0LWZpbHRlclwiLCBbXSkuZmlsdGVyKCdwcm9wc0ZpbHRlcicsIFtmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChpdGVtcywgcHJvcHMpIHtcbiAgICAgICAgdmFyIG91dCA9IFtdO1xuXG4gICAgICAgIGlmIChhbmd1bGFyLmlzQXJyYXkoaXRlbXMpKSB7XG4gICAgICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHByb3BzKTtcblxuICAgICAgICAgICAgaXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHZhciBpdGVtTWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm9wID0ga2V5c1tpXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRleHQgPSBwcm9wc1twcm9wXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbVtwcm9wXS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0ZXh0KSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1NYXRjaGVzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW1NYXRjaGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIG91dC5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gTGV0IHRoZSBvdXRwdXQgYmUgdGhlIGlucHV0IHVudG91Y2hlZFxuICAgICAgICAgICAgb3V0ID0gaXRlbXM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH07XG59XSk7Il19
