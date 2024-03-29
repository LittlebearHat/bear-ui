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
          link: '/examples/button/'
        },
        {
          text: 'Icon 图标',
          link: '/examples/icon'
        },
        {
          text: 'Input 输入',
          link:'/examples/input'
        }
      ]
    },
    {
      text: '布局组件',
      items: [
        {
          text: 'Switch 开关',
          link: '/examples/switch'
        },
        {
          text: 'Calendar 日历',
          link:'examples/calendar'
        }
      ]
    },
    {
      text: '导航组件',
      items: [
        {
          text: 'Menu 菜单',
          link: '/examples/menu'
        },
        {
          text: 'Dropdown 下拉菜单',
          link: '/examples/dropdown'
        },
        {
          text: 'Pagination 分页',
          link: '/examples/pagination'
        }
      ]
    },
    {
      text: '数据录入组件',
      items: [
        {
          text: 'Form 表单',
          link: '/examples/form'
        },
        {
          text: 'Upload 上传',
          link: '/examples/upload'
        },
        {
          text: 'Progress 进度条',
          link: '/examples/progress'
        }
      ]
    },
    {
      text: '数据展示组件',
      items: [
        {
          text: 'Avatar 头像',
          link: '/examples/avatar'
        },
        {
          text: 'Tree 树组件',
          link: '/examples/tree/'
        }
      ]
    },
    {
      text: '反馈组件',
      items: [
        {
          text: 'Drawer 抽屉',
          link: '/examples/drawer'
        },
        {
          text: 'Modal 对话框',
          link: '/examples/modal'
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
          text: '测试中'
        }
      ]
    }
  ]
}
