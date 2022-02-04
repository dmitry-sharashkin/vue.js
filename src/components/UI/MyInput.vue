<template>
  <input :value="modelValue" @input="updateInput" class="input" type="text" />
</template>
<script>
export default {
  props: {
    modelValue: [String, Number],
  },
  name: "my-input",
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>
<style scoped>
.input {
  width: 100%;
  border: 1px solid rgb(180, 29, 185);
  padding: 1rem;
  margin: 1rem 0;
}
</style>
