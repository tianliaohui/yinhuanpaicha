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
