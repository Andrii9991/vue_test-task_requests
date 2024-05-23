export default {
  namespacced: true,
  state: {
    allPositions: [],
    allUsers: [],
    positionId: "",
    name: "",
    email: "",
    phone: "",
    user: {},
  },
  getters: {},
  mutations: {
    setAllUsers(state, newUsers) {
      state.allUsers = [...newUsers];
    },

    setAllPositions(state, newPositions) {
      state.allPositions = [...newPositions];
    },
    setName(state, newName) {
      state.name = newName;
    },
    setEmail(state, newEmail) {
      state.email = newEmail;
    },
    setPhone(state, newPhone) {
      state.phone = newPhone;
    },
    setPositionId(state, newPositionId) {
      state.positionId = newPositionId;
    },
  },
  actions: {},
  modules: {},
};
