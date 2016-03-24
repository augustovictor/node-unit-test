'use strict';

var
    gulp = require('gulp'),
    mocha = require('gulp-mocha'),
    gutil = require('gulp-util')
;

gulp.task('mocha', function() {
    // Tells gulp to load the following files
    return gulp.src(['test/*.js'], { read: false})
        .pipe(mocha( { reporter: 'list' } ))
        .on('error', gutil.log);
})
