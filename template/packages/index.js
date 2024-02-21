/**
 * 组件开发
 */
// import Vue from "vue";

import GisTest from "./components/GisTest/index.vue";

const components = [GisTest];

function install(Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
}

export default { install };
