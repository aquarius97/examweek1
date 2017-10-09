/*
 * @Author: 白若年 
 * @Date: 2017-10-09 09:01:57 
 * @Last Modified by: 白若年_aquarius
 * @Last Modified time: 2017-10-09 09:38:30
 */
var gulp = require('gulp');
var concat = require('gulp-concat'); // 合并
var cssmin = require('gulp-clean-css'); // 压缩css
var jsmin = require('gulp-uglify'); // 压缩js
var rename = require('gulp-rename'); // 重命名
var connect = require('gulp-connect'); // 启动服务器
gulp.task('jsmin', function() {
    gulp.src(['./js.js', './js1.js'])
        .pipe(jsmin())
        .pipe(gulp.dest('./js/'));
});
gulp.task('concat', function() {
    gulp.src(['./js/js.js', './js/js1.js'])
        .pipe(concat('js2.js'))
        .pipe(rename('去重.js'))
        .pipe(gulp.dest('./js/'))
});
gulp.task('cssmin', function() {
    gulp.src('./style.css')
        .pipe(cssmin())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('./css/'))
});

gulp.task('connect', function() {
    connect.server({
        port: 6660,
        livereload: true
    });
});

gulp.task('default', ['jsmin', 'concat', 'connect', 'cssmin']);