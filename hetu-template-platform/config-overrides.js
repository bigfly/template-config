const path = require('path')
const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias,
  disableEsLint
} = require('customize-cra')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),

  addWebpackAlias({
    '@': path.resolve(__dirname, 'src')
  }),
  process.env.NODE_ENV === 'production' && disableEsLint()
)
