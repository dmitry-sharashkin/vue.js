<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "my-button",
  setup() {},
};
</script>
<style scoped>
.btn {
  align-self: flex-end;
  margin: 1rem 0;
  padding: 1rem 2.5rem;
  background-color: rgb(180, 29, 185);
  color: white;
  border: none;
  cursor: pointer;
  font-weight: 800;
  text-transform: uppercase;
}
</style>
