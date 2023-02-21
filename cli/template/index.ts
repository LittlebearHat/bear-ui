import { upperFirst } from './utils'

export default function genIndexTemplate(name) {
  const compName = upperFirst(name)
  return `import _${compName} from './src/${name}'
import { withInstall } from '@bear-ui/utils'

const B${compName} = withInstall(_${compName})

export default B${compName}

export * from './src/${name}'

declare module 'vue' {
  export interface GlobalComponents {
    B${compName}: typeof B${compName}
  }
}
`
}
