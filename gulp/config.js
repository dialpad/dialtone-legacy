var src = './docs';
var dev = src + '/_site';
var build = 'build';
var source = './lib';
var assets = src + '/assets';

module.exports = {
    browsersync: {
        server: {
            baseDir: dev
        },
        open: false,
        port: 4000,
        watch: false
    },

    jekyll: {
        src: src,
        dest: dev,
        config: src + '/_config.yml',
        baseurl: ''
    },

    css: {
        lesslib: source + '/less/dialtone.less',
        lessdocs: assets + '/less/*.less',
        csslib: source + '/css',
        cssdocs: assets + '/css',
    },

    watch: {
        jekyll: [
            '_config.yml',
            src + '/**/*.{html,md,markdown,yml,json,txt,xml}',
            '!./docs/_site/**/*'
        ],
        libcss:  source + '/less/**/*.{less}',
        doccss:  assets + '/less/**/*.{less}',
        js:      assets + '/js/**/*.js',
        images:  assets + '/images/**/*',
        fonts:   assets + '/fonts'
    }
};
