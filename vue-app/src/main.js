import Vue from 'vue';
import axios from 'axios';
import VueOnsen from 'vue-onsenui';
import BootstrapVue from 'bootstrap-vue';
import VueSweetalert2 from 'vue-sweetalert2';
import store from './store';
import router from './router';
import HeaderCom from './components/HeaderCom.vue';
import './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

Vue.config.productionTip = false;

Vue.use(VueOnsen);
Vue.use(BootstrapVue);
Vue.use(VueSweetalert2);
Vue.prototype.$axios = axios;

require('./bootstrap');

window.app = new Vue({
  el: '#app',
  router,
  store,
  components: { HeaderCom },
  data: {
    openSide: false,
  },
  mounted() {
    this.$store.dispatch('getBrand');
  },
  methods: {
    isActiveMenu(path) {
      return window.location.pathname === path;
    },
    refreshCSRFToken(token) {
      this.$store.commit('updateCSRFToken', token);
    },
  },
});
