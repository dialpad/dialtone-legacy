'use strict';

const child = require('child_process');
const browserSync = require('browser-sync').create();

const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
const gutil = require('gulp-util');

const siteRoot = "./docs/_site";
const cssSource = "./lib/scss/**/*.scss";
const htmlSource = "./docs/**/*.html";
const dataSource = "./docs/**/*.yml";
const jsSource = "./docs/assets/js/**/*.js"
const cssDest = "./docs/assets/css/";


gulp.task('css', function() {
    return gulp.src(cssSource)
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss())
        .pipe(gulp.dest(cssDest))
        .pipe(postcss([
            cssnano()
        ]))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(cssDest))
        .pipe(browserSync.stream());
});

gulp.task('jekyll', () => {
    const jekyll = child.spawn('jekyll', [
        'build',
        '--watch',
        '--incremental',
        '--drafts',
        '--source',
        './docs',
        '--destination',
        './docs/_site',
        '--config',
        './docs/_config.yml'
    ], { stderr: "initial" }
    );
    const jekyllLogger = (buffer) => {
        buffer.toString()
            .split(/\n/)
            .forEach((message) => gutil.log('Jekyll: ' + message));
    };

    jekyll.stdout.on('data', jekyllLogger);
    jekyll.stderr.on('data', jekyllLogger);
});

gulp.task('serve', function() {
    browserSync.init({
        files: [siteRoot + '/**'],
        watch: true,
        port: 4000,
        open: false,
        server: {
            baseDir: siteRoot
        }
    });

    gulp.watch(cssSource, ['css']);
    gulp.watch(htmlSource).on('change', function() {
        gulp.task('jekyll');
    });
    gulp.watch(dataSource).on('change', function() {
        gulp.task('jekyll');
    });
});

gulp.task('default', ['css', 'jekyll', 'serve']);
