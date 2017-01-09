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