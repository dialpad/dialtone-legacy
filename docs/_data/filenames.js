module.exports = {
  dialtone: process.env.ELEVENTY_ENV === 'dev' ? 'dialtone.css' : 'dialtone.min.css',
  dialtoneDocs: process.env.ELEVENTY_ENV === 'dev' ? 'dialtone-docs.css' : 'dialtone-docs.min.css',
}
