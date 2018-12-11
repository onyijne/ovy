import VueRouter from 'vue-router'

import AboutPage from '../pages/AboutPage.vue'
import LoginPage from '../pages/LoginPage.vue'

let routes = [
  { path: '/about', component: AboutPage, name: 'about' },
  { path: '/login', component: LoginPage, name: 'login' }
]

let router = new VueRouter({
  mode: 'history',
  routes
})

export default router
