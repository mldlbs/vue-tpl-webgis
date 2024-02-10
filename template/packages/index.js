
/**
 * 组件开发
 */
import Vue from 'vue'

// import GisDraw from './components/GisDraw/index.vue'

const components = [
  // GisDraw
]

components.forEach(component => {
  Vue.component(component.name, component)
})

export default { ...components }
