import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        membre: false,
        token: '',
        membres: '',
        channels: ''
    },
    mutations: {
        setSession(state, data) {
            state.token = data.token;
            state.membre = data.member;
        },
        setMembres(state, membres) {
            state.membres = membres
        },
        setChannels(state, channels) {
            state.channels = channels
        }
    },
    actions: {},
    modules: {}
})