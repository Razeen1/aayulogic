import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      dialog: false,
    };
  },
  mutations: {
    changeState(state) {
      state.dialog = !state.dialog;
    },
  },
});
export default store;
