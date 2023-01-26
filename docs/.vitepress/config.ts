import { defineConfig } from 'vitepress'

import nav from './configs/nav'
import sidebar from './configs/sidebar'

export default defineConfig({
  title: 'Bear-UI',
  description: '一个基于 Vue3 + Ts 的组件库',

  base: process.env.BASE || '/bear-ui/',
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]],

  lastUpdated: true,
  cleanUrls: 'without-subfolders',
  themeConfig: {
    siteTitle: false,
    logo: '/logo.svg',
    outlineTitle: 'Title',
    lastUpdatedText: 'Updated Date',
    nav,
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/LittlebearHat/bear-ui' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present BearUI'
    }
  },
  markdown: {
    // theme: { light: 'github-light', dark: 'github-dark' }
  }
})
