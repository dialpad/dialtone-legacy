//
//  ================================================================================
//  @  SETTINGS
//     Turn different build features on/off
//  ================================================================================
var settings = {
    clean: true,        // Turn on/off clean tasks
    scripts: false,     // Turn on/off script tasks
    styles: true,       // Turn on/off style tasks
    svgs: true,         // Turn on/off SVG tasks
    favicons: true,     // Turn on/off Favicons tasks
    sync: true,         // Turn on/off sync tasks
    build: true,        // Turn on/off build tasks
    watch: true         // Turn on/off watch tasks
};

//  ================================================================================
//  @  PACKAGES
//     What makes everything go
//  ================================================================================
//  @@ GENERAL
var {gulp, src, dest, watch, series, parallel} = require('gulp');
var fs = require('fs');
var del = require('del');
var lazypipe = require('lazypipe');
var rename = require('gulp-rename');
var header = require('gulp-header');
var browsersync = require('browser-sync').create();
// var atoms = require('gulp-atoms')(gulp,cfg);
var package = require('./package.json');

//  @@ STYLES
var postcss = settings.styles ? require('gulp-postcss') : null;
var preset = settings.styles ? require ('postcss-preset-env') : null;
var precess = settings.styles ? require('precss') : null;
var cssnano = settings.styles ? require('cssnano') : null;
var gutil = settings.styles ? require('gulp-util') : null;
var less = settings.styles ? require('gulp-less') : null;
var sorting = settings.styles ? require('postcss-sorting') : null;
var runSequence = settings.styles ? require('run-sequence') : null;

//  @@ SVGS
var path = settings.svgs ? require('path') : null;
var svgmin = settings.svgs ? require('gulp-svgmin') : null;
var replace = settings.svgs ? require('gulp-replace') : null;
var tap = settings.svgs ? require('gulp-tap') : null;

//  @@ FAVICONS
var favicon = settings.favicons ? require('gulp-favicons') : null;

//  @@ BUILD
var cp = settings.build ? require('child_process') : null;


//  ================================================================================
//  @  PATHS
//     Where everything is in this project
//  ================================================================================
var paths = {
    versionFile: './docs/_includes/version.html',
    clean: {
        lib: './lib/dist/**/*',
        docs: './docs/_site/**/*',
        docsCache: './docs/.jekyll-cache/**/*',
        favicons: './lib/dist/favicons/**/*',
        docsFavicons: './docs/assets/images/favicons/**/*',
    },
    scripts: {
        input: './lib/build/js/',
        output: './lib/dist/js/'
    },
    styles: {
        inputLib: './lib/build/less/dialtone.less',
        outputLib: './lib/dist/css/',
        inputDocs: './docs/assets/less/*.less',
        outputDocs: './docs/assets/css/',
    },
    svgs: {
        input: './lib/build/svg/**/*.svg',
        outputLib: './lib/dist/svg/',
        outputDocs: './docs/_includes/svg/',
        outputVue: './lib/dist/vue/icons/',
        outputIOS: './lib/dist/ios/icons/'
    },
    favicons: {
        dpName: 'Dialpad',
        dpBgColor: '#FFFFFF',
        dpInput: './lib/build/favicons/dialpad/',
        dpOutput: './lib/dist/favicons/dialpad/',
        docsOutput: './docs/assets/images/favicons/',
        dp: 'main/favicon__512.png',
        dpNotify: 'main/favicon-notification__512.png',
        dpDark: 'main/favicon-dark__512.png',
        dpDarkNotify: 'main/favicon-dark-notification__512.png',
        dpBeta: 'beta/favicon-beta__512.png',
        dpBetaNotify: 'beta/favicon-beta-notification__512.png',
        dpBetaDark: 'beta/favicon-dark-beta__512.png',
        dpBetaDarkNotify: 'beta/favicon-dark-beta-notification__512.png',
        dpCsr: 'csr/favicon-csr__512.png',
        dpCsrDark: 'csr/favicon-dark-csr__512.png',
        dpStaging: 'staging/favicon-staging__512.png',
        dpStagingNotify: 'staging/favicon-staging-notification__512.png',
        dpStagingDark: 'staging/favicon-dark-staging__512.png',
        dpStagingDarkNotify: 'staging/favicon-dark-staging-notification__512.png',
    },
    mobile: {
        output: './lib/dist/ios/'
    },
    build: {
        input: './docs/',
        dest: './docs/_site/',
        config: './docs/_config.yml',
        baseurl: ''
    },
    watch: {
        lib: './lib/**/*',
        libExclude: '!./lib/dist/**/*',
        docs: './docs/**/*',
        docsExcludeSite: '!./docs/_site/**/*',
        docsExcludeCSS: '!./docs/assets/css/**/*',
        docsExcludeSVG: '!./docs/_includes/svg/**/*'
    }
}

