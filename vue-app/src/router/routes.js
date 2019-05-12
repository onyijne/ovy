import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

var routes = [
  { path: '/', component: () => import('../views/HomePage.vue'), name: 'home' },
  { path: '/login', component: () => import('../views/LoginPage.vue'), name: 'login' },
  { path: '/contact', component: () => import('../views/ContactPage.vue'), name: 'contact' },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutPage.vue')
  }
]

export default new VueRouter({
  mode: 'history',
  routes
})
