var gulp = require('gulp');
var postcss = require('gulp-postcss');
var preset = require ('postcss-preset-env');
var precess = require('precss');
var cssnano = require('cssnano');
var rename = require('gulp-rename');
var gutil = require('gulp-util');
var less = require('gulp-less');
var browsersync = require('browser-sync').create();
var sorting = require('postcss-sorting');
var config = require('../config').css;
var runSequence = require('run-sequence');

gulp.task('lib-css', function() {
    browsersync.notify('Compiling Dialtone CSS...');

    return gulp.src(config.lesslib)
        .pipe(less())
        .pipe(postcss())
        .pipe(gulp.dest(config.csslib))
        .pipe(gulp.dest(config.cssdocs))
        .pipe(postcss([
            cssnano()
        ]))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(config.csslib))
        .pipe(gulp.dest(config.cssdocs));
});

gulp.task('docs-css', function() {
    browsersync.notify('Compiling Dialtone Documentation CSS...');

    return gulp.src(config.lessdocs)
        .pipe(less())
        .pipe(postcss())
        .pipe(gulp.dest(config.cssdocs))
        .pipe(postcss([
            cssnano()
        ]))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(config.cssdocs));
});

gulp.task('css', function(done) {
    browsersync.notify('Refreshing...');
    runSequence(
        ['lib-css', 'docs-css'],
        ['jekyll-rebuild'],
        done
    );
});
