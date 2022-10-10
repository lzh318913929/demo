import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteCompression({
      //生成压缩包gz
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    })
  ],
  resolve: {
    alias: {
      '/@': resolve('./src')
    }
  },
  base: './', // 打包路径
  server: {
    port: 8000, // 服务端口号
    open: true, // 服务启动时是否自动打开浏览器
    cors: true // 允许跨域
  },
  build: {
    outDir: 'dist',
    //指定目录以将生成的动态资源嵌套在下
    assetsDir: 'assets',
    //小于此阈值的导入或引用资产将作为base64 URL内联，以避免额外的http请求。设置为0完全禁用内联。
    assetsInlineLimit: 4096,
    //启用/禁用CSS代码拆分。启用后，在异步块中导入的CSS将内联到异步块本身中，并在加载块时插入。如果禁用，则整个项目中的所有CSS都将提取到一个CSS文件中。
    cssCodeSplit: true,
    //Generate production source maps.生成生产源图。
    sourcemap: false,
    //设置为时true，构建还将生成一个manifest.json文件，其中包含未哈希静态资源文件名到其哈希版本的映射，然后服务器框架可以使用该文件来呈现正确的静态资源链接。
    manifest: false,
    terserOptions: {
      //打包后移除console和注释
      compress: {
          drop_console: true,
          drop_debugger: true,
      },
    },
  },
})
