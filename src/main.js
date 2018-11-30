import Vue from 'vue'
import VueOnsen from 'vue-onsenui'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueAuth from '@websanova/vue-auth'
import Meta from 'vue-meta'
import App from './App.vue'
import router from './router/index.js'
import store from './store'
import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'
import 'bulma/css/bulma.min.css'

Vue.config.productionTip = false
Vue.use(VueOnsen)
Vue.use(VueAxios, axios)
Vue.use(Meta)
Vue.router = router
Vue.use(VueAuth, {
  auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
  http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
  router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
