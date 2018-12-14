var src = './docs';
var dev = './docs/_site';
var build = 'build';
var devAssets = './docs/assets'
var cssSource = './lib'

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
        src: './docs',
        dest: './docs/_site',
        config: './docs/_config.yml',
        baseurl: ''
    },

    css: {
        scsslib: cssSource + "/scss/dialtone.scss",
        scssdocs: devAssets + "/scss/dialtone--docs.scss",
        csslib: cssSource + "/css",
        cssdocs: devAssets + "/css"
    },

    watch: {
        jekyll: [
            '_config.yml',
            src + '/**/*.{html,md,markdown,yml,json,txt,xml}',
            '!./docs/_site/**/*.{html,md,markdown,yml,json,txt,xml}'
        ],
        libcss:  cssSource + '/scss/**/*.{scss,sass}',
        doccss:  devAssets + '/scss/**/*.{scss,sass}',
        js:      devAssets + '/js/**/*.js',
        images:  devAssets + '/images/**/*',
        fonts:   devAssets + '/fonts'
    }
};
