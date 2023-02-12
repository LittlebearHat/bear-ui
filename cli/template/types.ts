export default function genTypesTemplate(name: string) {
  return `import { PropType } from 'vue'
export const ${name}Props = {

} as const
`
}
