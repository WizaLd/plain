"use strict";
let gulp = require('gulp');
let livereload = require('gulp-livereload');


gulp.task('watch', function () {
    livereload.listen();

    gulp.watch(['./src/less/**/*.less'], function (files) {
        livereload.changed(files);
    });
});
