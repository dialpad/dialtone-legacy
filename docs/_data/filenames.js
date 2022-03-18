module.exports = {
  dialtone: process.env.ELEVENTY_ENV === 'dev' ? 'dialtone.css' : `${process.env.ELEVENTY_BASE_URL}/dialtone.min.css`,
  dialtoneDocs: process.env.ELEVENTY_ENV === 'dev' ? 'dialtone-docs.css' : `${process.env.ELEVENTY_BASE_URL}/dialtone-docs.min.css`,
}
