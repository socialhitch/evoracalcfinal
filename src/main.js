import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.config.productionTip = false


Vue.use(Vuex)

var store = new Vuex.Store({
  state:{
    history: []
  },
  mutations: {
    pushHistory (state, data) {
      state.history.push(data)
    }
  }
})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
