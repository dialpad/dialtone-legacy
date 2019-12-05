//
//  @  SETTINGS
//     Turn different build features on/off
//  ------------------------------------------------------------
var settings = {
    clean: true,        // Turn on/off clean tasks
    scripts: false,     // Turn on/off script tasks
    styles: true,       // Turn on/off style tasks
    svgs: true,         // Turn on/off SVG tasks
    sync: true,         // Turn on/off sync tasks
    build: true,        // Turn on/off build tasks
    watch: true         // Turn on/off watch tasks
};

//  @  PACKAGES
//     What makes everything go
//  ------------------------------------------------------------
//  @@ GENERAL
var {gulp, src, dest, watch, series, parallel} = require('gulp');
var fs = require('fs');
var del = require('del');
var lazypipe = require('lazypipe');
var rename = require('gulp-rename');
var header = require('gulp-header');
var browsersync = require('browser-sync').create();
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

//  @@ BUILD
var cp = settings.build ? require('child_process') : null;


//  @  PATHS
//     Where everything is in this project
//  ------------------------------------------------------------
var paths = {
    versionFile: './docs/_includes/version.html',
    clean: {
        lib: './lib/dist/**/*',
        docs: './docs/_site/**/*',
        docsCache: './docs/.jekyll-cache/**/*'
    },
    scripts: {
        input: './lib/build/js/',
        output: './lib/dist/js/'
    },
    styles: {
        inputLib: './lib/build/less/dialtone.less',
        outputLib: './lib/dist/css/',
        inputDocs: './docs/assets/less/*.less',
        outputDocs: './docs/assets/css/'
    },
    svgs: {
        input: './lib/build/svg/**/*.svg',
        outputLib: './lib/dist/svg/',
        outputDocs: './docs/_includes/svg/',
        outputVue: './lib/dist/vue/icons/'
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

//  @  BANNER
//     This is inserted into all non-compiled files.
//  ------------------------------------------------------------
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

//  @  TASKS
//  ------------------------------------------------------------
//  -- Remove pre-existing content from output folders
var cleanDist = function(done) {
    // Make sure the feature is active before running
    if(!settings.clean) return done();

    // Clean dist folders
    del.sync([
        paths.clean.lib,
        paths.clean.docs,
        paths.clean.docsCache
    ]);

    // Signal completion
    return done();
};

//  --  JS tasks
// var jsTasks = lazypipe();

//  --  Lint, minify, and concatenate style files
var libStyles = function (done) {

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

//  --  Lint, minify, and concatenate style files
var docStyles = function (done) {

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

//  --  Lint and optimize SVG files
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

//  --  Build the documentation website
var buildDocs = function(done) {

    //  Make sure this feature is activated before running
    if (!settings.build) return done();

    //  Build Jekyll
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

//  --  Start the server
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

//  --  Reload the browser when files change
var reloadBrowser = function(done) {

    //  Make sure this feature is activated before running
    if (!settings.watch) return done();

    //  Reload the browser
    browsersync.reload();
    done();
};

//  --  Watch for changes
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

//  @  EXPORT TASKS
//  ------------------------------------------------------------
//  --  DEFAULT TASK
exports.default = series(
    cleanDist,
    parallel(
        libStyles,
        docStyles,
        buildSVGs,
        updateVersion,
    ),
    buildDocs
);

exports.watch = series(
    exports.default,
    startServer,
    watchFiles
);
