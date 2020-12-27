import axios from 'axios';

export const state = () => ({
  postsLoaded: []
})

export const mutations = {
  addPost(state, post) {
    state.postsLoaded.push(post)
    console.log(state.postsLoaded);
  }
}

export const actions = {
  addPost ({ commit }, post) {
    return axios.post('https://blog-nuxt-tocode-default-rtdb.firebaseio.com/posts.json', post)
      .then(res => {
        commit('addPost', {...post, id: res.data.name})
      }).catch(e => console.log(e))
  }
}