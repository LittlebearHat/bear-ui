/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import DefineOptions from 'unplugin-vue-define-options/vite'
import dts from 'vite-plugin-dts'
// import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    target: 'modules',
    //打包文件目录
    outDir: '../../packages',
    //压缩
    minify: false,
    //css分离
    //cssCodeSplit: true,
    rollupOptions: {
      //忽略打包vue文件
      external: ['vue'],
      input: ['index.ts'],
      output: [
        {
          format: 'es',
          //不用打包成.es.js,这里我们想把它打包成.js
          entryFileNames: '[name].js',
          //让打包目录和我们目录对应
          preserveModules: true,
          //配置打包根目录
          dir: '../bear-ui/es',
          preserveModulesRoot: '',
          sourcemap: true,
          exports: 'named' /** Disable warning for default imports */
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          //让打包目录和我们目录对应
          preserveModules: true,
          //配置打包根目录
          dir: '../bear-ui/lib',
          preserveModulesRoot: '',
          sourcemap: true,
          exports: 'named' /** Disable warning for default imports */
        }
      ]
    },
    lib: {
      entry: './index.ts'
      // formats: ['es', 'cjs']
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    DefineOptions(),
    dts({
      entryRoot: './src',
      outputDir: ['../bear-ui/es/src', '../bear-ui/lib/src'],
      //指定使用的tsconfig.json为我们整个项目根目录下,如果不配置,你也可以在components下新建tsconfig.json
      tsConfigFilePath: '../../tsconfig.json'
    })
    // dts({
    //   //指定使用的tsconfig.json为整个项目根目录下掉,
    //   tsConfigFilePath: '../../tsconfig.json'
    // }),
    // //因为这个插件默认打包到es下，让lib目录下也生成声明文件需要再配置一个
    // dts({
    //   outputDir: 'lib',
    //   tsConfigFilePath: '../../tsconfig.json'
    // })
  ],
  test: {
    globals: true,
    environment: 'happy-dom',
    transformMode: {
      web: [/.[tj]sx$/]
    }
  }
})
