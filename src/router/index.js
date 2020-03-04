import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/Index.vue'
import Singup from '../components/Singup.vue'
import Homepage from '../components/Homepage.vue'
import Conversation from '../components/Conversation.vue'
import DetailMember from '../components/DetailMember.vue'
import Messages from '../components/Messages.vue'

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
    },
    {
        path: '/Conversation',
        name: 'Conversation',
        component: Conversation
    },
    {
        path: '/DetailMember',
        name: 'DetailMember',
        component: DetailMember
    },
    {
        path: '/Messages',
        name: 'Messages',
        component: Messages
    }
]

const router = new VueRouter({
    routes
})

export default router