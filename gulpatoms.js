var paths = {

}

module.exports = {
    name: 'favicon',
    help: 'Favicon actions',
    task: function(gulp, cfg) {
        // This function receives a gulp instance and the task configuration
        // It must return a function returning a stream!
        return function () {
        const favicon = require('gulp-favicons');

        return gulp
            .src(cfg.src)
            .pipe(favicon({
                appName: cfg.name,
                appShortName: null,
                appDescription: null,
                developerName: cfg.devName,
                developerURL: 'https://dialpad.com/',
                background: cfg.bgColor,
                path: 'favicons/',
                url: 'https://dialpad.com/',
                display: 'standalone',
                orientation: 'portrait',
                scope: '/',
                start_url: '/',
                version: null,
                logging: false,
                html: '/',
                pipeHTML: false,
                replace: true,
            }))
            .pipe(gulp.dest(cfg.dest))
        }
    },
    //  Default config
    config: {
        src: paths.favicons.dp.main,
        dest: paths.favicons.output,
        name: 'Dialpad',
        devName: 'Dialpad',
        bgColor: '#FFFFFF'
    }
}
