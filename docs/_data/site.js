module.exports = {
  title: "Dialtone",
  description: "The design system and resources for Dialpad and UberConference.",
  localurl: "http://localhost:4000/",
  url: "https://dialpad.design",
  baseurl: process.env.ELEVENTY_BASE_URL !== '/' ? `/${process.env.ELEVENTY_BASE_URL}/` : '/',
  branch: process.env.ELEVENTY_BASE_URL !== '/' ? process.env.ELEVENTY_BASE_URL : 'staging',
  paths: {
    css: `assets/css`,
    img: `assets/images`,
    icons: `assets/images/icons`,
    ico: `assets/images/favicons`,
    js: `assets/js`,
  }
}
