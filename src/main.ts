import { createApp } from 'vue'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { IoClose } from 'oh-vue-icons/icons'
import App from './App.vue'

addIcons(IoClose)

const app = createApp(App)
app.component('v-icon', OhVueIcon)
app.mount('#app')
