// 顶部导航 navbar
// navbar 说明：https://docusaurus.io/zh-CN/docs/api/themes/configuration#navbar
// navbar.logo 说明： https://docusaurus.io/zh-CN/docs/api/themes/configuration#navbar-logo
// navbar.items 说明: https://docusaurus.io/zh-CN/docs/api/themes/configuration#navbar-items

module.exports = {
  title: '我的站点',
  logo: {
    alt: 'log',
    src: 'img/logo.svg',
  },
  hideOnScroll: false,
  style: 'dark',
  items: [
    {
      // type: 'doc',
      // docId: '/category/产品文档',
      // to: '/category/产品文档',
      position: 'left',
      sidebarId: 'product',
      label: '产品文档',
      to: '/product/page1'
    },
    { to: '/blog', label: '我的博客', position: 'left' },
    {
      type: 'dropdown',
      label: '社区',
      position: 'left',
      items: [
        {
          label: 'Facebook',
          href: 'https://www.facebook.com',
        },
        {
          type: 'doc',
          label: 'React docs',
          docId: 'mydocs/react',
        }
      ]
    },
    {
      type: 'localeDropdown',
      position: 'right',
      dropdownItemsAfter: []
    }
  ],
}