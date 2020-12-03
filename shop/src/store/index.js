import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import example from './example';

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',

  modules: {
    example,
  }
 
});