var src = './docs';
var dev = './docs/_site';
var build = 'build';

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
        scsslib: './lib/scss/dialtone.scss',
        scssdocs: './docs/assets/scss/dialtone--docs.scss',
        csslib: './lib/css',
        cssdocs: './docs/assets/css'
    },

    watch: {
        jekyll: [
            '_config.yml',
            src + '/**/*.{html,md,markdown,yml,json,txt,xml}',
            '!./docs/_site/**/*'
        ],
        libcss:  './lib/scss/**/*.{scss,sass}',
        doccss:  './docs/assets/scss/**/*.{scss,sass}',
        js:      './docs/assets/js/**/*.js',
        images:  './docs/assets/images/**/*',
        fonts:   './docs/assets/fonts'
    }
};
