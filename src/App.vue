<template>
  <div class="app">
    <h1>Posts List:</h1>
    <my-button @click="showDialog">Create Post</my-button>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>

    <post-list @remove="removePost" :posts="posts" />
  </div>
</template>

<script>
import PostForm from "@/components/form";
import PostList from "@/components/post";

export default {
  components: {
    PostForm,
    PostList,
  },

  data() {
    return {
      posts: [
        { id: 0, title: "vue is amazing!", body: "Text does not matter" },
        { id: 1, title: "vue is vue!", body: "Text does not matter" },
        { id: 2, title: "vue is nice!", body: "Text does not matter" },
        { id: 3, title: "vue is intresting!", body: "Black life matter" },
        { id: 4, title: "vue is gooood!", body: "Text does not matter" },
      ],
      dialogVisible: false,
    };
  },
  methods: {
    createPost(post) {
      this.posts.unshift(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 16px;
}
form {
  display: flex;
  flex-direction: column;
}

.app {
  padding: 1.5rem;
  max-width: 900px;
  margin: 0 auto;
}
</style>
