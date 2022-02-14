const {path} = require('@vuepress/utils')

module.exports = {
    name: '@dialpad/vuepress-theme-default',
    extends: '@vuepress/theme-default',
    layouts: path.resolve(__dirname, 'layouts/'),
    alias: {
        '@theme/Navbar.vue': path.resolve(__dirname, './components/Navbar.vue'),
    }
}
