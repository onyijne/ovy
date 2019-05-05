import Vue from 'vue'
import VueRouter from 'vue-router'
import VueOnsen from 'vue-onsenui'
import router from './router'
import HeaderCom from './components/HeaderCom.vue'
import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'

Vue.use(VueRouter)
Vue.use(VueOnsen)

require('./bootstrap')

window.app = new Vue({
  el: '#app',
  router,
  components: { HeaderCom },
  data: {
    openSide: false
  },
  methods: {
    isActiveMenu (path) {
      return window.location.pathname === path
    }
  }
})
