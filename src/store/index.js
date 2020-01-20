import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        membre: false,
        token: '',
        membres: ''
    },
    mutations: {
        token(state,token){
            state.token = token;
        },
        setMembres(state,membres){
            state.membres = membres
        }
    },
    actions: {},
    modules: {}
})
