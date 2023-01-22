import { defineConfig } from 'vitepress'
import { demoBlockPlugin } from 'vitepress-theme-demoblock'

import nav from './configs/nav'
import sidebar from './configs/sidebar'

export default defineConfig({
  title: 'Bear-UI',
  description: '一个基于 Vue3 + Ts 的组件库',

  lastUpdated: true,
  cleanUrls: 'without-subfolders',

  base: process.env.BASE || '/bear-ui/',
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]],

  markdown: {
    headers: {
      level: [0, 0]
    },

    // options for markdown-it-anchor
    // anchor: { permalink: false },

    // options for markdown-it-toc
    // toc: { includeLevel: [1, 2] },

    // light: #f9fafb, dark: --vp-code-block-bg
    theme: { light: 'github-light', dark: 'github-dark' },

    config: (md: { use: (arg0: any, arg1: any) => void }) => {
      // 这里可以使用 markdown-it 插件，vitepress-theme-demoblock就是基于此开发的
      md.use(demoBlockPlugin, {
        cssPreprocessor: 'scss'
      })
    }
  },
  themeConfig: {
    // 启动页面丝滑滚动
    outlineTitle: 'Title',
    lastUpdatedText: 'Updated Date',
    logo: '/logo.svg',
    //smoothScroll: true,

    // 站内搜索
    // algolia: {
    //   appId: 'OJBFO0U1UZ',
    //   apiKey: '9cecf0b11944a3d158999fc74cb98818',
    //   indexName: 'bear-ui'
    // },

    nav,
    sidebar,

    editLink: {
      pattern:
        'https://github.com/LittlebearHat/bear-ui/edit/master/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/LittlebearHat/bear-ui' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present BearUI'
    }
  }
})
