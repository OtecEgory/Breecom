import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'
import './registerServiceWorker'

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')