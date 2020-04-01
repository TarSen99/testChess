import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import LayoutPlugin from '@/plugins/layout_plugin.js'
import routes from '@/router/index.js'

Vue.use(VueRouter)
Vue.use(LayoutPlugin)

Vue.config.productionTip = false


const router = new VueRouter({
  mode: 'history',
  routes // сокращённая запись для `routes: routes`
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
