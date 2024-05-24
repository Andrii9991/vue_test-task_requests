export default {
  namespacced: true,
  state: {
    allPositions: [],
    allUsers: [],
    currentUser: {},
    positionId: "",
    name: "",
    email: "",
    phone: "",
    file: "",
  },
  getters: {
    getFile: (state) => state.file,
  },
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
    setFile(state, newFile) {
      state.file = newFile;
    },
    setCurrentUser(state) {
      state.currentUser.name = state.name;
      state.currentUser.email = state.email;
      state.currentUser.position_id = state.positionId;
      state.currentUser.phone = state.phone;
      state.currentUser.photo = state.file;
    },

    setNewUser(state) {
      state.allUsers.unshift(state.currentUser);
    },
  },

  modules: {},
};
