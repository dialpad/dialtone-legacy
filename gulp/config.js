var src = './docs';
var dev = src + '/_site';
var build = '/build';
var dist = '/dist';
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
        lesslib: source + build + '/less/dialtone.less',
        lessdocs: assets + '/less/*.less',
        csslib: source + dist + '/css',
        cssdocs: assets + '/css',
    },

    svg: {
        svgBuild: source + build + '/svg',
        svgCompile: source + dist + '/svg',
        svgDocs: assets + '/svg',
    },

    watch: {
        jekyll: [
            '_config.yml',
            src + '/**/*.{html,md,markdown,yml,json,txt,xml,less,svg}',
            '!./docs/_site/**/*'
        ],
        libcss:  source + build + '/less/**/*.less',
        doccss:  assets + '/less/**/*.less',
        js:      assets + '/js/**/*.js',
        images:  assets + '/images/**/*.{jpg,jpeg,png,gif,bmp,svg}',
        svg:     source + build + '/svg/**/*.svg',
        fonts:   assets + '/fonts/**/*'
    }
};
