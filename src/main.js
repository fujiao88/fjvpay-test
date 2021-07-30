import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vpay from 'fjvpay'
// import vpay from './lib/vpay'
Vue.use(vpay);

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
