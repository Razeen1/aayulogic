import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    increment(state, payload) {
      state.count = state.count + payload;
    },
    decrement(state, payload) {
      state.count = state.count - payload;
    },
  },
});
export default store;
