var src = './docs';
var dev = src + '/_site';
var build = 'build';
var source = './lib';
var assets = src + '/assets';

module.exports = {
    browsersync: {
        server: {
            baseDir: [dev, build, src]
        },
        open: false,
        port: 4000,
        watch: false,
        reloadDelay: 1500
    },

    jekyll: {
        src: src,
        dest: dev,
        config: src + '/_config.yml',
        baseurl: ''
    },

    css: {
        scsslib: source + '/scss/dialtone.scss',
        scssdocs: assets + '/scss/dialtone--docs.scss',
        csslib: source + '/css',
        siteLib: dev + '/assets/css',
        cssdocs: assets + '/css',
        siteDocs: dev + '/assets/css',
    },

    watch: {
        jekyll: [
            '_config.yml',
            src + '/**/*.{html,md,markdown,yml,json,txt,xml}',
            '!./docs/_site/**/*'
        ],
        libcss:  source + '/scss/**/*.{scss,sass}',
        doccss:  assets + '/scss/**/*.{scss,sass}',
        js:      assets + '/js/**/*.js',
        images:  assets + '/images/**/*',
        fonts:   assets + '/fonts'
    }
};
