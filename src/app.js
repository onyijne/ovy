import router from './routes.js'

require('./bootstrap');

window.Vue = require('vue');

window.app = new Vue({
    el: '#app',
    router,
    data: {

    },
    methods: {
        isActiveMenu(path) {
            return window.location.pathname == path;
        }
    }
});
