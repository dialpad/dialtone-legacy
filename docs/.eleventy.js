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

    return {
        dir: {
            css: "assets/css"
        }
    }
};
