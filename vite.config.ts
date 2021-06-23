import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import styleImport from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      libs: [{
        libraryName: 'ant-design-vue',
        esModule: true,
        ensureStyleFile: true,
        resolveStyle: (name) => {
          name = name.slice(3)
          return `ant-design-vue/es/${name}/style/index`;
        }
      }]
    })
  ],
  build: {
    
  }


  
})
