<template>
  <div class="app">
    <h1>Posts List:</h1>
    <input type="text" v-model="modificatorValue" />
    <div>
      <my-button @click="showDialog">Create Post</my-button>
    </div>
    <div>
      <my-button @click="fetchPosts">pull posts</my-button>
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>

    <post-list @remove="removePost" :posts="posts" />
  </div>
</template>

<script>
import PostForm from "@/components/form";
import PostList from "@/components/post";
import axios from "axios";

export default {
  components: {
    PostForm,
    PostList,
  },

  data() {
    return {
      posts: [],
      dialogVisible: false,
      modificatorValue: "",
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
    async fetchPosts() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );
        this.posts = response.data;
        console.log(response);
      } catch (error) {
        alert(error);
        console.error(error);
      }
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
