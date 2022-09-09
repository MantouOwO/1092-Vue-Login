<template>
  <div id="login" class="box has-text-centered" data-width="30rem">
    <h1 class="title">User</h1>
     Name: {{username}}
      
  </div>
</template>

<script>

export default {
  name: "UserName",
  data () {
      return {
        username: localStorage.getItem("username"),
      }
    },
};
</script>

<style scoped>
#cart {
  height: 100%;
  padding: 30px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.cart-empty-text {
  padding: 10px 0;
}

.cart--header {
  border-bottom: 1px solid #e8e8e8;
  padding-bottom: 15px;
}

.cart-item {
  padding: 10px 0;
}

.cart-details {
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  padding: 15px;
}

.cart-remove-all--text {
  cursor: pointer;
}

.cart-remove-all--text .fa {
  padding-right: 5px;
}
</style>