//  ================================================================================
//  @  BANNER
//     This is inserted into all non-compiled files.
//  ================================================================================
var banner = {
    main:
        '//\n' +
        '// <%= package.name %>\n' +
        '// v<%= package.version %>\n' +
        '//\n' +
        '// <%= package.description %>\n' +
        '//\n' +
        '//\n' +
        '// ============================================================================\n'
};

//  ================================================================================
//  @   TASKS
//      Where everything happens
//  ================================================================================
//  @@  CLEAN UP
//  ================================================================================
//  --  Function to clean out folders / files
const cleanUp = (items) => {
    // Make sure the feature is active before running
    if(!settings.clean) return done();

    // Clean dist folders
    return Promise.all([
        del.sync(items)
    ]);
};

//  --  Clean out doc and library files
const cleanSite = () => {
    return cleanUp([
        paths.clean.lib,
        paths.clean.docs,
        paths.clean.docsCache
    ]);
}

//  --  Clean out Favicons
const cleanFavicons = () => {
    return cleanUp([
        paths.clean.favicons,
        paths.clean.docsFavicons
    ]);
}

//  ================================================================================
//  @@  COMPILE CSS
//      Lint, minify, and concatenate style files
//  ================================================================================
//  --  LIBRARY FILES
var libStyles = function(done) {
    //  Make sure this feature is activated before running
    if (!settings.styles) return done();

    //  Compile library files
    return src(paths.styles.inputLib)
        .pipe(less())
        .pipe(postcss())
        .pipe(dest(paths.styles.outputLib))
        .pipe(dest(paths.styles.outputDocs))
        .pipe(postcss([
            cssnano()
        ]))
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest(paths.styles.outputLib))
        .pipe(dest(paths.styles.outputDocs));
};

//  --  DOCUMENTATION FILES
var docStyles = function(done) {

    //  Make sure this feature is activated before running
    if (!settings.styles) return done();

    //  Compile documentation files
    return src(paths.styles.inputDocs)
        .pipe(less())
        .pipe(postcss())
        .pipe(dest(paths.styles.outputDocs))
        .pipe(postcss([
            cssnano()
        ]))
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest(paths.styles.outputDocs));
};

