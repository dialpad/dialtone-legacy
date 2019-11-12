var gulp = require('gulp');
var Vinyl = require('vinyl');
var path = require('path');
var svgmin = require('gulp-svgmin');
var replace = require('gulp-replace');
var tap = require('gulp-tap');
var config = require('../config').svg;

gulp.task('svg', () => {
    return gulp.src(config.svgBuild + '/*')
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

            return match + ' aria-hidden="true" focusable="false" aria-label="' + title + '" class="d-svg d-svg__' + converted + '"';
        }))
        .pipe(svgmin({
            plugins: [{
                convertPathData: {
                    floatPrecision: 2,
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
                    attrs: ['xmlns', 'fill-rule', 'clip-rule']
                }
            }]
        }))

        .pipe(gulp.dest(config.svgCompile))
        .pipe(gulp.dest(config.svgDocs));
});
