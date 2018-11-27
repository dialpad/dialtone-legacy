const child = require('child_process');
const browserSync = require('browser-sync').create();

const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const cssorder = require('postcss-ordered-values');
const utility = require('postcss-utilities');
const postcssPresentEnv = require('postcss-preset-env');
const postcssNormalize = require('postcss-normalize');
const cssnano = require('cssnano');
const gutil = require('gulp-util');

const siteRoot = "_site";
const cssSource = "**/*.scss";
const cssAppFile = "assets/scss/dialtone.scss"
const htmlSource = "*.html";
const dataSource = "*.yml";
const jsSource = "**/*.js"
const cssDest = "assets/css/";


gulp.task('css', function() {
    var plugins = [
        postcssNormalize(),
        postcssPresentEnv(),
        cssorder,
        utility,
        cssnano
    ]
    return gulp.src(cssAppFile)
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(plugins))
        .pipe(gulp.dest(cssDest))
        .pipe(browserSync.stream());
});

gulp.task('js', function() {
    return gulp.src(jsSource)
        .pipe(browserify())
        .pipe(gulp.dest("assets/dist/js/"));
})

gulp.task('css-minify', function() {

})

gulp.task('jekyll', () => {
    const jekyll = child.spawn('jekyll', ['build',
        '--watch',
        '--incremental',
        '--drafts'
    ]);
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
