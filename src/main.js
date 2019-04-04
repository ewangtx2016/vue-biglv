import Vue from 'vue'
import App from './App.vue'
import Biglv from './lib/index'

Vue.use(Biglv)

new Vue({
  el: '#app',
  render: h => h(App)
})
