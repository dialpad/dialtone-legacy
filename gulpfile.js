'use strict';

const child = require('child_process');
const browserSync = require('browser-sync').create();

const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const cssnano = require('cssnano');
const normalize = require('postcss-normalize');
const postcss = require('gulp-postcss');
const gutil = require('gulp-util');

const siteRoot = "./docs/_site";
const scssSource = "./lib/scss/**/*.scss";
const scssDocs = "./assets/scss/**/*.scss";
const htmlSource = "'!_site/**/*.html', './docs/**/*.html'";
const dataSource = "'!_site/**/*.yml', ''./docs/**/*.yml'";
const jsSource = "./docs/assets/js/**/*.js"
const cssDocs = "./docs/assets/css/";
const cssLib = "./lib/css/";
const cssSite = "./docs/_site/assets/css/";


gulp.task('lib-css', function() {
    return gulp.src("./lib/scss/dialtone.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss())
        .pipe(gulp.dest(cssLib))
        .pipe(gulp.dest(cssDocs))
        .pipe(postcss([
            normalize({ forceImport: true }),
            cssnano()
        ]))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(cssLib))
        .pipe(gulp.dest(cssDocs))
        .pipe(browserSync.stream());
});

gulp.task('docs-css', function() {
    return gulp.src("./docs/assets/scss/dialtone--docs.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss())
        .pipe(gulp.dest(cssDocs))
        .pipe(postcss([
            cssnano()
        ]))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(cssDocs))
        .pipe(browserSync.stream());
});

gulp.task('jekyll', () => {
    const jekyll = child.spawn('jekyll', [
        'serve',
        '--watch',
        '--incremental',
        '--source',
        './docs',
        '--destination',
        './docs/_site',
        '--config',
        './docs/_config.yml'
    ], { stderr: "inherit" }
    );
    const jekyllLogger = (buffer) => {
        buffer.toString()
            .split(/\n/)
            .forEach((message) => gutil.log('Jekyll: ' + message));
    };

    jekyll.stdout.on('data', jekyllLogger);
    jekyll.stderr.on('data', jekyllLogger);
});

gulp.task('jekyll-rebuild', ['jekyll'], function() {
    browserSync.reload();
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

    gulp.watch(scssSource, ['lib-css', 'docs-css']);
    gulp.watch(scssDocs, ['lib-css', 'docs-css']);
    gulp.watch(htmlSource).on('change', function() {
        gulp.task('jekyll-rebuild');
    });
    gulp.watch(dataSource).on('change', function() {
        gulp.task('jekyll-rebuild');
    });
});

gulp.task('default', ['jekyll', 'serve']);
