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
    eleventyConfig.addLiquidShortcode("icon", function(name, folder, classes, dimension) {
        var fs = require("fs");
        var path = "_includes/icons/" + folder + "/" + name + ".svg";
        var svg = fs.readFileSync(path).toString("utf-8");
        var defaultClasses = "d-svg" + name;

        // If we have classes, add them
        if (classes != null) {
            svg = svg.replace(defaultClasses, defaultClasses + " " + classes);
        }

        // If we need to change the size, do that too
        if (dimension != null) {
            svg = svg.replace('width="18" height="18"', 'width="' + dimension + '" height="' + dimension + '"');
        }

        return svg;
    });


    return {
        dir: {
            css: "assets/css"
        }
    }
}
