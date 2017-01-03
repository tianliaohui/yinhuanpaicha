const gulp = require("gulp"),
    concat = require("gulp-concat"),
    connect = require('gulp-connect'),//服务器
    less = require('gulp-less'),
    watchLess = require('gulp-watch-less'),
    clean = require('gulp-clean'),
    sourcemaps = require('gulp-sourcemaps');


//静态服务器
gulp.task('connect', function () {
    connect.server({
        root: './build',
        port: 6060,
        livereload: true,
        middleware: function (connect, opt) {
            var Proxy = require('gulp-connect-proxy');//服务器端口扩展
            opt.route = '/proxy';
            var proxy = new Proxy(opt);
            return [proxy];
        }
    });
});


//公共的js库 和css库
gulp.task('modules', function () {
    //页面要用的公共js
    const npm = "node_modules";
    const bower = "bower_components";


    const angular = npm + "/angular/angular.js";

    gulp.src([angular])
        .pipe(gulp.dest('build/modules/angular/'));

    const jquery = npm + "/jquery/dist/jquery.js";
    gulp.src([jquery])
        .pipe(gulp.dest('build/modules/'));

    //加载bootstrap
    const bootstrap = [npm + "/bootstrap/dist/**/*"];
    gulp.src(bootstrap)
        .pipe(gulp.dest('build/modules/bootstrap/'));

    //加载弹出层插件
    const layer = [bower + "/layer/build/**/*"];
    gulp.src(layer)
        .pipe(gulp.dest('build/modules/layer/'));


    //加载echarts图表
    const echarts = [npm + "/echarts/dist/echarts.js"];
    gulp.src(echarts)
        .pipe(gulp.dest('build/modules/echarts/'));


    //加载ui-select下拉菜单
    const uiSelectPath = [npm + "/ui-select/dist/**/*"];
    gulp.src(uiSelectPath)
        .pipe(gulp.dest('build/modules/angular/ui-select/'));

    //加载angular-sanitize ui-select 要用到的
    const angularSanitize = [npm + "/angular-sanitize/angular-sanitize.js"];
    gulp.src(angularSanitize)
        .pipe(gulp.dest('build/modules/angular/angular-sanitize/'));

    //加载angular-animate
    const angularAnimate = [npm + "/angular-animate/angular-animate.js"];
    gulp.src(angularAnimate)
        .pipe(gulp.dest('build/modules/angular/angular-animate/'));

    //加载animate.css3动画库
    const animateCss = [npm + "/animate.css/animate.css"];
    gulp.src(animateCss)
        .pipe(gulp.dest('build/modules/animate.css/'));


    //加载snap.svg
    const snapSvgPath = [bower + "/Snap.svg/dist/snap.svg-min.js"];
    gulp.src(snapSvgPath)
        .pipe(gulp.dest('build/modules/'));
});







const jsPath = __dirname + "/src/js/**/*.js";
//自己写的js
gulp.task('js', function () {
    gulp.src(jsPath)
        .pipe(sourcemaps.init())
        .pipe(concat('build.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/js'));
});


//html 合并所有html
const htmlPath = __dirname + "/src/html/**/*.html";
gulp.task('html', function () {
    gulp.src(htmlPath)
        .pipe(concat('index.html'))
        .pipe(gulp.dest('build/'));
});


//json
const jsonPath = __dirname + "/src/**/**/*.json";
gulp.task('json', function () {
    gulp.src(jsonPath)
        .pipe(gulp.dest('build/'));
});

//less
const lessPath = __dirname + "/src/less/index.less";
const lessTplPath = __dirname + "/src/less/tpl/*.less";
const lessThemePath = __dirname + "/src/less/bootstrap-theme-liaohui-anse.less";

gulp.task('less', function () {
    gulp.src([lessPath])
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('build/css'));
});


gulp.task('lessTheme', function () {
    gulp.src([lessThemePath])
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('build/css'));
});
gulp.task('lessWatch', function () {
    gulp.src([lessPath])
        .pipe(watchLess(lessPath))
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('build/css/'));
});


gulp.task('watch', ['js', 'html', 'json', 'lessWatch','lessTheme'], function () {

    gulp.watch(jsPath, ['js']);
    gulp.watch(htmlPath, ['html']);
    gulp.watch(jsonPath, ['json']);
    gulp.watch([lessTplPath, lessPath], ['lessWatch']); //同时监控这两个目录, 以便于 在 @import的情况下也能 感应到改变
    gulp.watch([lessThemePath], ['lessTheme']); //bootstrap 主题


});

gulp.task('build', ['js', 'html', 'json','less','lessTheme','modules']);



gulp.task('clean', function () {
    return gulp.src(__dirname + "/build", {read: false})
        .pipe(clean());
});

gulp.task('default', ['watch']);

