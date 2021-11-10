import axios from 'axios';

const state = {
  list: []
}

const mutations = {
  UPDATE_LIST (state, payload) {
    state.list = payload;
  }
}

const actions = {
  getList ({ commit }, token) {
    axios.get(`/api/call?token=${token}&username=${localStorage.getItem("username")}`).then((response) => {
      commit('UPDATE_LIST', response.data)
    });
  },
}

const getters = {
  list: state => state.list
}

const list = {
  state,
  mutations,
  actions,
  getters
}

export default list;