//  ================================================================================
//  @@  COMPILE SVGS
//      Lint and optimize SVG files
//  ================================================================================
var buildSVGs = function(done) {

    //  Make sure this feature is activated before running
    if (!settings.svgs) return done();

    //  Compile library files
    return src(paths.svgs.input)
        .pipe(replace(' fill="none"', ''))
        .pipe(replace(' fill="#000"', ''))
        .pipe(replace(' width="24"', ''))
        .pipe(replace(' height="24"', ''))
        .pipe(replace('<svg', function(match) {
            var name = path.parse(this.file.path).name;
            var converted = name.toLowerCase().replace(/-(.)/g, function(match,group1) {
                return group1.toUpperCase();
            });
            var title = name.replace(/\b\S/g, t => t.toUpperCase()).replace(/[-]+/g, " ");

            return match + ' aria-hidden="true" focusable="false" aria-label="' + title + '" class="d-svg d-svg--system d-svg__' + converted + '"';
        }))
        .pipe(svgmin({
            plugins: [{
                convertPathData: {
                    transformPrecision: 4,
                }
            }, {
                cleanupNumericValues: {
                    floatPrecision: 2,
                }
            }, {
                collapseGroups: true,
            }, {
                removeTitle: true,
            }, {
                removeViewBox: false,
            }, {
                removeUselessStrokeAndFill: true,
            }, {
                removeAttrs: {
                    attrs: ['xmlns']
                }
            }]
        }))
        .pipe(dest(paths.svgs.outputLib))
        .pipe(dest(paths.svgs.outputDocs))
        .pipe(replace('<svg', '<template>\n  <svg'))
        .pipe(replace('</svg>', '</svg>\n</template>'))
        .pipe(rename(function(file) {
            var converted = file.basename.replace(/\b\S/g, t => t.toUpperCase()).replace(/[-]+/g, '');

            file.basename = 'Icon' + converted;
            file.extname = '.vue';
        }))
        .pipe(dest(paths.svgs.outputVue));
};

//  ================================================================================
//  @@  FAVICONS
//  ================================================================================
//  --  Build Favicon Task
const generateFavicons = (type, input, output, docs) => {
    //  Make sure this feature is activated before running
    if (!settings.favicons) return done();

    if (type === 'dp') {
        var favInput = paths.favicons.dpInput + input;
        var favOutput = paths.favicons.dpOutput + output;
        var docOutput = paths.favicons.docsOutput + output;
    }

    if (docs === 'yes') {
        return src(favInput)
            .pipe(favicon({
                appName: 'Dialpad',
                appShortName: null,
                appDescription: null,
                developerName: 'Dialpad',
                developerURL: 'https://dialpad.com/',
                background: '#FFFFFF',
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
                icons: {
                    appleStartup: false,
                    firefox: false,
                    yandex: false
                }
            }))
            .pipe(dest(favOutput))
            .pipe(dest(docOutput));
    }
    else {
        return src(favInput)
            .pipe(favicon({
                appName: 'Dialpad',
                appShortName: null,
                appDescription: null,
                developerName: 'Dialpad',
                developerURL: 'https://dialpad.com/',
                background: '#FFFFFF',
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
                icons: {
                    appleStartup: false,
                    firefox: false,
                    yandex: false
                }
            }))
            .pipe(dest(favOutput));
    }
};

//  --  ALL THE FAVICONS TO CREATE
//  --------------------------------------------------------------------------------
//      DIALPAD
//  --------------------------------------------------------------------------------
const faviconDp = () => { return generateFavicons('dp', paths.favicons.dp, 'default/', 'yes'); }
const faviconDpNotify = () => { return generateFavicons('dp', paths.favicons.dpNotify, 'default-notify/', 'yes'); }
const faviconDpDark = () => { return generateFavicons('dp', paths.favicons.dpDark, 'dark/', 'yes'); }
const faviconDpDarkNotify = () => { return generateFavicons('dp', paths.favicons.dpDarkNotify, 'dark-notify/', 'yes'); }

//      DIALPAD BETA
//  --------------------------------------------------------------------------------
const faviconDpBeta = () => { return generateFavicons('dp', paths.favicons.dpBeta, 'beta/', 'no'); }
const faviconDpBetaNotify = () => { return generateFavicons('dp', paths.favicons.dpBetaNotify, 'beta-notify/', 'no'); }
const faviconDpBetaDark = () => { return generateFavicons('dp', paths.favicons.dpBetaDark, 'beta-dark/', 'no'); }
const faviconDpBetaDarkNotify = () => { return generateFavicons('dp', paths.favicons.dpBetaDarkNotify, 'beta-dark-notify/', 'no'); }

