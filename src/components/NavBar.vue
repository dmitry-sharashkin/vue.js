<template>
  <div class="nav-bar">
    <my-button @click="$router.push('/')">Vue3</my-button>
    <div>
      <router-link class="nav-link" to="/">Main</router-link>
      <router-link class="nav-link" to="/posts">Posts</router-link>
      <router-link class="nav-link" to="/about">About</router-link>
      <router-link class="nav-link" to="/store">Store</router-link>
    </div>
  </div>
</template>

<script>
import MyButton from "./UI/MyButton.vue";
export default {
  components: { MyButton },
  setup() {},
};
</script>
<style scoped>
.nav-bar button {
  margin: 0;
  background-color: #fff;
  color: blueviolet;
}
.nav-bar {
  background-color: blueviolet;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav-link {
  margin-right: 2rem;
  color: #fff;
}
</style>
