import { isNumber, isObject, isString, isStringNumber } from './types'
import { debugWarn } from './error'
const SCOPE = 'utils/style'
export function addUnit(value?: string | number, defaultUnit = 'px') {
  if (!value) return ''
  if (isNumber(value) || isStringNumber(value)) {
    return `${value}${defaultUnit}`
  } else if (isString(value)) {
    return value
  }
  debugWarn(SCOPE, '绑定值必须为number或者string')
}