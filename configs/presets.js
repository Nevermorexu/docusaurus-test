/**
 * 预设
 * 
 * 下面的 'classic', 相当于 '@docusaurus/preset-classic' 这插件
 * 
 * docs 使用的是 '@docusaurus/plugin-content-docs'
 * docs 配置说明：https://docusaurus.io/zh-CN/docs/api/plugins/@docusaurus/plugin-content-docs#configuration
 * 
 * blog 使用的是 '@docusaurus/plugin-content-blog'
 * blog 配置说明：https://docusaurus.io/zh-CN/docs/api/plugins/@docusaurus/plugin-content-blog#configuration
 * 
 * 如果已经安装了 @docusaurus/preset-classic 插件，
 * 则不需要 '@docusaurus/plugin-content-docs' 和 '@docusaurus/plugin-content-blog'
 * 
 * 在 预设中 配置 docs 和 blog 即可
 * 
 *  
*/

module.exports = [
  [
    'classic', ({
      docs: {
        sidebarPath: require.resolve('./sidebars.js'),
        routeBasePath: '/' // 默认：'docs', 站点文档部分的 URL 前缀,不要包含末尾斜杠,如果要部署没有基础路径的文档，请使用 /
      },
      blog: {
        // 显示 阅读时间
        showReadingTime: true,
      },
      theme: {
        customCss: require.resolve('../src/css/custom.css'),
      },
    })
  ]
]