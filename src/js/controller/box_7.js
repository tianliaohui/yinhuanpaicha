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

