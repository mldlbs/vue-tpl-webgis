import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
  base: process.env.BASE_URL,
  mode: 'history',
  routes:
    [
      {
        name: '',
        path: '/',
        component: () => import(/* webpackChunkName: 'chunk-common' */ '@/views')
      }
    ]
})
