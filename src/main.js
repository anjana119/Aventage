import Vue from 'vue'
import { BootstrapVue, IconsPlugin, LayoutPlugin, BContainer } from 'bootstrap-vue'

import App from './App.vue'
import router from './router'
// import store from "./store";

// VueIziToast
import VueIziToast from 'vue-izitoast'
import 'izitoast/dist/css/iziToast.css'

// Bootstrap and BootstrapVue css files
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// boostrap grid system
Vue.use(LayoutPlugin)
Vue.component('b-container', BContainer)

Vue.use(VueIziToast)

Vue.config.productionTip = false

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
