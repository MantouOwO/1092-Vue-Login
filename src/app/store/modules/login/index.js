import axios from "axios";

const state = { 
    token: null,
    loading: false,
};

const mutations = { 
    SET_TOKEN(state, token) {
        state.token = token; 
      },
    LOGIN_PENDING (state) { 
        state.loading = true;
      },
    LOGIN_SUCCESS (state) {
        state.loading = false; 
      },
};

const actions = { 
    login({ commit }) {
      commit('LOGIN_PENDING');
        let param = new URLSearchParams();
        param.append('username', localStorage.getItem("username"));
        param.append('password', localStorage.getItem("password"));
        return axios.post("/api/login", param).then((response) => { 
          if(response.data.success){
            localStorage.setItem("token", response.data.token);
            commit("SET_TOKEN", response.data.token);
            commit('LOGIN_SUCCESS');
            localStorage.removeItem("password");
          }
        });
      },
    logout ({ commit }) {
        return new Promise((resolve) => { 
          localStorage.removeItem("token");
          localStorage.removeItem("username");
          commit('SET_TOKEN', null);
          resolve();
        }); 
      }
};

const getters = { 
    token: (state) => state.token,
    loading: state => state.loading,
  };

const loginModule = { 
  state,
  mutations,
  actions,
  getters,
};

export default loginModule;