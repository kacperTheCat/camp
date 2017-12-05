import Vue from 'vue'
import App from './App.vue'

import { store } from './store.js'
new Vue({
  el: '#app',
  store, //w es6 można nie pisac store: store, wystarczy skrot
  render: h => h(App)
})
