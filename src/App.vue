<template>
  <nav-bar></nav-bar>
  <div class="app">
    <router-view></router-view>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar";
export default {
  components: { NavBar },
  setup() {},
};
</script>
<style>
*,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 16px;
}
.app {
  padding: 1.5rem;
  max-width: 900px;
  margin: 0 auto;
}
</style>
