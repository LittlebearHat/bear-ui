import { ensureDirSync, writeFileSync } from 'fs-extra'
import { resolve } from 'path'
import { lightBlue, lightGreen } from 'kolorist'
import genCoreTemplate from '../template/core'
import { WriteFileOptions } from 'fs'
import genTypesTemplate from '../template/types'
import genIndexTemplate from '../template'
export interface ComponentMeta {
  name: string
  title: string
  category: string
}
const WRITE_FILE_OPTIONS: WriteFileOptions = { encoding: 'utf-8' }

export default function createComponent(meta: ComponentMeta) {
  const { name } = meta
  const componentDir = resolve('../packages/components', name)
  console.log(componentDir)
  const compSrcDir = resolve(componentDir, 'src')
  const testDir = resolve(componentDir, '__tests__')
  ensureDirSync(compSrcDir)
  ensureDirSync(testDir)
  const coreFilePath = resolve(compSrcDir, name + '.vue')
  writeFileSync(coreFilePath, genCoreTemplate(name), WRITE_FILE_OPTIONS)
  const typesFilePath = resolve(compSrcDir, name + '.ts')
  writeFileSync(typesFilePath, genTypesTemplate(name), WRITE_FILE_OPTIONS)
  const indexFilePath = componentDir + `/index.ts`
  writeFileSync(indexFilePath, genIndexTemplate(name), WRITE_FILE_OPTIONS)
  console.log(lightGreen(`✔️ 组件${name}目录创建生成`))
  console.log(lightBlue(`✔️ 组件目录：${componentDir}`))
}
