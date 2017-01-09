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
