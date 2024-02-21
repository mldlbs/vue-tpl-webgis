import Vue from 'vue'
import router from './router'

import App from './App'

import '@/assets/styles/index.scss'
import '@/assets/icons' // icon

import 'gis-web-ui/dist/style.css'
import { GisWebUi } from 'gis-web-ui'

import DevComponents from '@pkg'

Vue.use(DevComponents)
Vue.use(GisWebUi)

Vue.prototype.$Panel = GisWebUi.GisDialog

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
