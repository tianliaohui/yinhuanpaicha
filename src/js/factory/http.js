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
