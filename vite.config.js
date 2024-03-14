import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  // alias는 파일 시스템의 경로에 별칭을 부여할 때 사용
  // 아래 코드는 @가 src 폴더를 가리키도록 한다는 의미
  // 이렇게 설정해 놓으면 프로젝트가 커졌을 때 ../를 사용하여 import 하고 싶은
  // 파일을 찾지 않고, @/components와 같이 src폴더 부터 접근 할 수 있는 것.
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
