var gulp = require('gulp');
var postcss = require('gulp-postcss');
var preset = require ('postcss-preset-env');
var precess = require('precss');
var cssnano = require('cssnano');
var rename = require('gulp-rename');
var normalize = require('postcss-normalize');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var browsersync = require('browser-sync');
var sorting = require('postcss-sorting');
var sass = require('gulp-sass');
var config = require('../config').css;

function onError(err) {
    gutil.beep();
    console.log(err);
    this.emit('end');
}


gulp.task('lib-css', function() {
    browsersync.notify('Compiling Dialtone CSS...');

    return gulp.src(config.scsslib)
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss())
        .pipe(gulp.dest(config.csslib))
        .pipe(gulp.dest(config.cssdocs))
        .pipe(postcss([
            normalize({ forceImport: true }),
            cssnano()
        ]))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(config.csslib))
        .pipe(gulp.dest(config.cssdocs));
});

gulp.task('docs-css', function() {
    browsersync.notify('Compiling Dialtone Documentation CSS...');

    return gulp.src(config.scssdocs)
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss())
        .pipe(gulp.dest(config.cssdocs))
        .pipe(postcss([
            cssnano()
        ]))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(config.cssdocs));
});

gulp.task('css', ['lib-css', 'docs-css'], function() {
    browsersync.notify('Compiling Dialtone CSS...');
    browsersync.reload();
});
