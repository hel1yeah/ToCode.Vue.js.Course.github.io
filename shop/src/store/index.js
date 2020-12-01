import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({

  strict: process.env.NODE_ENV !== 'production',

  state: {
    message: "hello vuex"
  },
  mutations: {
    setMessage(state, payload){
      state.message = payload
    }
  },
  actions: {
    setMessage({ commit }, payload){
      commit('setMessage', payload)
    }
  },
  getters: {
    getMessage(store){
      return store.message;
    }
  },
})