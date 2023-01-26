export default {
  '/guide/': getGuideSidebar(),
  '/examples/': getExampleSidebar()
}

function getExampleSidebar() {
  return [
    {
      text: '组件',
      items: [
        {
          text: 'Button 按钮',
          link: '/examples/button'
        },
        {
          text: 'Icon 图标',
          link: '/examples/icon'
        }
      ]
    }
  ]
}

function getGuideSidebar() {
  return [
    {
      text: '基础',
      items: [
        {
          text: '安装',
          link: '/guide/installation'
        },
        {
          text: '快速开始',
          link: '/guide/quickstart'
        }
      ]
    },
    {
      text: '进阶',
      items: [
        {
          text: 'xx',
          link: '/xx'
        }
      ]
    }
  ]
}
