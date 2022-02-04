<template>
  <div v-show="posts.length > 0">
    <h3>users list</h3>
    <post-item
      @remove="$emit('remove', post)"
      v-for="post in posts"
      :key="post.id"
      :post="post"
    />
  </div>
  <h2 style="color: red; font-size: 3rem" v-show="posts.length === 0">
    posts not found. be first & create your
  </h2>
</template>
<script>
import PostItem from "@/components/postItem";
export default {
  components: { PostItem },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  setup() {},
};
</script>
<style scoped></style>
