/*
*  This is a gulp configuration file.
*  Author: Ziyun Wang
*  Date: Oct. 19, 2016
*/

var BUILD = "./build/";
var TEMPLATES = "../templates/";
var STATIC = "../static/"
var DEBUG = false;

var gulp = require('gulp');
var gulpIf = require('gulp-if');

// coffee-script task: compile coffee-script codes
var coffee = require('gulp-coffee');
var coffeelint = require('gulp-coffeelint');
var uglifyJS = require('gulp-uglify');
gulp.task('validate_coffee', function () {
    gulp.src('*.coffee')
         .pipe(coffeelint())
         .pipe(coffeelint.reporter());
});
gulp.task('compile_coffee', ['validate_coffee'], function() {
    gulp.src('*.coffee')
        .pipe(coffee({bare: true}))
        .pipe(gulpIf(!DEBUG, uglifyJS()))
        .pipe(gulp.dest(BUILD));
});

// less task: compile less codes
var less = require('gulp-less');
var minifyCSS = require('gulp-clean-css');
gulp.task('compile_less', function() {
    return gulp.src('*.less')
        .pipe(less())
        .pipe(gulpIf(!DEBUG, minifyCSS()))
        .pipe(gulp.dest(BUILD));
});

// copy task: copy files in ./build/ into release dirs
gulp.task('copy_html', function() {
    return gulp.src('*.html').pipe(gulp.dest(TEMPLATES));
});
gulp.task('copy_static', function() {
    return gulp.src(BUILD + '*.{css,js}').pipe(gulp.dest(STATIC));
});

// clean task: delete files in ./build
var del = require('del');
gulp.task('clean', function() {
    del(BUILD + '*');
    del(TEMPLATES + '*');
    del(STATIC + '*');
});

// default task
sequence = require('run-sequence');
gulp.task('default', function(callback) {
    sequence('clean', 'compile_coffee', 'compile_less', 'copy_html', 'copy_static', callback);
});