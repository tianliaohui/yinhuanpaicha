/**
 * Created by liaohui1080 on 2016/12/23.
 */
angular.module("myApp", [

    //自己写的
    'lh_http',
    'lh_time',


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


]).config(function ($httpProvider) {

    // console.log($httpProvider.defaults.headers.common)

    //修改/操作$httpProvider.defaults.headers.common对象的属性以改变$http的默认请求头配置


})

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


/**
 * Created by liaohui1080 on 2016/12/23.
 */
console.log("box_10");
var thisController = angular.module("box_10Module", []);
thisController.controller("box_10Controller", ['$scope', 'lh_ajax', '$rootScope',
    function ($scope, lh_ajax, $rootScope) {


        $scope.ceshi = "测试成功box_10"


        $scope.$on('boxAll', function (event, boxMsg) {
            lh_ajax.get({
                url: $rootScope.URL.box_10.url,
                data: boxMsg ? boxMsg : null,
                success: function (msg) {
                    // console.log(msg.data)
                    shuliang2(msg.data, msg.info)

                    $scope.$emit("box_9", {start: 1, info: "box_6?隐患加载成功", data: null});
                }

            });
        });


        function shuliang2(o, title) {

            var myChart = echarts.init(document.getElementById('box_10'));
            myChart.showLoading({
                text: '正在努力的读取数据中...',    //loading话术
            });
            myChart.hideLoading();
            // myChart.grid(20,20,0,0)
            window.onresize = myChart.resize;
            var option = {
                backgroundColor: '#021729',
                color:['#0071BB','#FAAF3B'],
                // 图表标题
                title: {
                    text: title,
                    textStyle: {
                        fontWeight: 'normal',
                        color: '#fff',         // 图例文字颜色
                        fontSize: 13,
                    },
                    x: "left",
                    y: "top",
                    backgroundColor: "#032D4F",

                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                // legend: {
                //     data: ['包租费', '装修费', '保洁费', '物业费'],
                //     align: 'right',
                //     right: 10
                // },
                grid: {
                    left: '10',
                    right: '20',
                    bottom: '10',
                    top: '40',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    axisLine: {
                        lineStyle: {
                            width: 1,
                            color: "#1c4960"
                        }
                    },

                    data: []
                },
                yAxis: {
                    type: 'value',
                    name: '总价(万元)',
                    splitLine: {
                        lineStyle: {
                            color: '#1c4960'
                        }
                    },
                    axisLabel: {
                        formatter: '{value}'
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#1c4960'
                        }

                    },


                },
                series: [
                    {
                        name: '初诊',
                        type: 'bar',
                        data: [],
                        label: {
                            normal: {
                                show: true
                            }
                        }
                    }, {
                        name: '复诊',
                        type: 'bar',
                        data: [],
                        label: {
                            normal: {
                                show: true
                            }
                        }

                    }
                ]
            };


            _.map(o, function (val, key) {



                // option.series[1]={
                //     name: '企业',
                //     type: 'bar',
                //     data: [],
                //     label: {normal: {show: true}}
                // };
                // option.series[1].data[key]=o[key].qyzc

                option.xAxis.data[key] = o[key].name
            });




            //把数据添加到option里面
            for (var key = 0; key < o.length; key++) {

                option.series[0].data[key] = o[key].zfxc
                option.series[1].data[key] = o[key].qyzc
                option.xAxis.data[key] = o[key].name
            }

            // var abc =[]
            // for (var key = 0; key < o.length; key++) {
            //
            //     // option.series[0].data[key] = o[key].zfxc
            //     abc[key] = o[key].zfzc
            //
            // }
            //
            // console.log(abc)

            myChart.setOption(option)
        }

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
                        color: '#fff',         // 图例文字颜色
                        fontSize: 13,
                    },
                    x: "left",
                    y: "top",
                    backgroundColor: "#032D4F",

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
                    type: "category",
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
                    data: []
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
                    value: o[s].number,
                    itemStyle: {
                        normal: {
                            color: o[s].color

                        }
                    }
                };


                option.xAxis.data[s] = o[s].name

            }

            myChart.setOption(option)

        }
    }]);


/**
 * Created by liaohui1080 on 2016/12/23.
 */
console.log("box_11");
var thisController = angular.module("box_11Module", []);
thisController.controller("box_11Controller", ['$scope', 'lh_ajax','$rootScope', function ($scope, lh_ajax,$rootScope) {



    $scope.$on('boxAll',function (event ,boxMsg) {
        lh_ajax.get({
            url: $rootScope.URL.box_11.url,
            data:boxMsg?boxMsg:null,
            success: function (msg) {
                // console.log(msg.data)
                box_11_jianguanshu2(msg.data,msg.info);

                $scope.$emit("box_9",{start:1,info:"box_6?隐患加载成功",data:null});
            }

        });
    });
}]);



