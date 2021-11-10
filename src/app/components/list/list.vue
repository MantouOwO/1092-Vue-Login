<template>
  <div id="list" class="box has-text-centered" data-width="20rem">
    <h1 class="title">Student list</h1>
      <li v-for="data in list" :key="data">
        name : {{data.username}} login_time : {{data.time}}
      </li>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: 'list',
  props: ['last'],
  beforeCreate() {
    this.$store.dispatch('getList', localStorage.getItem("token"));
  },
  computed: {
    ...mapGetters(['list'])
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
