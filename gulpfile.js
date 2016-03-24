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
});

gulp.task('watch-mocha', function() {
    gulp.run('mocha');

    // Watch files and run mocha task when changes occur
    gulp.watch(['./**/*.js', 'test/**/*.js'], ['mocha']);
});

// It tells gulp if we call 'gulp' in our command line with no parameters this task will be executed
gulp.task('default', ['watch-mocha'])
