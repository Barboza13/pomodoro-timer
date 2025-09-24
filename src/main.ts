import { createApp } from 'vue'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { IoClose, MdDelete } from 'oh-vue-icons/icons'
import App from './App.vue'

addIcons(IoClose, MdDelete)

const app = createApp(App)
app.component('v-icon', OhVueIcon)
app.mount('#app')
