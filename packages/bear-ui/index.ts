import installer from './defaults'
export * from '@bear-ui/components'
export * from '@bear-ui/hooks'
export * from './make-installer'

export const install = installer.install

export default installer

export { default as dayjs } from 'dayjs'
