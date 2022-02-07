<template>
  <form action="" @submit.prevent>
    <h3>add post</h3>
    <my-input v-focus v-model="post.title" placeholder="title" />
    <my-input v-model="post.body" placeholder="body" />
    <my-button @click="createPost" class="btn">add post</my-button>
  </form>
</template>
<script>
import MyButton from "./UI/MyButton.vue";
import MyInput from "./UI/MyInput.vue";
export default {
  components: { MyButton, MyInput },
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        title: "",
        body: "",
      };
    },
  },
  watch: {
    post: {
      handler(newValue) {
        console.log(newValue);
      },
      deep: true,
    },
  },
};
</script>
