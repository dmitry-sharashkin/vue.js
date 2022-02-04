<template>
  <div @click="hideDialog" class="dialog" v-if="show === true">
    <div @click.stop class="dialog__content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "my-dialog",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  setup() {},
  methods: {
    hideDialog() {
      this.$emit("update:show", false);
    },
  },
};
</script>
<style scoped>
.dialog {
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  display: flex;
}
.dialog__content {
  margin: auto;
  background-color: #fff;
  border-radius: 1rem;
  min-width: 35%;
  padding: 3rem;
}
</style>
