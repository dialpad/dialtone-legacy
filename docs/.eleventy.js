const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
    //  Add syntax highlighting
    eleventyConfig.addPlugin(syntaxHighlight);

    eleventyConfig.addLayoutAlias('page', 'layouts/page.html');
};
