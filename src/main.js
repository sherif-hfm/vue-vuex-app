import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import {store} from './stores/store.js'
new Vue({
  store:store,
  render: h => h(App),
}).$mount('#app')
