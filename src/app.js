import Vue from 'vue'
import VueRouter from 'vue-router'
import VueOnsen from 'vue-onsenui'
import BootstrapVue from 'bootstrap-vue'
import router from './router'
import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter)
Vue.use(VueOnsen)
Vue.use(BootstrapVue)

require('./bootstrap')

window.app = new Vue({
  el: '#app',
  router,
  data: {
    openSide: false
  },
  methods: {
    isActiveMenu (path) {
      return window.location.pathname === path
    }
  }
})
