<template>
  <div class="post">
    <div>
      <div><strong>id:</strong>{{ post.id }}</div>
      <div><strong>Название:</strong>{{ post.title }}</div>
      <div><strong>Описание:</strong>{{ post.body }}</div>
    </div>
    <div class="post__btns">
      <my-button @click="$emit('remove', post)">Delete</my-button>
      <my-button
        @click="$router.push(`/posts/${post.id}`)"
        style="background-color: green"
        >Open</my-button
      >
    </div>
  </div>
</template>
<script>
import MyButton from "./UI/MyButton.vue";
export default {
  components: { MyButton },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style scoped>
.post {
  padding: 2rem;
  border: 2px solid rgb(180, 29, 185);
  margin-top: 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
}
.post__btns {
  display: flex;
  flex-direction: column;
}
.post__btns button {
  margin: 0.5rem;
  font-size: 0.8rem;
  min-width: 9rem;
}
</style>
