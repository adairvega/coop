import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/Index.vue'
import Singup from '../components/Singup.vue'
import Homepage from '../components/Homepage.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/Singup',
        name: 'singup',
        component: Singup
    },
    {
        path: '/Homepage',
        name: 'homepage',
        component: Homepage
    }
]

const router = new VueRouter({
    routes
})

export default router