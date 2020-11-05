const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
    //  Add syntax highlighting
    eleventyConfig.addPlugin(syntaxHighlight);

    eleventyConfig.addLayoutAlias('page', 'layouts/page.html');

    // Copy assets over
    eleventyConfig.addPassthroughCopy('assets/css');
    eleventyConfig.addPassthroughCopy('assets/fonts');
    eleventyConfig.addPassthroughCopy('assets/images');
    eleventyConfig.addPassthroughCopy('assets/js');

    //  Icon shortcode
    //  Re-used (with love) from Stack Overflow's Stacks. Extended for our purposes
    eleventyConfig.addLiquidShortcode("iconSystem", function(name, classes, dimension) {
        var fs = require("fs");
        var path = "_includes/icons/system/" + name + ".svg";
        var svg = fs.readFileSync(path).toString("utf-8");
        var defaultClasses = "d-svg d-svg--system";

        // If we have classes, add them
        if (classes != null) {
            svg = svg.replace(defaultClasses, defaultClasses + " " + classes);
        }

        // If we need to change the size, do that too
        if (dimension != null) {
            svg = svg.replace('viewBox="0 0 24 24"', 'viewBox="0 0 24 24" width="' + dimension + 'px"');
        }

        return svg;
    });
    eleventyConfig.addLiquidShortcode("iconBrand", function(name, classes, dimension) {
        var fs = require("fs");
        var path = "_includes/icons/brand/" + name + ".svg";
        var svg = fs.readFileSync(path).toString("utf-8");
        var defaultClasses = "d-svg__" + name;

        // If we have classes, add them
        if (classes != null) {
            svg = svg.replace(defaultClasses, defaultClasses + " " + classes);
        }

        // If we need to change the size, do that too
        if (dimension != null) {
            svg = svg.replace('viewBox="0 0 24 24"', 'viewBox="0 0' + dimension + dimension + '"');
        }

        return svg;
    });
    eleventyConfig.addLiquidShortcode("pattern", function(name, classes, dimension) {
        var fs = require("fs");
        var path = "_includes/patterns/" + name + ".svg";
        var svg = fs.readFileSync(path).toString("utf-8");
        var defaultClasses = "d-svg__" + name;

        // If we have classes, add them
        if (classes != null) {
            svg = svg.replace(defaultClasses, defaultClasses + " " + classes);
        }

        // If we need to change the size, do that too
        if (dimension != null) {
            svg = svg.replace('viewBox="0 0 24 24"', 'viewBox="0 0' + dimension + dimension + '"');
        }

        return svg;
    });


    return {
        dir: {
            css: "assets/css"
        }
    }
}
