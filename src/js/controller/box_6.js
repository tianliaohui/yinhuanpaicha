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

