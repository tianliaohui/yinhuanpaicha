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

