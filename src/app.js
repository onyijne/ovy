import Vue from 'vue'
import VueRouter from 'vue-router'
// import VueOnsen from 'vue-onsenui'
import router from './router'
// import 'onsenui/css/onsenui.css'
// import 'onsenui/css/onsen-css-components.css'

Vue.use(VueRouter)
// Vue.use(VueOnsen)

require('./bootstrap')

window.Vue = Vue

window.app = new Vue({
  el: '#app',
  router,
  data: {

  },
  methods: {
    isActiveMenu (path) {
      return window.location.pathname === path
    }
  }
})
