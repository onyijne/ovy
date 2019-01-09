import VueRouter from 'vue-router'

import HomePage from '../pages/HomePage.vue'
import AboutPage from '../pages/AboutPage.vue'
import LoginPage from '../pages/LoginPage.vue'
import ContactPage from '../pages/ContactPage.vue'

var routes = [
  { path: '/', component: HomePage, name: 'home' },
  { path: '/about', component: AboutPage, name: 'about' },
  { path: '/login', component: LoginPage, name: 'login' },
  { path: '/contact', component: ContactPage, name: 'contact' }
]

export default new VueRouter({
  mode: 'history',
  routes
})
