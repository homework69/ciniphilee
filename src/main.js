import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { routers } from '@/router'
import './assets/style/main.scss'
import VueLazyload from 'vue-lazyload'
import App from './App.vue'

// Делаем компонент глобальным
import BtnMore from '@/components/UI/BtnMore.vue'
import Loader from '@/components/UI/Loader.vue'
import Actor from '@/components/UI/Actor.vue'
import errorimage from '@/assets/img/nophoto.png'
// Подключаем иконки
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas,far,fab)

const app = createApp(App)
const pinia = createPinia()



app.use(VueLazyload, {
    error: errorimage,
})

app.use(routers)
app.use(pinia)
app.component('BtnMore', BtnMore)
app.component('Loader', Loader)
app.component('Actor', Actor)
app.component('fa', FontAwesomeIcon)

app.mount('#app')




