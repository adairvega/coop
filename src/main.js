import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'

window.axios = axios.create({
    baseURL: 'https://tools.sopress.net/iut/coop/api',
    headers: {
        'Authorization': '856c52a23b9567b2fe324c63001bc2ea5f71514f'
    }
});

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')