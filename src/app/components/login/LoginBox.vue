<template>
  <div id="login" class="box has-text-centered" data-width="20rem">
    <h2 class="title">Login</h2>
    <form @submit.prevent="login">
      <input v-model="username" class="input" type="text" placeholder="username"/>
      <input v-model="password" class="input" type="password" placeholder="password"/>
      <button class="button is-primary" type="sumbit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
      return {
        username: '',
        password: '',
      }
    },
    methods: {
      login(){
          localStorage.setItem("username", this.username);
          localStorage.setItem("password", this.password);
          this.$store.dispatch("login").then(() => { 
          this.$router.push({ path: '/'});
        }); 
      }
    } 
  };

</script>

<style scoped> 
.box {
  padding: 30px; 
}
</style>