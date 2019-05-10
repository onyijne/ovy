import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import ContactPage from '../views/ContactPage.vue'
import AboutPage from '../views/AboutPage.vue'

Vue.use(VueRouter)

var routes = [
  { path: '/', component: HomePage, name: 'home' },
  { path: '/login', component: LoginPage, name: 'login' },
  { path: '/register', component: LoginPage, name: 'register' },
  { path: '/contact', component: ContactPage, name: 'contact' },
  {
    path: '/about',
    name: 'about',
    component: AboutPage
  }
]

export default new VueRouter({
  mode: 'history',
  routes
})
