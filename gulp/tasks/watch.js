var gulp = require('gulp');
var config = require('../config').watch;
var browsersync = require('browser-sync').create();
var reload = browsersync.reload;

// Start browserSync task and then watch files for changes
gulp.task('watch', function() {
    gulp.watch(config.jekyll, ['jekyll']).on("change", reload);
    gulp.watch(config.libcss, ['css']);
    gulp.watch(config.doccss, ['css']);
    gulp.watch(config.svgBuild, ['svg']);
});
