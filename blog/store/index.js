import axios from 'axios'

export const state = () => ({
  postsLoaded: [],
  token: null
})

export const mutations = {
  setPosts (state, posts) {
    state.postsLoaded = posts
  },
  addPost (state, post) {
    state.postsLoaded.push(post)
  },
  editPost (state, postEdit) {
    const postIndex = state.postsLoaded.findIndex(post => post.id === postEdit.id)
    state.postsLoaded[postIndex] = postEdit
  },
  setToken (state, token) {
    state.token = token
  }
}

export const actions = {
  nuxtServerInit ({commit}, contex) {
    return axios.get('https://blog2-f32e2-default-rtdb.firebaseio.com/posts.json')
      .then(res => {
        const postsArray = []
        for (let key in res.data) {
          postsArray.push( { ...res.data[key], id: key } )
        }
        commit('setPosts', postsArray)
      })
      .catch(e => console.log(e))
  },

  addPost ({commit}, post) {
    // console.log(post)
    return axios.post('https://blog2-f32e2-default-rtdb.firebaseio.com/posts.json', post)
      .then(res => {
        commit('addPost', { ...post, id: res.data.name })
      })
      .catch(e => console.log(e))
  },
  addComment (comment) {
    return axios.post('https://blog2-f32e2-default-rtdb.firebaseio.com/comments.json', comment)
      .catch(e => console.log(e))
  }
}

export const getters = {
  getPostsLoaded (state) {
    return state.postsLoaded
  },
  checkAuthUser (state) {
    return state.token != null
  }
}
