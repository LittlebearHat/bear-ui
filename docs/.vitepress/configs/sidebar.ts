export default {
  '/guide/': getGuideSidebar(),
  '/examples/': getExampleSidebar()
}

function getExampleSidebar() {
  return [
    {
      text: '通用组件',
      items: [
        {
          text: 'Button 按钮',
          link: '/examples/button'
        },
        {
          text: 'Icon 图标',
          link: '/examples/icon'
        },
        {
          text: 'Tree 树组件',
          link: '/examples/tree'
        }
      ]
    },
    {
      text: '布局组件',
      items: [
        {
          text: '111'
        }
      ]
    },
    {
      text: '导航组件',
      items: [
        {
          text: '111'
        }
      ]
    },
    {
      text: '数据录入组件',
      items: [
        {
          text: '111'
        }
      ]
    },
    {
      text: '数据展示组件',
      items: [
        {
          text: '111'
        }
      ]
    },
    {
      text: '反馈组件',
      items: [
        {
          text: '111'
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