//      DIALPAD CSR
//  --------------------------------------------------------------------------------
const faviconDpCsr = () => { return generateFavicons('dp', paths.favicons.dpCsr, 'csr/', 'no'); }
const faviconDpCsrDark = () => { return generateFavicons('dp', paths.favicons.dpCsrDark, 'csr-dark/', 'no'); }

//      DIALPAD STAGING
//  --------------------------------------------------------------------------------
const faviconDpStaging = () => { return generateFavicons('dp', paths.favicons.dpStaging, 'staging/', 'no'); }
const faviconDpStagingNotify = () => { return generateFavicons('dp', paths.favicons.dpStagingNotify, 'staging-notify/', 'no'); }
const faviconDpStagingDark = () => { return generateFavicons('dp', paths.favicons.dpStagingDark, 'staging-dark/', 'no'); }
const faviconDpStagingDarkNotify = () => { return generateFavicons('dp', paths.favicons.dpStagingDarkNotify, 'staging-dark-notify/', 'no'); }


//  ================================================================================
//  @@  BUILD SITE
//  ================================================================================
var buildDocs = function(done) {

    //  Make sure this feature is activated before running
    if (!settings.build) return done();

    return cp
        .spawn(
            'jekyll',
            [
                'build',
                '--source=' + paths.build.input,
                '--destination=' + paths.build.dest,
                '--config=' + paths.build.config,
                '--baseurl=' + paths.build.baseurl
            ],
            { stdio: 'inherit' }
        );
    done();
};


//  ================================================================================
//  @@  START SERVER
//  ================================================================================
var startServer = function(done) {

    //  Make sure this feature is activated before running
    if (!settings.watch) return done();

    //  Start the server
    browsersync.init({
        server: {
            baseDir: paths.build.dest
        },
        open: false,
        port: 4000
    });

    //  Signal completion
    done();
};


//  ================================================================================
//  @@  RELOAD THE BROWSER
//  ================================================================================
//  --  Reload the browser when files change
var reloadBrowser = function(done) {

    //  Make sure this feature is activated before running
    if (!settings.watch) return done();

    //  Reload the browser
    browsersync.reload();
    done();
};


//  ================================================================================
//  @@  WATCH CHANGES
//  ================================================================================
var watchFiles = function(done) {

    //  Make sure this feature is activated before running
    if (!settings.watch) return done();

    //  Watch files
    watch([
        paths.watch.lib,
        paths.watch.libExclude,
        paths.watch.docs,
        paths.watch.docsExcludeSite,
        paths.watch.docsExcludeCSS,
        paths.watch.docsExcludeSVG
    ], series(exports.default, reloadBrowser));
    done();
};

var updateVersion = function(done) {
    fs.writeFileSync(paths.versionFile, 'v' + package.version);

    done();
}

//  ================================================================================
//  @   EXPORT TASKS
//  ================================================================================
//  --  BUILD OUT THE SITE BUT DON'T START THE SERVER
exports.build = series(
    cleanSite,
    parallel(
        libStyles,
        docStyles,
        buildSVGs
    ),
    buildDocs
);

//  --  BUILD SITE + START SERVER
exports.default = series(
    exports.build,
    startServer,
    watchFiles
);

//  --  UPDATES DIALTONE VERSION
exports.version = series(
    updateVersion
);

//  --  GENERATES ALL DIALPAD / UC FAVICONS
exports.favicons = series(
    cleanFavicons,
    faviconDp,
    faviconDpNotify,
    faviconDpDark,
    faviconDpDarkNotify,
    faviconDpBeta,
    faviconDpBetaNotify,
    faviconDpBetaDark,
    faviconDpBetaDarkNotify,
    faviconDpCsr,
    faviconDpCsrDark,
    faviconDpStaging,
    faviconDpStagingNotify,
    faviconDpStagingDark,
    faviconDpStagingDarkNotify,
);
