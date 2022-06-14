const { path } = require('@vuepress/utils');
const { defaultTheme } = require('vuepress');

exports.dialtoneTheme = (options) => {
    return {
        name: '@dialpad/vuepress-theme-default',
        extends: defaultTheme(options),
        layouts: {
            Layout: path.resolve(__dirname, 'layouts/Layout.vue'),
        },
        alias: {
            '@theme/Navbar.vue': path.resolve(__dirname, './components/Navbar.vue'),
            '@theme/Home.vue': path.resolve(__dirname, './components/Home.vue'),
            '@theme/Sidebar.vue': path.resolve(__dirname, './components/Sidebar.vue'),
        },
    }
};
