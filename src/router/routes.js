import VueRouter from 'vue-router'

let AboutPage = require('../pages/AboutPage.vue');
let LoginPage = require('../pages/LoginPage.vue');

let routes = [
    { path: '/about', component: AboutPage, name: 'about'},
    { path: '/login', component: LoginPage, name: 'login'}
];

let router = new VueRouter({
    mode: 'history',
    routes
});

export default router;
