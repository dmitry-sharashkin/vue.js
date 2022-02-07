<template>
  <div v-show="posts?.length > 0">
    <h3>users list</h3>
    <transition-group name="post-list">
      <post-item
        @remove="$emit('remove', post)"
        v-for="post in posts"
        :key="post.id"
        :post="post"
      />
    </transition-group>
  </div>
  <h2 style="color: red; font-size: 3rem" v-show="posts?.length === 0">
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
<style scoped>
.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.3s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.post-list-move {
  transition: transform 0.3s ease-out;
}
</style>
