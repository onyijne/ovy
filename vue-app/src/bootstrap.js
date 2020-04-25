/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Yii back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */
import Axios from 'axios';
import Vue from 'vue';
import onsenui from 'onsenui';

window.Vue = Vue;
window.axios = Axios;
window.onsenui = onsenui;

Vue.prototype.axios = Axios;
Vue.prototype.$http = Axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

const csrfToken = document.head.querySelector('meta[name="csrf-token"]');

if (csrfToken) {
  window.axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken.content;
} else {
  console.error('CSRF token not found.');
}
