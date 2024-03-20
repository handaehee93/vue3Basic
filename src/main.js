import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// 1. 전역적으로 등록할 컴포넌트를 import 해오고
import GlobalComponent from './components/GlobalComponent.vue'


// 2. 뷰 인스턴스를 받고
const app = createApp(App)

// 3. 전역적으로 등록한다.
app.component("GlobalComponent", GlobalComponent)

// 4. 마운트 한다.
app.mount('#app')
