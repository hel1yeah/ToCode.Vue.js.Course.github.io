export default {
  state: {
    message: "hello vuex",

  },
  mutations: {
    setMessage(state, payload) {
      state.message = payload;
    }
  },
  actions: {
    setMessage({ commit }, payload) {
      commit('setMessage', payload);
    },
  },
  getters: {
    getMessage(store) {
      return store.message;
    }
  },
}