// docusaurus 配置
// https://docusaurus.io/zh-CN/docs/api/docusaurus-config

const themeConfig = require('./configs/themeConfig')
const presets = require('./configs/presets')

module.exports = {
  title: '测试博客',
  tagline: 'Dinosaurs are cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  projectName: 'docusaurus-blog',
  organizationName: 'sunsboyxu',
  i18n: {
    defaultLocale: 'zh-Hans', // en | zh-Hans
    locales: ['zh-Hans'],
  },
  presets,
  themeConfig
}
