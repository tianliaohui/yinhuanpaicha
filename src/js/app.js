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
