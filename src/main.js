import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'
import router from './router.js'
import store from './store.js'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

new Vue({
  router,
  store, // inject store in all children components
  render: h => h(App)
}).$mount('#app')