function box_11_jianguanshu2(o,title) {
    var myChart = echarts.init(document.getElementById('box_11'));

    var option = {
        //     // 图表标题
        title: {
            text: title,
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
            name: '企业类型',
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


/**
 * Created by liaohui1080 on 2016/12/23.
 */
console.log("box_4 地图");
var thisController = angular.module("box_4Module", []);
thisController.controller("box_4Controller", ['$scope', 'lh_ajax','$rootScope',
    function ($scope, lh_ajax,$rootScope) {






    lh_ajax.get({
        url:  $rootScope.URL.box_4.url,
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
                    regions:[{"name":"贵阳","selected":true}]

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
            $scope.$on("boxAll",function (event,boxMsg) {
                // console.log(msg)
                option3.geo.regions=[boxMsg];
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
thisController.controller("box_5Controller", ['$scope', 'lh_ajax', '$rootScope',
    function ($scope, lh_ajax, $rootScope) {
        $scope.qiyeList = [];
        $scope.maxNumbers=0; //最大数
        $scope.$on('boxAll', function (event, boxMsg) {

            lh_ajax.get({
                url: $rootScope.URL.box_5.url,
                data: {qyNum: 7},
                success: function (msg) {
                    $scope.qiyeList = msg.data;
                    $scope.maxNumbers = _.max(msg.data,function (stooge) {
                            return stooge.number;
                        });

                    $scope.title=msg.info;

                    $scope.$emit("box_5", {start: 1, info: "box_5?隐患加载成功", data: null});
                }

            });
        });

    }]);


/**
 * Created by liaohui1080 on 2016/12/23.
 */
console.log("box_6");
var thisController = angular.module("box_6Module", []);
thisController.controller("box_6Controller", ['$scope', 'lh_ajax','$rootScope',
    function ($scope, lh_ajax,$rootScope) {
    $scope.ceshi = "测试成功"



    $scope.$on('boxAll',function (event ,boxMsg) {
        lh_ajax.get({
            url: $rootScope.URL.box_6.url,
            data:boxMsg?boxMsg:null,
            success: function (msg) {
                // console.log(msg.data)
                level(msg.data,msg.info);
                $scope.$emit("box_6",{start:1,info:"box_6?隐患加载成功",data:null});
            }

        });
    });

    function level(o,title) {
        var myChart = echarts.init(document.getElementById('box_6'));
        var option = {

            backgroundColor: '#021729',
            color: ['#FE5945','#032D4F'],
            title: {
                text: title? title:'没有标题',
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
                data: [],
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
                value:o[s].number,
                name:o[s].name
            };
            option.legend.data.push(o[s].name);

        }
        myChart.setOption(option)

    }



}]);


/**
 * Created by liaohui1080 on 2016/12/23.
 */
console.log("box_7");
var thisController = angular.module("box_7Module", []);
thisController.controller("box_7Controller", ['$scope', 'lh_ajax', '$rootScope',
    function ($scope, lh_ajax,$rootScope) {
    $scope.ceshi="测试成功";



    $scope.$on('boxAll',function (event ,boxMsg) {
        lh_ajax.get({
            url: $rootScope.URL.box_7.url,
            data:boxMsg?boxMsg:null,
            success: function (msg) {
                // console.log(msg.data)
                level(msg.data, msg.info);
                $scope.$emit("box_7",{start:1,info:"box_7?隐患加载成功",data:null});
            }

        });
    });

    function level(o,title) {
        var myChart = echarts.init(document.getElementById('box_7'));
        var option = {

            backgroundColor: '#021729',
            color: ['#032D4F','#0071BB'],
            title: {
                text: title,
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
                data: [],
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
                value:o[s].number,
                name:o[s].name,
            };

            option.legend.data.push(o[s].name);


        }



        myChart.setOption(option)

    }


}]);


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


/**
 * Created by liaohui1080 on 2016/12/23.
 */
console.log("box_9");
var thisController = angular.module("box_9Module", []);
thisController.controller("box_9Controller", ['$scope', 'lh_ajax','$rootScope',
    function ($scope, lh_ajax ,$rootScope) {
    $scope.ceshi="测试成功"


    $scope.$on('boxAll',function (event ,boxMsg) {
        lh_ajax.get({
            url:  $rootScope.URL.box_9.url,
            data:boxMsg?boxMsg:null,
            success: function (msg) {
                // console.log(msg.data)
                quxiantu(msg.data,msg.info);
                $scope.$emit("box_9",{start:1,info:"box_6?隐患加载成功",data:null});
            }

        });
    });

//曲线图
    function quxiantu(o,title) {
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
                text: title?title:"没有得到标题",
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
                    color: $rootScope.YHLXCOLOR[_.findIndex($rootScope.YHLXCOLOR , {"name":o.series[s].name})].color,
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
}]);






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
/**
 * Created by liaohui1080 on 2017/1/9.
 */






angular.module("lh_time", [])

    //时间年月日星期分秒  timeFormat:'YYYY年MM月DD日 DD=星期,必须大写星期才能输出正确 H:mm:ss'
    .filter('timeFormat', [function () {
        return function (input, str) {
            return moment(input).format(str)
        }
    }]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImNvbnRyb2xsZXIvYm94XzEuanMiLCJjb250cm9sbGVyL2JveF8xMC5qcyIsImNvbnRyb2xsZXIvYm94XzExLmpzIiwiY29udHJvbGxlci9ib3hfMi5qcyIsImNvbnRyb2xsZXIvYm94XzMuanMiLCJjb250cm9sbGVyL2JveF80LmpzIiwiY29udHJvbGxlci9ib3hfNS5qcyIsImNvbnRyb2xsZXIvYm94XzYuanMiLCJjb250cm9sbGVyL2JveF83LmpzIiwiY29udHJvbGxlci9ib3hfOC5qcyIsImNvbnRyb2xsZXIvYm94XzkuanMiLCJjb250cm9sbGVyL3Jvb3RDb250cm9sbGVyLmpzIiwiZmFjdG9yeS9odHRwLmpzIiwiZmlsdGVyL3NlbGVjdEZpbHRlci5qcyIsImZpbHRlci90aW1lRmlsdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25IQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3S0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgbGlhb2h1aTEwODAgb24gMjAxNi8xMi8yMy5cbiAqL1xuYW5ndWxhci5tb2R1bGUoXCJteUFwcFwiLCBbXG5cbiAgICAvL+iHquW3seWGmeeahFxuICAgICdsaF9odHRwJyxcbiAgICAnbGhfdGltZScsXG5cblxuICAgICdib3hfMU1vZHVsZScsXG4gICAgJ2JveF8yTW9kdWxlJyxcbiAgICAnYm94XzNNb2R1bGUnLFxuICAgICdib3hfNE1vZHVsZScsXG4gICAgJ2JveF81TW9kdWxlJyxcbiAgICAnYm94XzZNb2R1bGUnLFxuICAgICdib3hfN01vZHVsZScsXG4gICAgJ2JveF84TW9kdWxlJyxcbiAgICAnYm94XzlNb2R1bGUnLFxuICAgICdib3hfMTBNb2R1bGUnLFxuICAgICdib3hfMTFNb2R1bGUnLFxuICAgICdyb290TW9kdWxlJywgLy/kuLvmjqfliLblmagg5YaZ5ZyoaHRtbOS4iueahFxuXG4gICAgLy/nrKzkuInmlrnmjqfku7ZcbiAgICAnbmdBbmltYXRlJyxcbiAgICAnbmdTYW5pdGl6ZScsXG4gICAgJ3VpLnNlbGVjdCcsXG4gICAgJ3VpLnNlbGVjdC1maWx0ZXInXG5cblxuXSkuY29uZmlnKGZ1bmN0aW9uICgkaHR0cFByb3ZpZGVyKSB7XG5cbiAgICAvLyBjb25zb2xlLmxvZygkaHR0cFByb3ZpZGVyLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uKVxuXG4gICAgLy/kv67mlLkv5pON5L2cJGh0dHBQcm92aWRlci5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbuWvueixoeeahOWxnuaAp+S7peaUueWPmCRodHRw55qE6buY6K6k6K+35rGC5aS06YWN572uXG5cblxufSlcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBsaWFvaHVpMTA4MCBvbiAyMDE2LzEyLzIzLlxuICovXG5jb25zb2xlLmxvZyhcImJveF8xXCIpO1xudmFyIHRoaXNDb250cm9sbGVyID0gYW5ndWxhci5tb2R1bGUoXCJib3hfMU1vZHVsZVwiLCBbXSk7XG50aGlzQ29udHJvbGxlci5jb250cm9sbGVyKFwiYm94XzFDb250cm9sbGVyXCIsIFsnJHNjb3BlJywgJ2xoX2FqYXgnLCAnJHJvb3RTY29wZScsXG4gICAgZnVuY3Rpb24gKCRzY29wZSwgbGhfYWpheCwkcm9vdFNjb3BlKSB7XG4gICAgJHNjb3BlLmNlc2hpID0gXCLmtYvor5XmiJDlip9cIjtcblxuXG4gICAgJHNjb3BlLnN3aXRjaFBhZ2UgPSBbXTtcbiAgICAvL+WIh+aNoumhtemdolxuICAgICRzY29wZS5zd2l0Y2hQYWdlID0gW1xuICAgICAgICB7XCJuYW1lXCI6IFwi5LyB5Lia5Z+656GA5L+h5oGvXCIsIFwidXJsXCI6IFwiaHR0cDovL3d3dy5iYWlkdS5jb21cIn0sXG4gICAgICAgIHtcIm5hbWVcIjogXCLpmpDmgqPmjpLmn6Xkv6Hmga9cIiwgXCJ1cmxcIjogXCJodHRwOi8vd3d3LmJhaWR1LmNvbVwifSxcbiAgICAgICAge1wibmFtZVwiOiBcIueUqOaIt+aTjeS9nOadg+mZkDNcIiwgXCJ1cmxcIjogXCJodHRwOi8vd3d3LmJhaWR1LmNvbVwifSxcbiAgICAgICAge1wibmFtZVwiOiBcIueUqOaIt+aTjeS9nOadg+mZkDRcIiwgXCJ1cmxcIjogXCJodHRwOi8vd3d3LmJhaWR1LmNvbVwifVxuICAgIF07XG4gICAgLy/nu5nkuIvmi4noj5zljZUg5Yid5aeL5YC8XG4gICAgJHNjb3BlLnN3aXRjaFBhZ2Uuc2VsZWN0ZWQgPSB7XCJuYW1lXCI6IFwi6ZqQ5oKj5o6S5p+l5L+h5oGvXCIsIFwidXJsXCI6IFwiaHR0cDovL3d3dy5iYWlkdS5jb21cIn07XG5cblxuXG5cbiAgICAvL+aOpeaUtuS4u+aOp+WItuWZqCDlj5Hov4fmnaXnmoQg5Yi35paw5raI5oGvXG4gICAgJHNjb3BlLiRvbihcImJveEFsbFwiLCBmdW5jdGlvbiAoZXZlbnQsIGJveE1zZykge1xuICAgICAgICBsaF9hamF4LmdldCh7XG4gICAgICAgICAgICB1cmw6ICRyb290U2NvcGUuVVJMLmJveF8xLnVybCxcbiAgICAgICAgICAgIGRhdGE6IGJveE1zZyxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChtc2cpIHtcblxuICAgICAgICAgICAgICAgICRzY29wZS56b25naGVNc2c9bXNnLmRhdGE7XG5cbiAgICAgICAgICAgICAgICAkc2NvcGUuJGVtaXQoXCJib3hfMVwiLHtzdGFydDoxLGluZm86bXNnLmluZm8sZGF0YTpudWxsfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG5cbn1dKTtcblxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGxpYW9odWkxMDgwIG9uIDIwMTYvMTIvMjMuXG4gKi9cbmNvbnNvbGUubG9nKFwiYm94XzEwXCIpO1xudmFyIHRoaXNDb250cm9sbGVyID0gYW5ndWxhci5tb2R1bGUoXCJib3hfMTBNb2R1bGVcIiwgW10pO1xudGhpc0NvbnRyb2xsZXIuY29udHJvbGxlcihcImJveF8xMENvbnRyb2xsZXJcIiwgWyckc2NvcGUnLCAnbGhfYWpheCcsICckcm9vdFNjb3BlJyxcbiAgICBmdW5jdGlvbiAoJHNjb3BlLCBsaF9hamF4LCAkcm9vdFNjb3BlKSB7XG5cblxuICAgICAgICAkc2NvcGUuY2VzaGkgPSBcIua1i+ivleaIkOWKn2JveF8xMFwiXG5cblxuICAgICAgICAkc2NvcGUuJG9uKCdib3hBbGwnLCBmdW5jdGlvbiAoZXZlbnQsIGJveE1zZykge1xuICAgICAgICAgICAgbGhfYWpheC5nZXQoe1xuICAgICAgICAgICAgICAgIHVybDogJHJvb3RTY29wZS5VUkwuYm94XzEwLnVybCxcbiAgICAgICAgICAgICAgICBkYXRhOiBib3hNc2cgPyBib3hNc2cgOiBudWxsLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChtc2cpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobXNnLmRhdGEpXG4gICAgICAgICAgICAgICAgICAgIHNodWxpYW5nMihtc2cuZGF0YSwgbXNnLmluZm8pXG5cbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLiRlbWl0KFwiYm94XzlcIiwge3N0YXJ0OiAxLCBpbmZvOiBcImJveF82P+makOaCo+WKoOi9veaIkOWKn1wiLCBkYXRhOiBudWxsfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cblxuICAgICAgICBmdW5jdGlvbiBzaHVsaWFuZzIobywgdGl0bGUpIHtcblxuICAgICAgICAgICAgdmFyIG15Q2hhcnQgPSBlY2hhcnRzLmluaXQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JveF8xMCcpKTtcbiAgICAgICAgICAgIG15Q2hhcnQuc2hvd0xvYWRpbmcoe1xuICAgICAgICAgICAgICAgIHRleHQ6ICfmraPlnKjliqrlipvnmoTor7vlj5bmlbDmja7kuK0uLi4nLCAgICAvL2xvYWRpbmfor53mnK9cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbXlDaGFydC5oaWRlTG9hZGluZygpO1xuICAgICAgICAgICAgLy8gbXlDaGFydC5ncmlkKDIwLDIwLDAsMClcbiAgICAgICAgICAgIHdpbmRvdy5vbnJlc2l6ZSA9IG15Q2hhcnQucmVzaXplO1xuICAgICAgICAgICAgdmFyIG9wdGlvbiA9IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDIxNzI5JyxcbiAgICAgICAgICAgICAgICBjb2xvcjpbJyMwMDcxQkInLCcjRkFBRjNCJ10sXG4gICAgICAgICAgICAgICAgLy8g5Zu+6KGo5qCH6aKYXG4gICAgICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogdGl0bGUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNmZmYnLCAgICAgICAgIC8vIOWbvuS+i+aWh+Wtl+minOiJslxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDEzLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB4OiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICAgICAgeTogXCJ0b3BcIixcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMwMzJENEZcIixcblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyOiAnYXhpcycsXG4gICAgICAgICAgICAgICAgICAgIGF4aXNQb2ludGVyOiB7IC8vIOWdkOagh+i9tOaMh+ekuuWZqO+8jOWdkOagh+i9tOinpuWPkeacieaViFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3NoYWRvdycgLy8g6buY6K6k5Li655u057q/77yM5Y+v6YCJ5Li677yaJ2xpbmUnIHwgJ3NoYWRvdydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgLy8gbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGRhdGE6IFsn5YyF56ef6LS5JywgJ+ijheS/rui0uScsICfkv53mtIHotLknLCAn54mp5Lia6LS5J10sXG4gICAgICAgICAgICAgICAgLy8gICAgIGFsaWduOiAncmlnaHQnLFxuICAgICAgICAgICAgICAgIC8vICAgICByaWdodDogMTBcbiAgICAgICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgICAgIGdyaWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogJzEwJyxcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6ICcyMCcsXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogJzEwJyxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAnNDAnLFxuICAgICAgICAgICAgICAgICAgICBjb250YWluTGFiZWw6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHhBeGlzOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdjYXRlZ29yeScsXG4gICAgICAgICAgICAgICAgICAgIGF4aXNMaW5lOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMWM0OTYwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgeUF4aXM6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3ZhbHVlJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ+aAu+S7tyjkuIflhYMpJyxcbiAgICAgICAgICAgICAgICAgICAgc3BsaXRMaW5lOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyMxYzQ5NjAnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGF4aXNMYWJlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVyOiAne3ZhbHVlfSdcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYXhpc0xpbmU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyMxYzQ5NjAnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfSxcblxuXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzZXJpZXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ+WIneiviicsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYmFyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ+WkjeiviicsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYmFyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfTtcblxuXG4gICAgICAgICAgICBfLm1hcChvLCBmdW5jdGlvbiAodmFsLCBrZXkpIHtcblxuXG5cbiAgICAgICAgICAgICAgICAvLyBvcHRpb24uc2VyaWVzWzFdPXtcbiAgICAgICAgICAgICAgICAvLyAgICAgbmFtZTogJ+S8geS4micsXG4gICAgICAgICAgICAgICAgLy8gICAgIHR5cGU6ICdiYXInLFxuICAgICAgICAgICAgICAgIC8vICAgICBkYXRhOiBbXSxcbiAgICAgICAgICAgICAgICAvLyAgICAgbGFiZWw6IHtub3JtYWw6IHtzaG93OiB0cnVlfX1cbiAgICAgICAgICAgICAgICAvLyB9O1xuICAgICAgICAgICAgICAgIC8vIG9wdGlvbi5zZXJpZXNbMV0uZGF0YVtrZXldPW9ba2V5XS5xeXpjXG5cbiAgICAgICAgICAgICAgICBvcHRpb24ueEF4aXMuZGF0YVtrZXldID0gb1trZXldLm5hbWVcbiAgICAgICAgICAgIH0pO1xuXG5cblxuXG4gICAgICAgICAgICAvL+aKiuaVsOaNrua3u+WKoOWIsG9wdGlvbumHjOmdolxuICAgICAgICAgICAgZm9yICh2YXIga2V5ID0gMDsga2V5IDwgby5sZW5ndGg7IGtleSsrKSB7XG5cbiAgICAgICAgICAgICAgICBvcHRpb24uc2VyaWVzWzBdLmRhdGFba2V5XSA9IG9ba2V5XS56ZnhjXG4gICAgICAgICAgICAgICAgb3B0aW9uLnNlcmllc1sxXS5kYXRhW2tleV0gPSBvW2tleV0ucXl6Y1xuICAgICAgICAgICAgICAgIG9wdGlvbi54QXhpcy5kYXRhW2tleV0gPSBvW2tleV0ubmFtZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB2YXIgYWJjID1bXVxuICAgICAgICAgICAgLy8gZm9yICh2YXIga2V5ID0gMDsga2V5IDwgby5sZW5ndGg7IGtleSsrKSB7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gICAgIC8vIG9wdGlvbi5zZXJpZXNbMF0uZGF0YVtrZXldID0gb1trZXldLnpmeGNcbiAgICAgICAgICAgIC8vICAgICBhYmNba2V5XSA9IG9ba2V5XS56ZnpjXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGFiYylcblxuICAgICAgICAgICAgbXlDaGFydC5zZXRPcHRpb24ob3B0aW9uKVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc2h1bGlhbmcxKG8pIHtcbiAgICAgICAgICAgIHZhciBteUNoYXJ0ID0gZWNoYXJ0cy5pbml0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib3hfMTAnKSk7XG4gICAgICAgICAgICBteUNoYXJ0LnNob3dMb2FkaW5nKHtcbiAgICAgICAgICAgICAgICB0ZXh0OiAn5q2j5Zyo5Yqq5Yqb55qE6K+75Y+W5pWw5o2u5LitLi4uJywgICAgLy9sb2FkaW5n6K+d5pyvXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG15Q2hhcnQuaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgICAgIC8vIG15Q2hhcnQuZ3JpZCgyMCwyMCwwLDApXG4gICAgICAgICAgICB3aW5kb3cub25yZXNpemUgPSBteUNoYXJ0LnJlc2l6ZTtcbiAgICAgICAgICAgIHZhciBvcHRpb24gPSB7XG5cbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDIxNzI5JyxcblxuICAgICAgICAgICAgICAgIC8vIOWbvuihqOagh+mimFxuICAgICAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiIOS8geS4muebkeeuoemakOaCo+aVsCBcIixcbiAgICAgICAgICAgICAgICAgICAgdGV4dFN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2ZmZicsICAgICAgICAgLy8g5Zu+5L6L5paH5a2X6aKc6ImyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTMsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHg6IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICB5OiBcInRvcFwiLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzAzMkQ0RlwiLFxuXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcjogJ2F4aXMnLFxuICAgICAgICAgICAgICAgICAgICBheGlzUG9pbnRlcjogeyAgICAgICAgICAgIC8vIOWdkOagh+i9tOaMh+ekuuWZqO+8jOWdkOagh+i9tOinpuWPkeacieaViFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3NoYWRvdycgICAgICAgIC8vIOm7mOiupOS4uuebtOe6v++8jOWPr+mAieS4uu+8midsaW5lJyB8ICdzaGFkb3cnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGdyaWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogJzEwJyxcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6ICcyMCcsXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogJzEwJyxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAnNDAnLFxuICAgICAgICAgICAgICAgICAgICBjb250YWluTGFiZWw6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHhBeGlzOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiY2F0ZWdvcnlcIixcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogW1wiZGZzYVwiXSxcblxuICAgICAgICAgICAgICAgICAgICBheGlzTGluZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZVN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzFjNDk2MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGF4aXNMYWJlbDoge1xuLy9cdFx0XHRcdFx05Z2Q5qCH6L2055u45YWz5Yi75bqm6K6+572uXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcbi8vXHRcdFx0XHRcdFx05piv5ZCm5pi+56S65Yi75bqm5qCH562+XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnZhbDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgIOWdkOagh+i9tOWIu+W6puagh+etvueahOaYvuekuumXtOmalO+8jOWcqOexu+ebrui9tOS4reacieaViOOAglxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAg6buY6K6k5Lya6YeH55So5qCH562+5LiN6YeN5Y+g55qE562W55Wl6Ze06ZqU5pi+56S65qCH562+44CCXG4gICAgICAgICAgICAgICAgICAgICAgICAvL1x0XHRcdOWPr+S7peiuvue9ruaIkCAwIOW8uuWItuaYvuekuuaJgOacieagh+etvuOAglxuICAgICAgICAgICAgICAgICAgICAgICAgcm90YXRlOiA0NSxcbi8vICAgICAgICAgICAgICAgICAgICAgICDliLvluqbmoIfnrb7ml4vovaznmoTop5LluqbvvIzlnKjnsbvnm67ovbTnmoTnsbvnm67moIfnrb7mmL7npLrkuI3kuIvnmoTml7blgJnlj6/ku6XpgJrov4fml4vovazpmLLmraLmoIfnrb7kuYvpl7Tph43lj6DjgIJcbi8vICAgICAgICAgICAgICAgICAgICAgICDml4vovaznmoTop5Lluqbku44gLTkwIOW6puWIsCA5MCDluqbjgIJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTAsXG4vLyAgICAgICAgICAgICAgICAgICAgICAg5Yi75bqm5qCH562+5LiO6L2057q/5LmL6Ze055qE6Led56a744CCXG5cbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgeUF4aXM6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3ZhbHVlJyxcbiAgICAgICAgICAgICAgICAgICAgLy8gc2NhbGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG1pbkludGVydmFsOiAxLFxuICAgICAgICAgICAgICAgICAgICAvLyBzcGxpdE51bWJlcjogNixcbiAgICAgICAgICAgICAgICAgICAgc3BsaXRMaW5lOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYXhpc0xhYmVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnZhbDogJzEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zaWRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2IzYjNiMycsXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYXhpc1RpY2s6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnNpZGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyMxYzQ5NjAnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGF4aXNMaW5lOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZVN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjMWM0OTYwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzZXJpZXM6IHtcblxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAn5pWw6YePJyxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2JhcicsXG4gICAgICAgICAgICAgICAgICAgIGJhcldpZHRoOiAnNycsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFtdXG4gICAgICAgICAgICAgICAgICAgIC8vIGRhdGE6IFtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB2YWx1ZTogMTAwLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGl0ZW1TdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBub3JtYWw6IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNvbG9yOiAnI2ZmZmQ5OSdcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gXSxcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cblxuICAgICAgICAgICAgLy/miormlbDmja7mt7vliqDliLBvcHRpb27ph4zpnaJcbiAgICAgICAgICAgIGZvciAodmFyIHMgPSAwOyBzIDwgby5sZW5ndGg7IHMrKykge1xuXG4gICAgICAgICAgICAgICAgb3B0aW9uLnNlcmllcy5kYXRhW3NdID0ge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb1tzXS5udW1iZXIsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1TdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IG9bc10uY29sb3JcblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcblxuXG4gICAgICAgICAgICAgICAgb3B0aW9uLnhBeGlzLmRhdGFbc10gPSBvW3NdLm5hbWVcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBteUNoYXJ0LnNldE9wdGlvbihvcHRpb24pXG5cbiAgICAgICAgfVxuICAgIH1dKTtcblxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGxpYW9odWkxMDgwIG9uIDIwMTYvMTIvMjMuXG4gKi9cbmNvbnNvbGUubG9nKFwiYm94XzExXCIpO1xudmFyIHRoaXNDb250cm9sbGVyID0gYW5ndWxhci5tb2R1bGUoXCJib3hfMTFNb2R1bGVcIiwgW10pO1xudGhpc0NvbnRyb2xsZXIuY29udHJvbGxlcihcImJveF8xMUNvbnRyb2xsZXJcIiwgWyckc2NvcGUnLCAnbGhfYWpheCcsJyRyb290U2NvcGUnLCBmdW5jdGlvbiAoJHNjb3BlLCBsaF9hamF4LCRyb290U2NvcGUpIHtcblxuXG5cbiAgICAkc2NvcGUuJG9uKCdib3hBbGwnLGZ1bmN0aW9uIChldmVudCAsYm94TXNnKSB7XG4gICAgICAgIGxoX2FqYXguZ2V0KHtcbiAgICAgICAgICAgIHVybDogJHJvb3RTY29wZS5VUkwuYm94XzExLnVybCxcbiAgICAgICAgICAgIGRhdGE6Ym94TXNnP2JveE1zZzpudWxsLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKG1zZykge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG1zZy5kYXRhKVxuICAgICAgICAgICAgICAgIGJveF8xMV9qaWFuZ3VhbnNodTIobXNnLmRhdGEsbXNnLmluZm8pO1xuXG4gICAgICAgICAgICAgICAgJHNjb3BlLiRlbWl0KFwiYm94XzlcIix7c3RhcnQ6MSxpbmZvOlwiYm94XzY/6ZqQ5oKj5Yqg6L295oiQ5YqfXCIsZGF0YTpudWxsfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XSk7XG5cblxuXG5mdW5jdGlvbiBib3hfMTFfamlhbmd1YW5zaHUyKG8sdGl0bGUpIHtcbiAgICB2YXIgbXlDaGFydCA9IGVjaGFydHMuaW5pdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm94XzExJykpO1xuXG4gICAgdmFyIG9wdGlvbiA9IHtcbiAgICAgICAgLy8gICAgIC8vIOWbvuihqOagh+mimFxuICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgdGV4dDogdGl0bGUsXG4gICAgICAgICAgICB0ZXh0U3R5bGU6IHtcblxuICAgICAgICAgICAgICAgIGNvbG9yOiAnI2ZmZicsICAgICAgICAgLy8g5Zu+5L6L5paH5a2X6aKc6ImyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IDEzLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMDMyRDRGXCIsXG5cbiAgICAgICAgfSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzAyMTcyOScsXG5cbiAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgdHJpZ2dlcjogJ2l0ZW0nLFxuICAgICAgICAgICAgZm9ybWF0dGVyOiBcInthfSA8YnIvPntifSA6IHtjfVwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgc2VyaWVzOiB7XG4gICAgICAgICAgICBuYW1lOiAn5LyB5Lia57G75Z6LJyxcbiAgICAgICAgICAgIHR5cGU6ICdwaWUnLFxuICAgICAgICAgICAgc3RhcnRBbmdsZTogMTAsXG4gICAgICAgICAgICBtaW5BbmdsZTogNSxcbiAgICAgICAgICAgIHJvc2VUeXBlOiAnYW5nbGUnLFxuICAgICAgICAgICAgcmFkaXVzOiAnNzAlJyxcbiAgICAgICAgICAgIGNlbnRlcjogWyc1MCUnLCAnNTAlJ10sXG4gICAgICAgICAgICBpdGVtU3R5bGU6IHtcbiAgICAgICAgICAgICAgICBlbXBoYXNpczoge1xuICAgICAgICAgICAgICAgICAgICAvL+mYtOW9seeahOWkp+Wwj1xuICAgICAgICAgICAgICAgICAgICBzaGFkb3dCbHVyOiA1MCxcbiAgICAgICAgICAgICAgICAgICAgLy8g6Zi05b2x5rC05bmz5pa55ZCR5LiK55qE5YGP56e7XG4gICAgICAgICAgICAgICAgICAgIHNoYWRvd09mZnNldFg6IDAsXG4gICAgICAgICAgICAgICAgICAgIC8vIOmYtOW9seWeguebtOaWueWQkeS4iueahOWBj+enu1xuICAgICAgICAgICAgICAgICAgICBzaGFkb3dPZmZzZXRZOiAwLFxuICAgICAgICAgICAgICAgICAgICAvLyDpmLTlvbHpopzoibJcbiAgICAgICAgICAgICAgICAgICAgc2hhZG93Q29sb3I6ICcjMDAwJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsYWJlbDoge1xuICAgICAgICAgICAgICAgIG5vcm1hbDoge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0U3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI0IzQjNCMydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsYWJlbExpbmU6IHtcbiAgICAgICAgICAgICAgICBub3JtYWw6IHtcbiAgICAgICAgICAgICAgICAgICAgbGluZVN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNCM0IzQjMnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNtb290aDogMC4yLFxuICAgICAgICAgICAgICAgICAgICBsZW5ndGg6IDEwLFxuICAgICAgICAgICAgICAgICAgICBsZW5ndGgyOiAyMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkYXRhOltdLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYS52YWx1ZSAtIGIudmFsdWVcbiAgICAgICAgICAgIH0pLFxuICAgICAgICB9XG4gICAgfTtcblxuXG4gICAgLy/miormlbDmja7mt7vliqDliLBvcHRpb27ph4zpnaJcbiAgICBmb3IgKHZhciBzID0gMDsgcyA8IG8ubGVuZ3RoOyBzKyspIHtcblxuICAgICAgICBvcHRpb24uc2VyaWVzLmRhdGFbc10gPSB7XG4gICAgICAgICAgICB2YWx1ZTpvW3NdLnZhbHVlLFxuICAgICAgICAgICAgbmFtZTpvW3NdLm5hbWUsXG4gICAgICAgICAgICBpdGVtU3R5bGU6IHtcbiAgICAgICAgICAgICAgICBub3JtYWw6IHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IG9bc10uY29sb3JcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgIH1cblxuXG4gICAgbXlDaGFydC5zZXRPcHRpb24ob3B0aW9uKTtcbn1cbiIsIi8qKlxuICogQ3JlYXRlZCBieSBsaWFvaHVpMTA4MCBvbiAyMDE2LzEyLzIzLlxuICovXG5jb25zb2xlLmxvZyhcImJveF8yIOS8geS4muWIl+ihqFwiKTtcbnZhciB0aGlzQ29udHJvbGxlciA9IGFuZ3VsYXIubW9kdWxlKFwiYm94XzJNb2R1bGVcIiwgW10pO1xudGhpc0NvbnRyb2xsZXIuY29udHJvbGxlcihcImJveF8yQ29udHJvbGxlclwiLCBbJyRzY29wZScsICdsaF9hamF4JywgJyRyb290U2NvcGUnLGZ1bmN0aW9uICgkc2NvcGUsIGxoX2FqYXgsJHJvb3RTY29wZSkge1xuXG5cbiAgICAkc2NvcGUucWl5ZUxpc3QgPSBbXTtcblxuICAgIC8v5o6l5pS25Li75o6n5Yi25ZmoIOWPkei/h+adpeeahCDliLfmlrDmtojmga9cbiAgICAkc2NvcGUuJG9uKFwiYm94QWxsXCIsIGZ1bmN0aW9uIChldmVudCwgYm94TXNnKSB7XG4gICAgICAgIGxoX2FqYXguZ2V0KHtcbiAgICAgICAgICAgIHVybDogJHJvb3RTY29wZS5VUkwuYm94XzMudXJsLFxuICAgICAgICAgICAgZGF0YTogYm94TXNnLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKG1zZykge1xuXG4gICAgICAgICAgICAgICAgLy8gYW5ndWxhci5mb3JFYWNoKG1zZy5kYXRhLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gICAgIGlmICh2YWx1ZS5uYW1lID09IGJveE1zZy5uYW1lKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBtc2cuZGF0YVtrZXldLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIG1zZy5kYXRhW2tleV0uc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgICAgICRzY29wZS5xaXllTGlzdCA9IG1zZy5kYXRhO1xuICAgICAgICAgICAgICAgIC8v6I635Y+W5pWw5o2u5omA5Zyo55qE6KGM5Y+3XG4gICAgICAgICAgICAgICAgdmFyIGxpc2VOdW1iZXIgPSBfLmZpbmRJbmRleChtc2cuZGF0YSwge1wibmFtZVwiOiBib3hNc2cubmFtZX0pO1xuICAgICAgICAgICAgICAgICRzY29wZS5xaXllTGlzdFtsaXNlTnVtYmVyXS5zZWxlY3RlZCA9IGJveE1zZy5zZWxlY3RlZDtcblxuICAgICAgICAgICAgICAgICRzY29wZS5ub3dUdGltZT1uZXcgRGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgJHNjb3BlLiRlbWl0KFwiYm94XzJcIiwge3N0YXJ0OiAxLCBpbmZvOiBtc2cuaW5mbywgZGF0YTogbnVsbH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcblxufV0pO1xuXG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgbGlhb2h1aTEwODAgb24gMjAxNi8xMi8yMy5cbiAqL1xuY29uc29sZS5sb2coXCJib3hfM1wiKTtcbnZhciB0aGlzQ29udHJvbGxlciA9IGFuZ3VsYXIubW9kdWxlKFwiYm94XzNNb2R1bGVcIiwgW10pO1xudGhpc0NvbnRyb2xsZXIuY29udHJvbGxlcihcImJveF8zQ29udHJvbGxlclwiLCBbJyRzY29wZScsICdsaF9hamF4JywgJyRyb290U2NvcGUnLFxuICAgIGZ1bmN0aW9uICgkc2NvcGUsIGxoX2FqYXgsICRyb290U2NvcGUpIHtcbiAgICAgICAgJHNjb3BlLmNlc2hpID0gXCLmtYvor5XmiJDlip9cIlxuXG4gICAgICAgIC8v6YCJ5oupc3ZnXG4gICAgICAgIHZhciBkbFN2ZyA9IFNuYXAoXCIjc3ZnTGVpZGFcIikuYXR0cih7XG4gICAgICAgICAgICB3aWR0aDogMjYzLFxuICAgICAgICAgICAgaGVpZ2h0OiAyNjNcbiAgICAgICAgfSk7XG5cblxuICAgICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBTbmFwLmFuaW1hdGUoMzYwLCAwLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAvLyDml4vovaxcbiAgICAgICAgICAgICAgICBkbFN2Zy5zZWxlY3QoJy55dWFuMycpLnRyYW5zZm9ybShuZXcgU25hcC5NYXRyaXgoKS5yb3RhdGUodmFsdWUsIDEzMiwgMTMyKSk7XG5cbiAgICAgICAgICAgIH0sIDUwMDApO1xuXG5cbiAgICAgICAgICAgIFNuYXAuYW5pbWF0ZSgwLCAzNjAsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIC8vIOaXi+i9rOaMh+mSiFxuICAgICAgICAgICAgICAgIGRsU3ZnLnNlbGVjdCgnLnpoaXpoZW4nKS50cmFuc2Zvcm0obmV3IFNuYXAuTWF0cml4KCkucm90YXRlKHZhbHVlLCAxMzIsIDEzMikpO1xuXG4gICAgICAgICAgICB9LCA1MDAwKTtcblxuXG4gICAgICAgICAgICBTbmFwLmFuaW1hdGUoMCwgMzYwLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAvLyDml4vovaxcbiAgICAgICAgICAgICAgICBkbFN2Zy5zZWxlY3QoJy5saW5lLWxlZnQnKS50cmFuc2Zvcm0obmV3IFNuYXAuTWF0cml4KCkucm90YXRlKHZhbHVlLCAxMzIsIDEzMikpO1xuICAgICAgICAgICAgfSwgNTAwMCk7XG4gICAgICAgICAgICBTbmFwLmFuaW1hdGUoMzYwLCAwLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAvLyDml4vovaxcbiAgICAgICAgICAgICAgICBkbFN2Zy5zZWxlY3QoJy5saW5lLXJpZ2h0JykudHJhbnNmb3JtKG5ldyBTbmFwLk1hdHJpeCgpLnJvdGF0ZSh2YWx1ZSwgMTMyLCAxMzIpKTtcbiAgICAgICAgICAgIH0sIDUwMDApO1xuXG5cbiAgICAgICAgfSwgNTAwMCk7XG4gICAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIFNuYXAuYW5pbWF0ZSgzNjAsIDAsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIC8vIOaXi+i9rOaMh+mSiFxuICAgICAgICAgICAgICAgIGRsU3ZnLnNlbGVjdCgnLmRpYW4nKS50cmFuc2Zvcm0obmV3IFNuYXAuTWF0cml4KCkucm90YXRlKHZhbHVlLCAxMzIsIDEzMikpO1xuXG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfSwgMTAwMCk7XG5cblxuICAgICAgICAkc2NvcGUucWl5ZUxpc3QgPSBbXTtcblxuICAgICAgICAvL+aOpeaUtuS4u+aOp+WItuWZqCDlj5Hov4fmnaXnmoQg5Yi35paw5raI5oGvXG4gICAgICAgICRzY29wZS4kb24oXCJib3hBbGxcIiwgZnVuY3Rpb24gKGV2ZW50LCBib3hNc2cpIHtcbiAgICAgICAgICAgIGxoX2FqYXguZ2V0KHtcbiAgICAgICAgICAgICAgICB1cmw6ICRyb290U2NvcGUuVVJMLmJveF8zLnVybCxcbiAgICAgICAgICAgICAgICAvLyBkYXRhOiBib3hNc2csXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKG1zZykge1xuXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGJveE1zZykge1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5xaXllTGlzdCA9IG1zZy5kYXRhO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+iOt+WPluaVsOaNruaJgOWcqOeahOihjOWPt1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxpc2VOdW1iZXIgPSBfLmZpbmRJbmRleChtc2cuZGF0YSwge1wibmFtZVwiOiBib3hNc2cubmFtZX0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnFpeWVMaXN0W2xpc2VOdW1iZXJdLnNlbGVjdGVkID0gYm94TXNnLnNlbGVjdGVkO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUudGl0bGUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6ICRzY29wZS5xaXllTGlzdFtsaXNlTnVtYmVyXS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicXlOdW1cIjogJHNjb3BlLnFpeWVMaXN0W2xpc2VOdW1iZXJdLnF5TnVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwieWhOdW1cIjogJHNjb3BlLnFpeWVMaXN0W2xpc2VOdW1iZXJdLnloTnVtXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuJGVtaXQoXCJib3hfM1wiLCB7c3RhcnQ6IDEsIGluZm86IG1zZy5pbmZvLCBkYXRhOiBudWxsfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICB9KTtcbiAgICB9XSk7XG5cbiIsIi8qKlxuICogQ3JlYXRlZCBieSBsaWFvaHVpMTA4MCBvbiAyMDE2LzEyLzIzLlxuICovXG5jb25zb2xlLmxvZyhcImJveF80IOWcsOWbvlwiKTtcbnZhciB0aGlzQ29udHJvbGxlciA9IGFuZ3VsYXIubW9kdWxlKFwiYm94XzRNb2R1bGVcIiwgW10pO1xudGhpc0NvbnRyb2xsZXIuY29udHJvbGxlcihcImJveF80Q29udHJvbGxlclwiLCBbJyRzY29wZScsICdsaF9hamF4JywnJHJvb3RTY29wZScsXG4gICAgZnVuY3Rpb24gKCRzY29wZSwgbGhfYWpheCwkcm9vdFNjb3BlKSB7XG5cblxuXG5cblxuXG4gICAgbGhfYWpheC5nZXQoe1xuICAgICAgICB1cmw6ICAkcm9vdFNjb3BlLlVSTC5ib3hfNC51cmwsXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChtc2cpIHtcblxuICAgICAgICAgICAgdmFyIGNoYXJ0ID0gZWNoYXJ0cy5pbml0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnKSk7XG5cbiAgICAgICAgICAgIGVjaGFydHMucmVnaXN0ZXJNYXAoJ2d1aXpob3UnLCBtc2cuZGF0YSk7Ly/orr7nva7lnLDlm75cblxuXG4gICAgICAgICAgICAvL+WchueCueWdkOagh+eCuVxuICAgICAgICAgICAgdmFyIGd6X2RhdGEgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGNwcyA9IDA7IGNwcyA8IG1zZy5kYXRhLmZlYXR1cmVzLmxlbmd0aDsgY3BzKyspIHtcbiAgICAgICAgICAgICAgICBnel9kYXRhW2Nwc10gPSBtc2cuZGF0YS5mZWF0dXJlc1tjcHNdLnByb3BlcnRpZXMuY3BcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgb3B0aW9uMyA9IHtcblxuXG4gICAgICAgICAgICAgICAgZ2VvOiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG1hcDogJ2d1aXpob3UnLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBlbXBoYXNpczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBpdGVtU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZWFDb2xvcjogJyMwMjE3MjknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzI3YTJkNycsXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBlbXBoYXNpczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZWFDb2xvcjogJyNmZjZhMDAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI2JmNGMwMCcsXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICByZWdpb25zOlt7XCJuYW1lXCI6XCLotLXpmLNcIixcInNlbGVjdGVkXCI6dHJ1ZX1dXG5cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNlcmllczoge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImd1aXpob3VcIixcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3NjYXR0ZXInLFxuICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlU3lzdGVtOiAnZ2VvJyxcbiAgICAgICAgICAgICAgICAgICAgZ2VvSW5kZXg6IDAsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGd6X2RhdGEsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1TdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZmZmZmZmJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG5cbiAgICAgICAgICAgIC8v6buY6K6k56ys5LiA5qyh5Yqg6L295Zyw5Zu+XG4gICAgICAgICAgICAvLyBjaGFydC5zZXRPcHRpb24ob3B0aW9uMyk7XG5cblxuICAgICAgICAgICAgLy/mjqXliLDkuLvmjqfliLblmajlj5HmnaXnmoTliLfmlrDmtojmga9cbiAgICAgICAgICAgICRzY29wZS4kb24oXCJib3hBbGxcIixmdW5jdGlvbiAoZXZlbnQsYm94TXNnKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobXNnKVxuICAgICAgICAgICAgICAgIG9wdGlvbjMuZ2VvLnJlZ2lvbnM9W2JveE1zZ107XG4gICAgICAgICAgICAgICAgY2hhcnQuc2V0T3B0aW9uKG9wdGlvbjMpO1xuXG4gICAgICAgICAgICAgICAgJHNjb3BlLiRlbWl0KFwiYm94XzRcIiwge3N0YXJ0OiAxLCBpbmZvOiBcImJveF80P+makOaCo+WKoOi9veaIkOWKn1wiLCBkYXRhOiBudWxsfSk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIH1cbiAgICB9KTtcblxuXG5cblxuXG5cbn1dKTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBsaWFvaHVpMTA4MCBvbiAyMDE2LzEyLzIzLlxuICovXG5jb25zb2xlLmxvZyhcImJveF81XCIpO1xudmFyIHRoaXNDb250cm9sbGVyID0gYW5ndWxhci5tb2R1bGUoXCJib3hfNU1vZHVsZVwiLCBbXSk7XG50aGlzQ29udHJvbGxlci5jb250cm9sbGVyKFwiYm94XzVDb250cm9sbGVyXCIsIFsnJHNjb3BlJywgJ2xoX2FqYXgnLCAnJHJvb3RTY29wZScsXG4gICAgZnVuY3Rpb24gKCRzY29wZSwgbGhfYWpheCwgJHJvb3RTY29wZSkge1xuICAgICAgICAkc2NvcGUucWl5ZUxpc3QgPSBbXTtcbiAgICAgICAgJHNjb3BlLm1heE51bWJlcnM9MDsgLy/mnIDlpKfmlbBcbiAgICAgICAgJHNjb3BlLiRvbignYm94QWxsJywgZnVuY3Rpb24gKGV2ZW50LCBib3hNc2cpIHtcblxuICAgICAgICAgICAgbGhfYWpheC5nZXQoe1xuICAgICAgICAgICAgICAgIHVybDogJHJvb3RTY29wZS5VUkwuYm94XzUudXJsLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtxeU51bTogN30sXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKG1zZykge1xuICAgICAgICAgICAgICAgICAgICAkc2NvcGUucWl5ZUxpc3QgPSBtc2cuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLm1heE51bWJlcnMgPSBfLm1heChtc2cuZGF0YSxmdW5jdGlvbiAoc3Rvb2dlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0b29nZS5udW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUudGl0bGU9bXNnLmluZm87XG5cbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLiRlbWl0KFwiYm94XzVcIiwge3N0YXJ0OiAxLCBpbmZvOiBcImJveF81P+makOaCo+WKoOi9veaIkOWKn1wiLCBkYXRhOiBudWxsfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICB9XSk7XG5cbiIsIi8qKlxuICogQ3JlYXRlZCBieSBsaWFvaHVpMTA4MCBvbiAyMDE2LzEyLzIzLlxuICovXG5jb25zb2xlLmxvZyhcImJveF82XCIpO1xudmFyIHRoaXNDb250cm9sbGVyID0gYW5ndWxhci5tb2R1bGUoXCJib3hfNk1vZHVsZVwiLCBbXSk7XG50aGlzQ29udHJvbGxlci5jb250cm9sbGVyKFwiYm94XzZDb250cm9sbGVyXCIsIFsnJHNjb3BlJywgJ2xoX2FqYXgnLCckcm9vdFNjb3BlJyxcbiAgICBmdW5jdGlvbiAoJHNjb3BlLCBsaF9hamF4LCRyb290U2NvcGUpIHtcbiAgICAkc2NvcGUuY2VzaGkgPSBcIua1i+ivleaIkOWKn1wiXG5cblxuXG4gICAgJHNjb3BlLiRvbignYm94QWxsJyxmdW5jdGlvbiAoZXZlbnQgLGJveE1zZykge1xuICAgICAgICBsaF9hamF4LmdldCh7XG4gICAgICAgICAgICB1cmw6ICRyb290U2NvcGUuVVJMLmJveF82LnVybCxcbiAgICAgICAgICAgIGRhdGE6Ym94TXNnP2JveE1zZzpudWxsLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKG1zZykge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG1zZy5kYXRhKVxuICAgICAgICAgICAgICAgIGxldmVsKG1zZy5kYXRhLG1zZy5pbmZvKTtcbiAgICAgICAgICAgICAgICAkc2NvcGUuJGVtaXQoXCJib3hfNlwiLHtzdGFydDoxLGluZm86XCJib3hfNj/pmpDmgqPliqDovb3miJDlip9cIixkYXRhOm51bGx9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGxldmVsKG8sdGl0bGUpIHtcbiAgICAgICAgdmFyIG15Q2hhcnQgPSBlY2hhcnRzLmluaXQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JveF82JykpO1xuICAgICAgICB2YXIgb3B0aW9uID0ge1xuXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDIxNzI5JyxcbiAgICAgICAgICAgIGNvbG9yOiBbJyNGRTU5NDUnLCcjMDMyRDRGJ10sXG4gICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICAgIHRleHQ6IHRpdGxlPyB0aXRsZTon5rKh5pyJ5qCH6aKYJyxcbiAgICAgICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICAgICAgdGV4dFN0eWxlOiB7XG5cbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZmZmJywgICAgICAgICAvLyDlm77kvovmloflrZfpopzoibJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDEzLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMwMzJENEZcIixcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyOiAnaXRlbScsXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVyOiBcInthfSA8YnIvPntifSA6IHtjfSBcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgIG9yaWVudDogJ3ZlcnRpY2FsJyxcbiAgICAgICAgICAgICAgICB5OiAnYm90dG9tJyxcbiAgICAgICAgICAgICAgICB4OiBcInJpZ2h0XCIsXG5cbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgIGRhdGE6IFtdLFxuICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VyaWVzOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ+eUqOaIt+WxnuaApycsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3BpZScsXG4gICAgICAgICAgICAgICAgcmFkaXVzOiAnNzAlJyxcbiAgICAgICAgICAgICAgICBjZW50ZXI6IFsnNTAlJywgJzQ1JSddLFxuICAgICAgICAgICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgICAgICAgICAgIG5vcm1hbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcmFtLnBlcmNlbnQudG9GaXhlZCgwKSArICclJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2lubmVyJyxcblxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBlbXBoYXNpczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcmFtLnBlcmNlbnQudG9GaXhlZCgwKSArICclJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0U3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMjAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogJ2JvbGQnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBpdGVtU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcIiMwMjE3MjlcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkYXRhOiBbXVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8v5oqK5pWw5o2u5re75Yqg5Yiwb3B0aW9u6YeM6Z2iXG4gICAgICAgIGZvciAodmFyIHMgPSAwOyBzIDwgby5sZW5ndGg7IHMrKykge1xuICAgICAgICAgICAgb3B0aW9uLnNlcmllcy5kYXRhW3NdID0ge1xuICAgICAgICAgICAgICAgIHZhbHVlOm9bc10ubnVtYmVyLFxuICAgICAgICAgICAgICAgIG5hbWU6b1tzXS5uYW1lXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgb3B0aW9uLmxlZ2VuZC5kYXRhLnB1c2gob1tzXS5uYW1lKTtcblxuICAgICAgICB9XG4gICAgICAgIG15Q2hhcnQuc2V0T3B0aW9uKG9wdGlvbilcblxuICAgIH1cblxuXG5cbn1dKTtcblxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGxpYW9odWkxMDgwIG9uIDIwMTYvMTIvMjMuXG4gKi9cbmNvbnNvbGUubG9nKFwiYm94XzdcIik7XG52YXIgdGhpc0NvbnRyb2xsZXIgPSBhbmd1bGFyLm1vZHVsZShcImJveF83TW9kdWxlXCIsIFtdKTtcbnRoaXNDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJib3hfN0NvbnRyb2xsZXJcIiwgWyckc2NvcGUnLCAnbGhfYWpheCcsICckcm9vdFNjb3BlJyxcbiAgICBmdW5jdGlvbiAoJHNjb3BlLCBsaF9hamF4LCRyb290U2NvcGUpIHtcbiAgICAkc2NvcGUuY2VzaGk9XCLmtYvor5XmiJDlip9cIjtcblxuXG5cbiAgICAkc2NvcGUuJG9uKCdib3hBbGwnLGZ1bmN0aW9uIChldmVudCAsYm94TXNnKSB7XG4gICAgICAgIGxoX2FqYXguZ2V0KHtcbiAgICAgICAgICAgIHVybDogJHJvb3RTY29wZS5VUkwuYm94XzcudXJsLFxuICAgICAgICAgICAgZGF0YTpib3hNc2c/Ym94TXNnOm51bGwsXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAobXNnKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobXNnLmRhdGEpXG4gICAgICAgICAgICAgICAgbGV2ZWwobXNnLmRhdGEsIG1zZy5pbmZvKTtcbiAgICAgICAgICAgICAgICAkc2NvcGUuJGVtaXQoXCJib3hfN1wiLHtzdGFydDoxLGluZm86XCJib3hfNz/pmpDmgqPliqDovb3miJDlip9cIixkYXRhOm51bGx9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGxldmVsKG8sdGl0bGUpIHtcbiAgICAgICAgdmFyIG15Q2hhcnQgPSBlY2hhcnRzLmluaXQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JveF83JykpO1xuICAgICAgICB2YXIgb3B0aW9uID0ge1xuXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDIxNzI5JyxcbiAgICAgICAgICAgIGNvbG9yOiBbJyMwMzJENEYnLCcjMDA3MUJCJ10sXG4gICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICAgIHRleHQ6IHRpdGxlLFxuICAgICAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgICAgICB0ZXh0U3R5bGU6IHtcblxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNmZmYnLCAgICAgICAgIC8vIOWbvuS+i+aWh+Wtl+minOiJslxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTMsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzAzMkQ0RlwiLFxuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgICAgIHRyaWdnZXI6ICdpdGVtJyxcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6IFwie2F9IDxici8+e2J9IDoge2N9IFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgb3JpZW50OiAndmVydGljYWwnLFxuICAgICAgICAgICAgICAgIHk6ICdib3R0b20nLFxuICAgICAgICAgICAgICAgIHg6IFwicmlnaHRcIixcblxuICAgICAgICAgICAgICAgIGhlaWdodDogMjAsXG4gICAgICAgICAgICAgICAgZGF0YTogW10sXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXJpZXM6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiAn55So5oi35bGe5oCnJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAncGllJyxcbiAgICAgICAgICAgICAgICByYWRpdXM6ICc3MCUnLFxuICAgICAgICAgICAgICAgIGNlbnRlcjogWyc1MCUnLCAnNDUlJ10sXG4gICAgICAgICAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyYW0ucGVyY2VudC50b0ZpeGVkKDApICsgJyUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnaW5uZXInLFxuXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVtcGhhc2lzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyYW0ucGVyY2VudC50b0ZpeGVkKDApICsgJyUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAyMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGl0ZW1TdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBub3JtYWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiA1LFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwiIzAyMTcyOVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRhdGE6IFtdXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cblxuICAgICAgICAvL+aKiuaVsOaNrua3u+WKoOWIsG9wdGlvbumHjOmdolxuICAgICAgICBmb3IgKHZhciBzID0gMDsgcyA8IG8ubGVuZ3RoOyBzKyspIHtcbiAgICAgICAgICAgIG9wdGlvbi5zZXJpZXMuZGF0YVtzXSA9IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTpvW3NdLm51bWJlcixcbiAgICAgICAgICAgICAgICBuYW1lOm9bc10ubmFtZSxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIG9wdGlvbi5sZWdlbmQuZGF0YS5wdXNoKG9bc10ubmFtZSk7XG5cblxuICAgICAgICB9XG5cblxuXG4gICAgICAgIG15Q2hhcnQuc2V0T3B0aW9uKG9wdGlvbilcblxuICAgIH1cblxuXG59XSk7XG5cbiIsIi8qKlxuICogQ3JlYXRlZCBieSBsaWFvaHVpMTA4MCBvbiAyMDE2LzEyLzIzLlxuICovXG5jb25zb2xlLmxvZyhcImJveF84XCIpO1xudmFyIHRoaXNDb250cm9sbGVyID0gYW5ndWxhci5tb2R1bGUoXCJib3hfOE1vZHVsZVwiLCBbXSk7XG50aGlzQ29udHJvbGxlci5jb250cm9sbGVyKFwiYm94XzhDb250cm9sbGVyXCIsIFsnJHNjb3BlJywgJ2xoX2FqYXgnLCAnJHJvb3RTY29wZScsXG4gICAgZnVuY3Rpb24gKCRzY29wZSwgbGhfYWpheCwkcm9vdFNjb3BlKSB7XG4gICAgJHNjb3BlLnFpeWVMaXN0PVtdO1xuXG5cbiAgICAkc2NvcGUuJG9uKCdib3hBbGwnLGZ1bmN0aW9uIChldmVudCAsYm94TXNnKSB7XG4gICAgICAgIGxoX2FqYXguZ2V0KHtcbiAgICAgICAgICAgIHVybDogJHJvb3RTY29wZS5VUkwuYm94XzgudXJsLFxuICAgICAgICAgICAgZGF0YTpib3hNc2c/Ym94TXNnOm51bGwsXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAobXNnKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobXNnLmRhdGEpXG4gICAgICAgICAgICAgICAgJHNjb3BlLnFpeWVMaXN0PW1zZy5kYXRhO1xuXG4gICAgICAgICAgICAgICAgJHNjb3BlLm1heE51bWJlcnMgPSBfLm1heChtc2cuZGF0YSxmdW5jdGlvbiAoc3Rvb2dlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdG9vZ2UubnVtYmVyO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgJHNjb3BlLnRpdGxlPW1zZy5pbmZvO1xuICAgICAgICAgICAgICAgICRzY29wZS4kZW1pdChcImJveF83XCIse3N0YXJ0OjEsaW5mbzptc2cuaW5mbyxkYXRhOm51bGx9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiAgICB9KTtcbn1dKTtcblxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGxpYW9odWkxMDgwIG9uIDIwMTYvMTIvMjMuXG4gKi9cbmNvbnNvbGUubG9nKFwiYm94XzlcIik7XG52YXIgdGhpc0NvbnRyb2xsZXIgPSBhbmd1bGFyLm1vZHVsZShcImJveF85TW9kdWxlXCIsIFtdKTtcbnRoaXNDb250cm9sbGVyLmNvbnRyb2xsZXIoXCJib3hfOUNvbnRyb2xsZXJcIiwgWyckc2NvcGUnLCAnbGhfYWpheCcsJyRyb290U2NvcGUnLFxuICAgIGZ1bmN0aW9uICgkc2NvcGUsIGxoX2FqYXggLCRyb290U2NvcGUpIHtcbiAgICAkc2NvcGUuY2VzaGk9XCLmtYvor5XmiJDlip9cIlxuXG5cbiAgICAkc2NvcGUuJG9uKCdib3hBbGwnLGZ1bmN0aW9uIChldmVudCAsYm94TXNnKSB7XG4gICAgICAgIGxoX2FqYXguZ2V0KHtcbiAgICAgICAgICAgIHVybDogICRyb290U2NvcGUuVVJMLmJveF85LnVybCxcbiAgICAgICAgICAgIGRhdGE6Ym94TXNnP2JveE1zZzpudWxsLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKG1zZykge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG1zZy5kYXRhKVxuICAgICAgICAgICAgICAgIHF1eGlhbnR1KG1zZy5kYXRhLG1zZy5pbmZvKTtcbiAgICAgICAgICAgICAgICAkc2NvcGUuJGVtaXQoXCJib3hfOVwiLHtzdGFydDoxLGluZm86XCJib3hfNj/pmpDmgqPliqDovb3miJDlip9cIixkYXRhOm51bGx9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiAgICB9KTtcblxuLy/mm7Lnur/lm75cbiAgICBmdW5jdGlvbiBxdXhpYW50dShvLHRpdGxlKSB7XG4gICAgICAgIHZhciBteUNoYXJ0ID0gZWNoYXJ0cy5pbml0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib3hfOScpKTtcbiAgICAgICAgLy8g6L+H5rihLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIG15Q2hhcnQuc2hvd0xvYWRpbmcoe1xuICAgICAgICAgICAgdGV4dDogJ+ato+WcqOWKquWKm+eahOivu+WPluaVsOaNruS4rS4uLicsICAgIC8vbG9hZGluZ+ivneacr1xuICAgICAgICB9KTtcbiAgICAgICAgbXlDaGFydC5oaWRlTG9hZGluZygpO1xuICAgICAgICAvLyBteUNoYXJ0LmdyaWQoMjAsMjAsMCwwKVxuICAgICAgICB3aW5kb3cub25yZXNpemUgPSBteUNoYXJ0LnJlc2l6ZTtcblxuXG4gICAgICAgIHZhciBvcHRpb24gPSB7XG4gICAgICAgICAgICAvLyDlhajlm77pu5jorqTog4zmma9cbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwMjE3MjknLFxuXG4gICAgICAgICAgICAvLyDpu5jorqToibLmnb9cbiAgICAgICAgICAgIC8vIGNvbG9yOiBbXG4gICAgICAgICAgICAvLyAgICAgJyNGRTg0NjMnLCAnIzlCQ0E2MycsICcjRkFEODYwJywgJyM2MEMwREQnLCAnIzAwODRDNicsXG4gICAgICAgICAgICAvLyAgICAgJyNENzUwNEInLCAnI0M2RTU3OScsICcjMjZDMEMwJywgJyNGMDgwNUEnLCAnI0Y0RTAwMScsXG4gICAgICAgICAgICAvLyAgICAgJyNCNUMzMzQnXG4gICAgICAgICAgICAvLyBdLFxuICAgICAgICAgICAgLy/ovrnot53nvZHmoLxcbiAgICAgICAgICAgIGdyaWQ6IHtcbiAgICAgICAgICAgICAgICBsZWZ0OiAnMTAnLFxuICAgICAgICAgICAgICAgIHJpZ2h0OiAnMjAnLFxuICAgICAgICAgICAgICAgIGJvdHRvbTogJzEyJyxcbiAgICAgICAgICAgICAgICB0b3A6ICc0MCcsXG4gICAgICAgICAgICAgICAgY29udGFpbkxhYmVsOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGV4dFN0eWxlOntcbiAgICAgICAgICAgICAgICBjb2xvcjpcIiNmZmZcIlxuICAgICAgICAgICAgfSxcblxuXG4gICAgICAgICAgICAvLyDlm77ooajmoIfpophcbiAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgdGV4dDogdGl0bGU/dGl0bGU6XCLmsqHmnInlvpfliLDmoIfpophcIixcbiAgICAgICAgICAgICAgICB0ZXh0U3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2ZmZicgLCAgICAgICAgIC8vIOWbvuS+i+aWh+Wtl+minOiJslxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZToxMyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHg6XCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgeTpcInRvcFwiLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcIiMwMzJENEZcIixcblxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLy8g5Zu+5L6LXG4gICAgICAgICAgICBsZWdlbmQ6IHtcblxuICAgICAgICAgICAgICAgIHRleHRTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyMzYTg3YWQnLCAgICAgICAgIC8vIOWbvuS+i+aWh+Wtl+minOiJslxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTAsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6XCLmlrnmraPoiJLkvZNcIixcbiAgICAgICAgICAgICAgICAgICAgZm9udFN0eWxlOidub3JtYWwnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkYXRhOiBbXSxcbiAgICAgICAgICAgICAgICB4OiBcInJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgeTogXCJ0b3BcIixcblxuICAgICAgICAgICAgfSxcblxuXG4gICAgICAgICAgICAvL+W3peWFt+adoVxuICAgICAgICAgICAgLy8gdG9vbGJveDoge1xuICAgICAgICAgICAgLy8gICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAvLyAgICAgZmVhdHVyZToge1xuICAgICAgICAgICAgLy8gICAgICAgICBtYXJrOiB7c2hvdzogdHJ1ZX0sXG4gICAgICAgICAgICAvLyAgICAgICAgIGRhdGFWaWV3OiB7c2hvdzogdHJ1ZSwgcmVhZE9ubHk6IGZhbHNlfSxcbiAgICAgICAgICAgIC8vICAgICAgICAgbWFnaWNUeXBlOiB7c2hvdzogdHJ1ZSwgdHlwZTogWydsaW5lJywgJ2JhcicsICdzdGFjaycsICd0aWxlZCddfSxcbiAgICAgICAgICAgIC8vICAgICAgICAgcmVzdG9yZToge3Nob3c6IHRydWV9LFxuICAgICAgICAgICAgLy8gICAgICAgICBzYXZlQXNJbWFnZToge3Nob3c6IHRydWV9LFxuICAgICAgICAgICAgLy8gICAgICAgICAvLyBteVRvb2wxOiB7XG4gICAgICAgICAgICAvLyAgICAgICAgIC8vICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgLy8gICAgICAgICAvLyAgICAgdGl0bGU6ICfliLfmlrAnLFxuICAgICAgICAgICAgLy8gICAgICAgICAvLyAgICAgaWNvbjogJ3BhdGg6Ly9NNDMyLjQ1LDU5NS40NDRjMCwyLjE3Ny00LjY2MSw2LjgyLTExLjMwNSw2LjgyYy02LjQ3NSwwLTExLjMwNi00LjU2Ny0xMS4zMDYtNi44MnM0Ljg1Mi02LjgxMiwxMS4zMDYtNi44MTJDNDI3Ljg0MSw1ODguNjMyLDQzMi40NTIsNTkzLjE5MSw0MzIuNDUsNTk1LjQ0NEw0MzIuNDUsNTk1LjQ0NHogTTQyMS4xNTUsNTg5Ljg3NmMtMy4wMDksMC01LjQ0OCwyLjQ5NS01LjQ0OCw1LjU3MnMyLjQzOSw1LjU3Miw1LjQ0OCw1LjU3MmMzLjAxLDAsNS40NDktMi40OTUsNS40NDktNS41NzJDNDI2LjYwNCw1OTIuMzcxLDQyNC4xNjUsNTg5Ljg3Niw0MjEuMTU1LDU4OS44NzZMNDIxLjE1NSw1ODkuODc2eiBNNDIxLjE0Niw1OTEuODkxYy0xLjkxNiwwLTMuNDcsMS41ODktMy40NywzLjU0OWMwLDEuOTU5LDEuNTU0LDMuNTQ4LDMuNDcsMy41NDhzMy40NjktMS41ODksMy40NjktMy41NDhDNDI0LjYxNCw1OTMuNDc5LDQyMy4wNjIsNTkxLjg5MSw0MjEuMTQ2LDU5MS44OTFMNDIxLjE0Niw1OTEuODkxek00MjEuMTQ2LDU5MS44OTEnLFxuICAgICAgICAgICAgLy8gICAgICAgICAvLyAgICAgb25jbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gICAgICAgICAvLyAgICAgICAgIGFsZXJ0KCdteVRvb2xIYW5kbGVyMScpXG4gICAgICAgICAgICAvLyAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIC8vICAgICB9LFxuICAgICAgICAgICAgLy8gICAgIHg6IFwicmlnaHRcIixcbiAgICAgICAgICAgIC8vICAgICB5OiBcInRvcFwiLFxuICAgICAgICAgICAgLy8gICAgIGJhY2tncm91bmRDb2xvcjpcIiMzMzNcIlxuICAgICAgICAgICAgLy8gfSxcblxuXG4gICAgICAgICAgICAvLyDmj5DnpLrmoYZcbiAgICAgICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI1MCwyNTAsMjUwLDAuOCknLCAgICAgLy8g5o+Q56S66IOM5pmv6aKc6Imy77yM6buY6K6k5Li66YCP5piO5bqm5Li6MC4355qE6buR6ImyXG4gICAgICAgICAgICAgICAgYXhpc1BvaW50ZXI6IHsgICAgICAgICAgICAvLyDlnZDmoIfovbTmjIfnpLrlmajvvIzlnZDmoIfovbTop6blj5HmnInmlYhcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2xpbmUnLCAgICAgICAgIC8vIOm7mOiupOS4uuebtOe6v++8jOWPr+mAieS4uu+8midsaW5lJyB8ICdzaGFkb3cnXG4gICAgICAgICAgICAgICAgICAgIGxpbmVTdHlsZTogeyAgICAgICAgICAvLyDnm7Tnur/mjIfnpLrlmajmoLflvI/orr7nva5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2FhYSdcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY3Jvc3NTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjYWFhJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzaGFkb3dTdHlsZTogeyAgICAgICAgICAgICAgICAgICAgIC8vIOmYtOW9seaMh+ekuuWZqOagt+W8j+iuvue9rlxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDIwMCwyMDAsMjAwLDAuMiknXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRleHRTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyMzMzMnLFxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZToxMlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cblxuICAgICAgICAgICAgeEF4aXM6IFtcbiAgICAgICAgICAgICAgICB7XG5cbiAgICAgICAgICAgICAgICAgICAgc3BsaXRMaW5lOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lU3R5bGU6IHsgICAgICAgLy8g5bGe5oCnbGluZVN0eWxl5o6n5Yi257q/5p2h5qC35byPXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjMTczNDUyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAvL+iuvue9ruWdkOagh+i9tOaWh+Wtl+minOiJslxuICAgICAgICAgICAgICAgICAgICBheGlzTGFiZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRTdHlsZToge2NvbG9yOiBcIiMwMDk2RkNcIn1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2NhdGVnb3J5JyxcbiAgICAgICAgICAgICAgICAgICAgYm91bmRhcnlHYXA6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBvLnhBeGlzLFxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHlBeGlzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAndmFsdWUnLFxuICAgICAgICAgICAgICAgICAgICAvL+iuvue9ruWdkOagh+i9tOi+ueahhuminOiJslxuICAgICAgICAgICAgICAgICAgICBzcGxpdExpbmU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVTdHlsZTogeyAgICAgICAvLyDlsZ7mgKdsaW5lU3R5bGXmjqfliLbnur/mnaHmoLflvI9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyMxNzM0NTInXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIC8v6K6+572u5Z2Q5qCH6L205paH5a2X6aKc6ImyXG4gICAgICAgICAgICAgICAgICAgIGF4aXNMYWJlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFN0eWxlOiB7Y29sb3I6IFwiIzAwOTZGQ1wifVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIC8vIHNlcmllczogW1xuICAgICAgICAgICAgLy8gICAgIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgbmFtZTogJ+aIkOS6pCcsXG4gICAgICAgICAgICAvLyAgICAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgICAgICAgIC8vICAgICAgICAgc21vb3RoOiB0cnVlLFxuICAgICAgICAgICAgLy8gICAgICAgICBpdGVtU3R5bGU6IHtub3JtYWw6IHtjb2xvcjogXCIjRkZGRjAwXCIsIGFyZWFTdHlsZToge2NvbG9yOiAnI0ZGRkYwMCd9fX0sXG4gICAgICAgICAgICAvLyAgICAgICAgIGRhdGE6IFsxMCwgMTIsIDIxLCA1NCwgMjYwLCA4MzAsIDBdXG4gICAgICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgICAgIC8vICAgICB7XG4gICAgICAgICAgICAvLyAgICAgICAgIG5hbWU6ICfpooTotK0nLFxuICAgICAgICAgICAgLy8gICAgICAgICB0eXBlOiAnbGluZScsXG4gICAgICAgICAgICAvLyAgICAgICAgIHNtb290aDogdHJ1ZSxcbiAgICAgICAgICAgIC8vICAgICAgICAgaXRlbVN0eWxlOiB7bm9ybWFsOiB7Y29sb3I6IFwiIzhCMkJDQ1wiLCBhcmVhU3R5bGU6IHtjb2xvcjogJyM4QjJCQ0MnfX19LFxuICAgICAgICAgICAgLy8gICAgICAgICBkYXRhOiBbMCwgMTgyLCA0MzQsIDc5MSwgMzkwLCAzMCwgMTAsIDQwLCA5MDAsIDEwMCwgMzAwLCAyMDAsIDUwMF1cbiAgICAgICAgICAgIC8vICAgICB9LFxuICAgICAgICAgICAgLy8gICAgIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgbmFtZTogJ+aEj+WQkScsXG4gICAgICAgICAgICAvLyAgICAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgICAgICAgIC8vICAgICAgICAgc21vb3RoOiB0cnVlLFxuICAgICAgICAgICAgLy8gICAgICAgICBpdGVtU3R5bGU6IHtub3JtYWw6IHtjb2xvcjogXCIjMDBEN0ZCXCIsIGFyZWFTdHlsZToge2NvbG9yOiAnIzAwRDdGQid9fX0sXG4gICAgICAgICAgICAvLyAgICAgICAgIGRhdGE6IFsxMDAwLCA4MDAsIDYwMSwgMjM0LCAxMjAsIDkwLCAyMF1cbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyBdXG5cbiAgICAgICAgICAgIHNlcmllczogW11cbiAgICAgICAgfTtcblxuXG4gICAgICAgIC8v5oqK5pWw5o2u5re75Yqg5Yiwb3B0aW9u6YeM6Z2iXG4gICAgICAgIGZvciAodmFyIHMgPSAwOyBzIDwgby5zZXJpZXMubGVuZ3RoOyBzKyspIHtcblxuICAgICAgICAgICAgLy/nu5noioLngrnlop7liqDmlbDmja4s5pi+56S657q/5oCn5Zu+XG4gICAgICAgICAgICBvLnNlcmllc1tzXS50eXBlID0gJ2xpbmUnO1xuICAgICAgICAgICAgby5zZXJpZXNbc10uaXRlbVN0eWxlID0ge1xuICAgICAgICAgICAgICAgIG5vcm1hbDoge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHJvb3RTY29wZS5ZSExYQ09MT1JbXy5maW5kSW5kZXgoJHJvb3RTY29wZS5ZSExYQ09MT1IgLCB7XCJuYW1lXCI6by5zZXJpZXNbc10ubmFtZX0pXS5jb2xvcixcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6NSxcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eToxLFxuICAgICAgICAgICAgICAgICAgICBhcmVhU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6MC41XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9OyAvL+iuvue9ruWbvuiDjOaZr1xuICAgICAgICAgICAgby5zZXJpZXNbc10uc21vb3RoID0gdHJ1ZTsgLy/nur/nmoTovazmipjngrnovazmjaLkuLrlnIbop5JcbiAgICAgICAgICAgIG9wdGlvbi5zZXJpZXMucHVzaChvLnNlcmllc1tzXSk7IC8v5oqK5pWw5o2u5re75Yqg5Yiw6IqC54K55LiKXG5cblxuICAgICAgICAgICAgLy/nu5nlm77kvovmt7vliqDmlbDmja5cbiAgICAgICAgICAgIG9wdGlvbi5sZWdlbmQuZGF0YS5wdXNoKG8uc2VyaWVzW3NdLm5hbWUpXG5cbiAgICAgICAgfVxuXG5cbiAgICAgICAgbXlDaGFydC5zZXRPcHRpb24ob3B0aW9uKTtcbiAgICB9XG59XSk7XG5cblxuXG5cblxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGxpYW9odWkxMDgwIG9uIDIwMTYvMTIvMjMuXG4gKi9cbmNvbnNvbGUubG9nKFwicm9vdENvbnRyb2xsZXJcIik7XG52YXIgcm9vdENvbnRyb2xsZXIgPSBhbmd1bGFyLm1vZHVsZShcInJvb3RNb2R1bGVcIiwgW10pO1xuXG5yb290Q29udHJvbGxlci5jb250cm9sbGVyKFwicm9vdENvbnRyb2xsZXJcIiwgWyckc2NvcGUnLCAnbGhfYWpheCcsICckcm9vdFNjb3BlJywgJyR0aW1lb3V0JywgJyRpbnRlcnZhbCcsXG4gICAgZnVuY3Rpb24gKCRzY29wZSwgbGhfYWpheCwgJHJvb3RTY29wZSwgJHRpbWVvdXQsICRpbnRlcnZhbCkge1xuXG4gICAgICAgIC8v6ZqQ5oKj57G75Z6L5a+55bqU55qE6aKc6Imy5YC8XG4gICAgICAgICRyb290U2NvcGUuWUhMWENPTE9SID0gW1xuICAgICAgICAgICAge2lkOiAxLCBcIm5hbWVcIjogXCLkuIDoiKzpmpDmgqNcIiwgXCJjb2xvclwiOiBcIiMwMDcxQkJcIn0sXG4gICAgICAgICAgICB7aWQ6IDIsIFwibmFtZVwiOiBcIumHjeWkp+makOaCo1wiLCBcImNvbG9yXCI6IFwiI0ZFNTk0NVwifSxcbiAgICAgICAgICAgIHtpZDogMywgXCJuYW1lXCI6IFwi5pyq5pW05pS5XCIsIFwiY29sb3JcIjogXCIjZmZmNjAwXCJ9LFxuICAgICAgICAgICAge2lkOiA0LCBcIm5hbWVcIjogXCLlt7LmlbTmlLlcIiwgXCJjb2xvclwiOiBcIiMxNmI0MjRcIn1cbiAgICAgICAgXTtcblxuXG4gICAgICAgIC8v5o6n5Yi26aG16Z2iIOWKoOi9veaooeWdl1xuICAgICAgICAkc2NvcGUuaW5jbHVkZSA9IHtcbiAgICAgICAgICAgIGJveF8xOiBcImJveF8xLmh0bWxcIixcbiAgICAgICAgICAgIGJveF8yOiBcImJveF8yLmh0bWxcIixcbiAgICAgICAgICAgIGJveF8zOiBcImJveF8zLmh0bWxcIixcbiAgICAgICAgICAgIGJveF80OiBcImJveF80Lmh0bWxcIixcbiAgICAgICAgICAgIGJveF81OiBcImJveF81Lmh0bWxcIixcbiAgICAgICAgICAgIGJveF82OiBcImJveF82Lmh0bWxcIixcbiAgICAgICAgICAgIGJveF83OiBcImJveF83Lmh0bWxcIixcbiAgICAgICAgICAgIGJveF84OiBcImJveF84Lmh0bWxcIixcbiAgICAgICAgICAgIGJveF85OiBcImJveF85Lmh0bWxcIixcbiAgICAgICAgICAgIGJveF8xMDogXCJib3hfMTAuaHRtbFwiLFxuICAgICAgICAgICAgYm94XzExOiBcImJveF8xMS5odG1sXCJcbiAgICAgICAgfTtcblxuXG4gICAgICAgIC8v5omA5pyJYWpheOWJjemdouaJgOimgeWKoOeahGh0dHDlnLDlnYBcbiAgICAgICAgJHNjb3BlLmh0dHAgPSBcIi9wcm94eS8yMjAuMTk3LjIxOS4yMzU6ODA4OS9cIjtcblxuICAgICAgICAvL+WQhOS4quaooeWdl+eahHVybFxuICAgICAgICAkcm9vdFNjb3BlLlVSTCA9IHtcbiAgICAgICAgICAgIFwiYm94XzFcIjoge1widXJsXCI6ICRzY29wZS5odHRwICsgJ1lIUEMvb25lU2NyZWVuL3RpdGxlTnVtJ30sXG4gICAgICAgICAgICBcImJveF8yXCI6IHtcInVybFwiOiAkc2NvcGUuaHR0cCArICdZSFBDL29uZVNjcmVlbi9nZXROZXdlc3RZaD9udW09NSd9LFxuICAgICAgICAgICAgXCJib3hfM1wiOiB7XCJ1cmxcIjogJHNjb3BlLmh0dHAgKyAnWUhQQy9vbmVTY3JlZW4vZ2V0UmFkYXJEYXRhJ30sXG4gICAgICAgICAgICBcImJveF80XCI6IHtcInVybFwiOiBcInNlcnZlcl9qc29uL2JveF80L2d1aXpob3UuanNvblwifSxcbiAgICAgICAgICAgIFwiYm94XzVcIjoge1widXJsXCI6ICRzY29wZS5odHRwICsgJ1lIUEMvb25lU2NyZWVuL2dldFF5WWhOdW0/J30sXG4gICAgICAgICAgICBcImJveF82XCI6IHtcInVybFwiOiAkc2NvcGUuaHR0cCArICdZSFBDL29uZVNjcmVlbi9nZXRReXpjWmd6dE51bSd9LFxuICAgICAgICAgICAgXCJib3hfN1wiOiB7XCJ1cmxcIjogJHNjb3BlLmh0dHAgKyAnWUhQQy9vbmVTY3JlZW4vZ2V0WmZ4Y1pnenROdW0nfSxcbiAgICAgICAgICAgIFwiYm94XzhcIjoge1widXJsXCI6ICRzY29wZS5odHRwICsgJ1lIUEMvb25lU2NyZWVuL2dldFlobGJOdW0/bnVtPTUnfSxcbiAgICAgICAgICAgIFwiYm94XzlcIjoge1widXJsXCI6ICRzY29wZS5odHRwICsgJ1lIUEMvb25lU2NyZWVuL2dldEN1cnZlRGF0ZT9rc3lmPTIwMTYtMDEmanN5Zj0yMDE2LTExJ30sXG4gICAgICAgICAgICBcImJveF8xMFwiOiB7XCJ1cmxcIjogJHNjb3BlLmh0dHAgKyAnWUhQQy9vbmVTY3JlZW4vZ2V0Q3VydmVSaWdodERhdGU/a3NuZj0yMDE0JmpzbmY9MjAxNid9LFxuICAgICAgICAgICAgXCJib3hfMTFcIjoge1widXJsXCI6ICRzY29wZS5odHRwICsgJ1lIUEMvb25lU2NyZWVuL2dldEh5bGJEYXRlJ30sXG4gICAgICAgIH07XG5cblxuXG5cblxuXG4gICAgICAgIC8v57uZ5YWo5bGA5bm/5pKt55qE5raI5oGvXG4gICAgICAgICRzY29wZS5jaXR5ID0gW1xuICAgICAgICAgICAge1wibmFtZVwiOiBcIui0temYs1wiLCBcInJlc1wiOiAxMiwgXCJzZWxlY3RlZFwiOiB0cnVlfSxcbiAgICAgICAgICAgIHtcIm5hbWVcIjogXCLlha3nm5jmsLRcIiwgXCJyZXNcIjogMTIsIFwic2VsZWN0ZWRcIjogdHJ1ZX0sXG4gICAgICAgICAgICB7XCJuYW1lXCI6IFwi6YG15LmJXCIsIFwicmVzXCI6IDEyLCBcInNlbGVjdGVkXCI6IHRydWV9LFxuICAgICAgICAgICAge1wibmFtZVwiOiBcIuWuiemhulwiLCBcInJlc1wiOiAxMiwgXCJzZWxlY3RlZFwiOiB0cnVlfSxcbiAgICAgICAgICAgIHtcIm5hbWVcIjogXCLmr5XoioJcIiwgXCJyZXNcIjogMTIsIFwic2VsZWN0ZWRcIjogdHJ1ZX0sXG4gICAgICAgICAgICB7XCJuYW1lXCI6IFwi6ZOc5LuBXCIsIFwicmVzXCI6IDEyLCBcInNlbGVjdGVkXCI6IHRydWV9LFxuICAgICAgICAgICAge1wibmFtZVwiOiBcIum7lOWNl1wiLCBcInJlc1wiOiAxMiwgXCJzZWxlY3RlZFwiOiB0cnVlfSxcbiAgICAgICAgICAgIHtcIm5hbWVcIjogXCLpu5Topb/ljZdcIiwgXCJyZXNcIjogMTIsIFwic2VsZWN0ZWRcIjogdHJ1ZX0sXG4gICAgICAgICAgICB7XCJuYW1lXCI6IFwi6buU5Lic5Y2XXCIsIFwicmVzXCI6IDEyLCBcInNlbGVjdGVkXCI6IHRydWV9LFxuXG4gICAgICAgIF07XG5cbiAgICAgICAgLy8gJHNjb3BlLmNpdHkyID0gW1xuICAgICAgICAvLyAgICAge1wibmFtZVwiOiBcIui0temYs+W4glwiLCBcInJlc1wiOiAxMiwgXCJzZWxlY3RlZFwiOiB0cnVlfSxcbiAgICAgICAgLy8gICAgIHtcIm5hbWVcIjogXCLlha3nm5jmsLTluIJcIiwgXCJyZXNcIjogMTIsIFwic2VsZWN0ZWRcIjogdHJ1ZX0sXG4gICAgICAgIC8vICAgICB7XCJuYW1lXCI6IFwi6YG15LmJ5biCXCIsIFwicmVzXCI6IDEyLCBcInNlbGVjdGVkXCI6IHRydWV9LFxuICAgICAgICAvLyAgICAge1wibmFtZVwiOiBcIuWuiemhuuW4glwiLCBcInJlc1wiOiAxMiwgXCJzZWxlY3RlZFwiOiB0cnVlfSxcbiAgICAgICAgLy8gICAgIHtcIm5hbWVcIjogXCLmr5XoioLluIJcIiwgXCJyZXNcIjogMTIsIFwic2VsZWN0ZWRcIjogdHJ1ZX0sXG4gICAgICAgIC8vICAgICB7XCJuYW1lXCI6IFwi6ZOc5LuB5biCXCIsIFwicmVzXCI6IDEyLCBcInNlbGVjdGVkXCI6IHRydWV9LFxuICAgICAgICAvLyAgICAge1wibmFtZVwiOiBcIum7lOWNl+W4g+S+neaXj+iLl+aXj+iHquayu+W3nlwiLCBcInJlc1wiOiAxMiwgXCJzZWxlY3RlZFwiOiB0cnVlfSxcbiAgICAgICAgLy8gICAgIHtcIm5hbWVcIjogXCLpu5Topb/ljZfluIPkvp3ml4/oi5fml4/oh6rmsrvlt55cIiwgXCJyZXNcIjogMTIsIFwic2VsZWN0ZWRcIjogdHJ1ZX0sXG4gICAgICAgIC8vICAgICB7XCJuYW1lXCI6IFwi6buU5Lic5Y2X6IuX5peP5L6X5peP6Ieq5rK75beeXCIsIFwicmVzXCI6IDEyLCBcInNlbGVjdGVkXCI6IHRydWV9LFxuICAgICAgICAvL1xuICAgICAgICAvLyBdO1xuXG5cbiAgICAgICAgLy/lj5HpgIHpu5jorqTlub/mkq0sXG4gICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICRzY29wZS4kYnJvYWRjYXN0KFwiYm94QWxsXCIsICRzY29wZS5jaXR5WzBdKTtcbiAgICAgICAgfSwgMCk7XG5cblxuICAgICAgICAvL+WumuaXtuWPkemAgeW5v+aSrSxcbiAgICAgICAgdmFyIGNpdHlOdW1iZXIgPSAwO1xuICAgICAgICAkaW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICBpZiAoY2l0eU51bWJlciA9PSA4KSB7XG4gICAgICAgICAgICAgICAgLy8gJGludGVydmFsLmNhbmNlbChzdG9wKTtcbiAgICAgICAgICAgICAgICBjaXR5TnVtYmVyID0gLTE7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2l0eU51bWJlciA9IGNpdHlOdW1iZXIgKyAxO1xuICAgICAgICAgICAgICAgICRzY29wZS4kYnJvYWRjYXN0KFwiYm94QWxsXCIsICRzY29wZS5jaXR5W2NpdHlOdW1iZXJdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgNTAwMDApOyAvL+i/meS4quWPguaVsOaYryDlrprml7bliLfmnLrmlbTkuKrpobXpnaLnmoTlj4LmlbBcblxuXG5cbiAgICAgICAgLy/lrZjlgqjlrZDmjqfliLblmajlj5HmnaXnmoTmtojmga8sXG4gICAgICAgIC8vICRzY29wZS5ib3hNc2c9W107XG4gICAgICAgIC8vICRzY29wZS5ib3hNc2cgPSBbXTtcbiAgICAgICAgLy8gJHNjb3BlLmJveE1zZ0h0bWwgPSBbXTtcbiAgICAgICAgLy9cbiAgICAgICAgLy9cbiAgICAgICAgLy8gdmFyIGNhbGxiYWNrID0gZnVuY3Rpb24gKGV2ZW50LCBtc2cpIHtcbiAgICAgICAgLy8gICAgICRzY29wZS5ib3hNc2cucHVzaChtc2cpXG4gICAgICAgIC8vIH07XG4gICAgICAgIC8vICRzY29wZS4kb24oXCJib3hfMVwiLCBjYWxsYmFjayk7XG4gICAgICAgIC8vICRzY29wZS4kb24oXCJib3hfMlwiLCBjYWxsYmFjayk7XG4gICAgICAgIC8vICRzY29wZS4kb24oXCJib3hfM1wiLCBjYWxsYmFjayk7XG4gICAgICAgIC8vICRzY29wZS4kb24oXCJib3hfNFwiLCBjYWxsYmFjayk7XG4gICAgICAgIC8vICRzY29wZS4kb24oXCJib3hfNVwiLCBjYWxsYmFjayk7XG4gICAgICAgIC8vICRzY29wZS4kb24oXCJib3hfNlwiLCBjYWxsYmFjayk7XG4gICAgICAgIC8vICRzY29wZS4kb24oXCJib3hfN1wiLCBjYWxsYmFjayk7XG4gICAgICAgIC8vICRzY29wZS4kb24oXCJib3hfOFwiLCBjYWxsYmFjayk7XG4gICAgICAgIC8vICRzY29wZS4kb24oXCJib3hfOVwiLCBjYWxsYmFjayk7XG4gICAgICAgIC8vICRzY29wZS4kb24oXCJib3hfMTBcIiwgY2FsbGJhY2spO1xuICAgICAgICAvLyAkc2NvcGUuJG9uKFwiYm94XzExXCIsIGNhbGxiYWNrKTtcbiAgICAgICAgLy8gJHNjb3BlLiRvbihcImJveF8xMlwiLCBjYWxsYmFjayk7XG5cblxuICAgICAgICAvLyBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHskc2NvcGUuJG9uKFwiYm94XzFcIiwgY2FsbGJhY2spfSwxMDAwKVxuICAgICAgICAvLyBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHskc2NvcGUuJG9uKFwiYm94XzJcIiwgY2FsbGJhY2spfSw0MDAwKVxuICAgICAgICAvLyBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHskc2NvcGUuJG9uKFwiYm94XzNcIiwgY2FsbGJhY2spfSw2MDAwKVxuICAgICAgICAvLyBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gICAgICRzY29wZS5ib3hNc2dbMF09XCJkZGRkZGRkXCJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiYWRmXCIpXG4gICAgICAgIC8vICAgICAkc2NvcGUuJGFwcGx5KCk7XG4gICAgICAgIC8vIH0sMTAwMCk7XG4gICAgICAgIC8vICRzY29wZS5hYmM9XCJkZGRkZGRcIlxuICAgICAgICAvLyBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gICAgICRzY29wZS5hYmM9XCJjY2NjY2NcIjtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gfSwxMDAwKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gJHNjb3BlLnRpbWVrZT1zZXRUaW1lb3V0KCRzY29wZS50aW1la2U0LDMwMDApO1xuICAgICAgICAvLyAkc2NvcGUudGltZWtlND1mdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vICAgICAkc2NvcGUuYWJjPVwiY2NjY2NjXCI7XG4gICAgICAgIC8vIH07XG4gICAgICAgIC8vXG4gICAgICAgIC8vXG4gICAgICAgIC8vXG5cblxuICAgICAgICAvLyAkc2NvcGUuJHdhdGNoKCdib3hNc2cnLCBmdW5jdGlvbiAobmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhvbGRWYWx1ZSk7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhuZXdWYWx1ZSk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vXG4gICAgICAgIC8vIH0pO1xuICAgICAgICAvL1xuICAgICAgICAvL1xuICAgICAgICAvL1xuICAgICAgICAvL1xuICAgICAgICAvLyAkc2NvcGUuYWJjID0gMDtcbiAgICAgICAgLy8gJGludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gICAgICRzY29wZS5hYmMgPSAkc2NvcGUuYWJjKzE7XG4gICAgICAgIC8vICAgICAkc2NvcGUuYm94TXNnSHRtbFskc2NvcGUuYWJjXSA9ICRzY29wZS5ib3hNc2dbJHNjb3BlLmFiY11cbiAgICAgICAgLy8gfSwgMTAwMCk7XG4gICAgICAgIC8vXG5cbiAgICB9XSk7XG5cbiIsIi8qKlxuICogQ3JlYXRlZCBieSBsaWFvaHVpMTA4MCBvbiAxNi8yLzI2LiBmYWN0b3J5LmpzXG4gKlxuICog5pyN5Yqh5Yib5bu66aG16Z2iXG4gKi9cblxuXG4vL2ZhY3RvcnkgIOacjeWKoea3u+WKoOS9jee9rlxuXG5jb25zb2xlLmxvZyhcImxoX2h0dHBcIik7XG52YXIgbGhfaHR0cCA9IGFuZ3VsYXIubW9kdWxlKFwibGhfaHR0cFwiLCBbXSk7XG5saF9odHRwLmZhY3RvcnkoXCJsaF9hamF4XCIsIFtcIiRodHRwXCIsIGZ1bmN0aW9uICgkaHR0cCkge1xuXG4gICAgdmFyIGFqYXggPSB7XG4gICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICAvLyBjZnBMb2FkaW5nQmFyLnN0YXJ0KCk7XG4gICAgICAgICAgICB2YXIgbG9hZCA9IGxheWVyLmxvYWQoMSk7XG4gICAgICAgICAgICAkaHR0cCh7XG4gICAgICAgICAgICAgICAgaWdub3JlTG9hZGluZ0JhcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdnZXQnLFxuICAgICAgICAgICAgICAgIHVybDogby51cmwsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiBvLmRhdGFcbiAgICAgICAgICAgIH0pLnRoZW4oXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gc3VjY2VzcyhyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHJlc3BvbnNlLmRhdGE7XG5cbiAgICAgICAgICAgICAgICAgICAgbGF5ZXIuY2xvc2UobG9hZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGluZm9TdWNjZXNzID0gby5pbmZvU3VjY2VzcyA/IG8uaW5mb1N1Y2Nlc3MgOiBkYXRhLmluZm8gPyBkYXRhLmluZm8gOiBcIuaIkOWKn1wiO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaW5mb0Vycm9yID0gby5pbmZvU3VjY2VzcyA/IG8uaW5mb1N1Y2Nlc3MgOiBkYXRhLmluZm8gPyBkYXRhLmluZm8gOiAn5pWw5o2u5qC85byP6ZSZ6K+vJztcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5zdGF0dXMgPT0gMSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoby5pbmZvU2hvdykge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXIubXNnKGluZm9TdWNjZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgby5zdWNjZXNzKGRhdGEpO1xuXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoby5pbmZvU2hvdykge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXIubXNnKGluZm9FcnJvciwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+Wbnumch+WKqOaPkOekuueahFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3IocmVzcG9uc2UpIHtcblxuICAgICAgICAgICAgICAgICAgICBsYXllci5tc2coXCLmnI3liqHlmajmlbDmja7moLzlvI/plJnor68uXCIgKyByZXNwb25zZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy/lm57pnIfliqjmj5DnpLrnmoRcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgXCJwb3N0XCI6IGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICB2YXIgbG9hZCA9IGxheWVyLmxvYWQoMSk7XG4gICAgICAgICAgICAkaHR0cCh7XG4gICAgICAgICAgICAgICAgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PVVURi04J30sXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgICAgICAgICB1cmw6IG8udXJsLFxuICAgICAgICAgICAgICAgIHBhcmFtczogby5wYXJhbXMsIC8v6L+Z5Liq5pivdXJs5ZCO57yAID9rZXk9dmFs55qELOS4jeS4gOWumuS8mueUqOWIsFxuICAgICAgICAgICAgICAgIGRhdGE6IGpRdWVyeS5wYXJhbShvLmRhdGEpIC8v5oqKanNvbuaVsOaNriDluo/liJfljJZcbiAgICAgICAgICAgIH0pLnRoZW4oXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKGRhdGEsIHN0YXR1cywgaGVhZGVycywgY29uZmlnKSB7XG4gICAgICAgICAgICAgICAgICAgIGxheWVyLmNsb3NlKGxvYWQpO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmZvU3VjY2VzcyA9IG8uaW5mb1N1Y2Nlc3MgPyBvLmluZm9TdWNjZXNzIDogZGF0YS5pbmZvID8gZGF0YS5pbmZvIDogXCLmiJDlip9cIjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGluZm9FcnJvciA9IG8uaW5mb1N1Y2Nlc3MgPyBvLmluZm9TdWNjZXNzIDogZGF0YS5pbmZvID8gZGF0YS5pbmZvIDogJ+aVsOaNruagvOW8j+mUmeivryc7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuc3RhdHVzID09IDEpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG8uaW5mb1Nob3cpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyLm1zZyhpbmZvU3VjY2Vzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG8uc3VjY2VzcyhkYXRhLCBzdGF0dXMsIGhlYWRlcnMsIGNvbmZpZyk7XG5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvLmluZm9TaG93KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllci5tc2coaW5mb0Vycm9yLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Zue6ZyH5Yqo5o+Q56S655qEXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCLmnI3liqHlmajmlbDmja7moLzlvI/plJnor69cIiArIGUpO1xuICAgICAgICAgICAgICAgICAgICBsYXllci5tc2coXCLmnI3liqHlmajmlbDmja7moLzlvI/plJnor68uXCIgKyBlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL+Wbnumch+WKqOaPkOekuueahFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBhamF4O1xuXG59XSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgbGlhb2h1aTEwODAgb24gMjAxNi8xMi8yNy5cbiAqL1xuXG5cbmFuZ3VsYXIubW9kdWxlKFwidWkuc2VsZWN0LWZpbHRlclwiLCBbXSkuZmlsdGVyKCdwcm9wc0ZpbHRlcicsIFtmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChpdGVtcywgcHJvcHMpIHtcbiAgICAgICAgdmFyIG91dCA9IFtdO1xuXG4gICAgICAgIGlmIChhbmd1bGFyLmlzQXJyYXkoaXRlbXMpKSB7XG4gICAgICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHByb3BzKTtcblxuICAgICAgICAgICAgaXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHZhciBpdGVtTWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm9wID0ga2V5c1tpXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRleHQgPSBwcm9wc1twcm9wXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbVtwcm9wXS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0ZXh0KSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1NYXRjaGVzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW1NYXRjaGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIG91dC5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gTGV0IHRoZSBvdXRwdXQgYmUgdGhlIGlucHV0IHVudG91Y2hlZFxuICAgICAgICAgICAgb3V0ID0gaXRlbXM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH07XG59XSk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGxpYW9odWkxMDgwIG9uIDIwMTcvMS85LlxuICovXG5cblxuXG5cblxuXG5hbmd1bGFyLm1vZHVsZShcImxoX3RpbWVcIiwgW10pXG5cbiAgICAvL+aXtumXtOW5tOaciOaXpeaYn+acn+WIhuenkiAgdGltZUZvcm1hdDonWVlZWeW5tE1N5pyIRETml6UgREQ95pif5pyfLOW/hemhu+Wkp+WGmeaYn+acn+aJjeiDvei+k+WHuuato+ehriBIOm1tOnNzJ1xuICAgIC5maWx0ZXIoJ3RpbWVGb3JtYXQnLCBbZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGlucHV0LCBzdHIpIHtcbiAgICAgICAgICAgIHJldHVybiBtb21lbnQoaW5wdXQpLmZvcm1hdChzdHIpXG4gICAgICAgIH1cbiAgICB9XSk7Il19
