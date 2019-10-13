import Vue from 'vue'
import App from './App.vue'

import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    mouse: {
      x: 0,
      y: 0
    }
  },
  mutations: {
    setMouseX (state, { value }) {
      state.mouse.x = value
    },
    setMouseY (state, { value}) {
      state.mouse.y = value
    }
  }
})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
