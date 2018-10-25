const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const cssorder = require('postcss-ordered-values');
const utility = require('postcss-utilities');
const browserSync = require('browser-sync').create();
const postcssPresentEnv = require('postcss-preset-env');

gulp.task('browserSync', function() {
    browserSync.init({
        watch: true,
        port: 8080,
        server: "./"
    });
});
gulp.task('sass', function() {
    var plugins = [
        postcssPresentEnv,
        cssorder,
        utility
    ]
    return gulp.src('assets/scss/app.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(plugins))
        .pipe(gulp.dest('assets/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('watch', ['browserSync', 'sass'], function() {
    gulp.watch('assets/scss/**/*.scss', ['sass']);
    gulp.watch('*.html', browserSync.reload);
});

gulp.task( 'default', ['watch'] );
