// .commitlintrc.js
/** @type {import('cz-git').UserConfig} */
module.exports = {
  rules: {
    // @see: https://commitlint.js.org/#/reference-rules
  },
  prompt: {
    alias: {
      fd: 'docs: fix typos'
    },
    messages: {
      type: '选择你要提交的类型 :',
      scope: '选择一个提交范围（可选）:',
      customScope: '请输入自定义的提交范围 :',
      subject: '填写简短精炼的变更描述 :\n',
      body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :\n',
      breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
      footerPrefixsSelect: '选择关联issue前缀（可选）:',
      customFooterPrefixs: '输入自定义issue前缀 :',
      footer: '列举关联issue (可选) 例如: #31, #I3244 :\n',
      confirmCommit: '是否提交或修改commit ?'
    },
    types: [{
        value: '特性',
        name: '特性:     新增功能',
        emoji: ':sparkles:'
      },
      {
        value: '修复',
        name: '修复:     修复缺陷',
        emoji: ':bug:'
      },
      {
        value: '文档',
        name: '文档:     文档变更',
        emoji: ':memo:'
      },
      {
        value: '格式',
        name: '格式:     代码格式（不影响功能，例如空格、分号等格式修正）',
        emoji: ':fire:'
      },
      {
        value: '重构',
        name: '重构:     代码重构（不包括 bug 修复、功能新增）',
        emoji: ':tada:'
      },
      {
        value: '性能',
        name: '性能:     性能优化',
        emoji: ':zap:'
      },
      {
        value: '测试',
        name: '测试:     添加疏漏测试或已有测试改动',
        emoji: ':test_tube:'
      },
      {
        value: '构建',
        name: '构建:     构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）',
        emoji: ':hammer:'
      },
      {
        value: '集成',
        name: '集成:     修改 CI 配置、脚本',
        emoji: ':rocket:'
      },
      {
        value: '回退',
        name: '回退:     回滚 commit',
        emoji: ':rewind:'
      },
      {
        value: '其他',
        name: '其他:     对构建过程或辅助工具和库的更改（不影响源文件、测试用例）',
        emoji: ':green_heart:'
      },
    ],
    useEmoji: true, // 表情
    emojiAlign: 'center', // 设置 Emoji 字符 的 位于头部位置 类型: "left" | "center" | "right"
    themeColorCode: '', // 字体颜色在Vscode中不可见
    scopes: [],
    allowCustomScopes: true,
    allowEmptyScopes: true,
    customScopesAlign: 'bottom',
    customScopesAlias: '以上都不是？我要自定义',
    emptyScopesAlias: '跳过',
    upperCaseSubject: false,
    markBreakingChangeMode: false,
    allowBreakingChanges: ['feat', 'fix'],
    breaklineNumber: 100,
    breaklineChar: '|',
    skipQuestions: [],
    issuePrefixs: [
      // 如果使用 gitee 作为开发管理
      {
        value: 'link',
        name: 'link:     链接 ISSUES 进行中'
      },
      {
        value: 'closed',
        name: 'closed:   标记 ISSUES 已完成'
      }
    ],
    customIssuePrefixsAlign: 'top',
    emptyIssuePrefixsAlias: '跳过',
    customIssuePrefixsAlias: '自定义前缀',
    allowCustomIssuePrefixs: true,
    allowEmptyIssuePrefixs: true,
    confirmColorize: true,
    maxHeaderLength: Infinity,
    maxSubjectLength: Infinity,
    minSubjectLength: 0,
    scopeOverrides: undefined,
    defaultBody: '',
    defaultIssues: '',
    defaultScope: '',
    defaultSubject: ''
  }
}