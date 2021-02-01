import axios from "axios";

export const state = () => ({
  postsLoaded: []
});
export const mutations = {
  setPosts(state, posts){
    state.postsLoaded = posts
  },
  addPost(state, post) {
    state.postsLoaded.push(post);
    console.log(post);
  }
};
export const actions = {
  nuxtServerInit({ commit }, context) {
    return axios
    .get("https://blog2-f32e2-default-rtdb.firebaseio.com/posts.json")
    .then(res => {
      console.log(res);
      const postsArray = [];
      for (const item in res.data) {
        if (Object.hasOwnProperty.call( res.data, item)) {
          postsArray.push({...res.data[item], id: item})
          commit('setPosts', postsArray)
          console.log(postsArray);
        }
      }
      // commit("addPost", { ...post, id: res.data.name });
    })
    .catch(e => console.log(e));
  },
  addPost({ commit }, post) {
    return axios
      .post("https://blog2-f32e2-default-rtdb.firebaseio.com/posts.json", post)
      .then(res => {
        commit("addPost", { ...post, id: res.data.name });
      })
      .catch(e => console.log(e));
  }
};
export const getters = {
  getPostsLoaded(state){
    return state.postsLoaded
  }
};
