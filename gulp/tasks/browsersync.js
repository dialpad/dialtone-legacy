var gulp = require('gulp');
var browsersync = require('browser-sync');
var config = require('../config').browsersync;

//  Run the build task and start the server with browserSync
gulp.task('browsersync', ['build'], function() {
    browsersync(config);
});
