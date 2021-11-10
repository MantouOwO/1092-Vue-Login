<template>
<div v-if="$route.path !== '/login'" class="navigation-buttons">
    <button @click="logout" class="button is-pulled-left"> 
        Logout
      </button>
      <div class="is-pulled-right">
    <router-link to="/list" class="button">
      <i class="fa"></i><span>點名</span>
    </router-link>
    <router-link to="/userdata" class="button">
      <i class="fa"></i><span>Userdata</span> 
    </router-link>
  </div> 
</div>
  <div class="container">
    <div class="columns">
      <div class="column is-6 column--align-center"> 
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    logout() {
      localStorage.removeItem('username');
      localStorage.removeItem('token');
      this.$store
        .dispatch("logout")
        .then(() => { this.$router.push("/login")})
        .catch((error) => { console.log(error);}); 
    },
  },
}
</script>

<style>
html, body {
  height: 100%;
  background: #F2F6FA;
}

#app {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  width: 100%;
}

.column--align-center {
  margin: 0 auto;
}

.navigation-buttons {
  position: absolute;
  top: 5px;
  width: 99%;
  z-index: 99;
}

.navigation-buttons .button {
  margin: 0 2px;
}

.navigation-buttons .button .fa {
  padding-right: 5px;
}
</style>
