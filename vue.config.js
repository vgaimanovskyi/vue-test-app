module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-test-app/'
    : '/',
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Test app',
    },
  }
}