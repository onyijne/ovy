import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: () => import('../views/HomePage.vue'), name: 'home' },
  { path: '/login', component: () => import('../views/LoginPage.vue'), name: 'login' },
  { path: '/contact', component: () => import('../views/ContactPage.vue'), name: 'contact' },
  { path: '/about', component: () => import('../views/AboutPage.vue'), name: 'about' },
];

export default new VueRouter({
  mode: 'history',
  routes,
});
