import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  resolve: {
    alias:{
      '@':resolve(__dirname,'src')  //配置别名;
    }
  },
  server:{
    port:8888,   //端口
    open:true,   //自动打开浏览器
    proxy: {     //代理
      '/api':{
        target:'代理服务器地址',
        changeOrigin:true,
      },
      '/sever':{
        target:'代理服务器地址',
        changeOrigin:true,
      }
    }
  }
})
