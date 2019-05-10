import Vue from 'vue'
import router from './router'
import store from './store'
import VueOnsen from 'vue-onsenui'
import BootstrapVue from 'bootstrap-vue'
import HeaderCom from './components/HeaderCom.vue'
import './registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'

Vue.use(VueOnsen)
Vue.use(BootstrapVue)

require('./bootstrap')

Vue.config.productionTip = false

window.app = new Vue({
  el: '#app',
  router,
  store,
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
