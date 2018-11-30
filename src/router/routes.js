import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import AdminPage from '@/pages/AdminPage.vue'
import ManagePage from '@/pages/ManagePage.vue'

Vue.use(VueRouter)

const routes = [
    {
        path : '/',
        name : 'home-page',
        component : HomePage
    },
    {
        path: '/admin',
        meta: {
            auth: {
                roles: 'admin',
                redirect: {name: 'admin'},
                forbiddenRedirect: '/admin/403'
            }
        },
        component: AdminPage
    }, {
        path: '/manage',
        meta: {auth: ['admin', 'manager']},
        component: ManagePage
    }/*, {
        path: '/account',
        meta: {auth: true},
        component: require('./Account')
    }, {
        path: '/private',
        meta: {auth: {"people": "administrator", "products": "superadmin"}},
        component: require('./Account')
    }, {
        path: '/login',
        meta: {auth: false},
        component: require('./Login')
    }, {
        path: '/contact',
        component: require('./Contact')
    }*/
]

const router = new VueRouter({
    mode : 'history',
    routes
})

export default router