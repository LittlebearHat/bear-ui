export default [
  { text: '文档', link: '/guide/', activeMatch: '^/guide/' },
  { text: '组件', link: '/components/button', activeMatch: '^/components/' },
  { text: 'API 参考', link: '/api/' },
  {
    text: '更新日志',
    link: 'https://github.com/LittlebearHat/bear-ui'
  }
]

const themeConfig = {
  lastUpdated: '最后更新时间',
  docsDir: 'docs',
  editLinks: true,
  editLinkText: '编辑此网站',
  repo: 'https://github.com/LittlebearHat/bear-ui',
  footer: {
    message: 'Released under the MIT License.',
    copyright: 'Copyright © 2023-present'
  },
  nav: [
    {
      text: '指南',
      link: '/guide/installation',
      activeMatch: '/guide/'
    },
    {
      text: '组件',
      link: '/components/Icon/index',
      activeMatch: '/components/'
    }
  ],
  sidebar: {
    '/guide/': [
      {
        text: '指南',
        items: [
          {
            text: '安装',
            link: '/guide/installation'
          },
          {
            text: '快速开始',
            link: '/guide/quieStart'
          }
        ]
      }
    ],
    '/component/': [
      {
        text: '基础组件',
        items: [
          {
            text: 'Icon',
            link: '/component/icon'
          }
        ]
      }
    ]
  }
}
