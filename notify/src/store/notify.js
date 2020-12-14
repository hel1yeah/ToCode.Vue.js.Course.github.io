import loadMore from '../assets/js/loadMore'
export default {
  state: {
    messages: [],
    messageMain: [],
  },
  mutations: {
    setMessage(state, payload) {
      state.messages = payload;
    },
    setMessageMain(state, payload) {
      state.messageMain = payload;
    },
    loadMessages(state, payload){
      state.messageMain = [...state.messageMain, ...payload]
    }
  },
  actions: {
    setMessage({ commit }, payload) {
      commit('setMessage', payload)
    },
    setMessageMain({ commit }, payload) {
      commit('setMessageMain', payload)
    },
    loadMessages({ commit, getters }) {
      let res = getters.getMessageFilter;
      commit('loadMessages', loadMore(res))
    }
  },
  getters: {
    getMessage(state) {
      return state.messages
    },
    getMessageFilter(state) {
      return state.messages.filter(mes => {
        return mes.main === false
      })
    },
    getMessageMain(state) {
      return state.messageMain
    },
  },
}