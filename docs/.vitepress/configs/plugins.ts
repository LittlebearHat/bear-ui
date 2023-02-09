import MarkdownItContainer from 'markdown-it-container'
import MarkdownIt from 'markdown-it'
import type { Token } from 'markdown-it'

const markdown: MarkdownIt = MarkdownIt({
  breaks: true
})

/**
 * 自定义 md 插件
 *
 * @param md markdown 实例
 */
export const mdPlugin = (md: MarkdownIt) => {
  /** 使用表格插件 */

  /** 自定义 md 语法 */
  md.use(MarkdownItContainer, 'demo', {
    validate(params: string): boolean {
      return !!params.trim().match(/^demo\s*(.*)$/)
    },

    render(tokens: Token[], idx: number) {
      if (tokens[idx].nesting === 1) {
        const m: RegExpMatchArray = tokens[idx].info
          .trim()
          .match(/^demo\s*(.*)$/)
        const description: string = m && m.length > 1 ? m[1] : ''
        const content: string =
          tokens[idx + 1].type === 'fence' ? tokens[idx + 1].content : ''
        const source: string = md.utils.escapeHtml(content)

        return `<b-demo source="${source}">${encodeURIComponent(
          markdown.render(description)
        )}`
      }
      return '</b-demo>'
    }
  })
}
