import { createStore } from "vuex";

export default createStore({
  state: {
    routerViewWidth: 0,
    routerViewHeight: 0,
  },
  getters: {
    width: (state) => {
      return state.routerViewWidth;
    },
    height: (state) => {
      return state.routerViewHeight;
    },
  },
  mutations: {
    updateWidth(state, width) {
      state.routerViewWidth = width;
    },
    updateHeight(state, height) {
      state.routerViewHeight = height;
    },
  },
  actions: {},
  modules: {},
});
