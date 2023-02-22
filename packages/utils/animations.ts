interface IAnimation {
  scale:string
  // 这样声明使用 transform[key] 形式时不会报错
  [translate: string]: string
  rotate:string
}
export const animations:IAnimation = {
  scale: 'Scale',
  translate: 'Translate',
  rotate: 'Rotate'
}