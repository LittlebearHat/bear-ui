export interface AnchorOptions {
  level?: number | number[]

  slugify?(str: string): string
  getTokensText?(tokens: Token[]): string

  uniqueSlugStartIndex?: number
  permalink?: PermalinkGenerator

  callback?(token: Token, anchor_info: AnchorInfo): void

  tabIndex?: number | false
}
