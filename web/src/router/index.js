import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AdminLogin from "@/views/AdminLogin";
import Registered from "@/views/Registered"

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    }, {
        path: '/admin-login',
        name: 'AdminLogin',
        component: AdminLogin
    }, {
        path: '/registered',
        name: 'Registered',
        component: Registered
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
