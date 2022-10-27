// themeConfig 主题配置
// https://docusaurus.io/zh-CN/docs/api/themes/configuration

const navbar = require('./navbar')
const footer = require('./footer')
const prism = require('./prism')
const algolia = require('./algolia')

module.exports = {
  colorMode: {
    defaultMode: 'dark',
    disableSwitch: false,
    respectPrefersColorScheme: false,
  },
  navbar,
  footer,
  prism,
  algolia
}