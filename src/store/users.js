export default {
  namespacced: true,
  state: {
    allUsers: [],
    test: "tst",
  },
  getters: {},
  mutations: {
    setAllUsers(state, newUsers) {
      state.allUsers = [...newUsers];
    },
  },
  actions: {},
  modules: {},
};
