var gulp = require('gulp');
var config = require('../config').watch;

// Start browserSync task and then watch files for changes
gulp.task('watch', ['browsersync'], function() {
    gulp.watch(config.jekyll, ['jekyll-rebuild']);
    gulp.watch(config.libcss, ['css']);
    gulp.watch(config.doccss, ['css']);
});
