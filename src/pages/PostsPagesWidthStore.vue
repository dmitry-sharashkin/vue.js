<template>
  <div>
    <p>
      {{
        $store.state.isAuth ? "User is Authorized" : "User is not Authorized"
      }}
    </p>
    <h1>{{ $store.state.post.limit }}</h1>
    <h1>Posts List:</h1>

    <my-input
      placeholder="Saerch..."
      :modelValue="searchQuery"
      @update:model-value="setSearchQuery"
      v-focus
    />
    <div class="app__buttons">
      <my-button @click="showDialog">Create Post</my-button>
      <my-select
        :options="sortOptions"
        @update:modelValue="selectedSort"
        :modelValue="selectedSort"
      />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>
    <post-list
      @remove="removePost"
      :posts="sortedAndSearchedPosts"
      v-if="!isPostLoading"
    />

    <div v-intersection="loadMorePosts" class="observer"></div>
  </div>
</template>

<script>
import PostForm from "@/components/form";
import PostList from "@/components/post";
import MyButton from "../components/UI/MyButton.vue";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import axios from "axios";
import MyInput from "@/components/UI/MyInput";

export default {
  components: {
    PostForm,
    PostList,
    MyButton,
  },

  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    ...mapMutations({
      setPage: "post/setPage",
      setSearchQuery: "post/setSearchQuery",
      setSelectedSort: "post/setSelectedSort",
    }),

    ...mapActions({
      loadMorePosts: "post/loadMorePosts",
      fetchPosts: "post/fetchPosts",
    }),

    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
    pageChange(pageNumber) {
      this.page = pageNumber;
    },
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
      isPostsLoading: (state) => state.post.isPostsLoading,
      selectedSort: (state) => state.post.selectedSort,
      searchQuery: (state) => state.post.searchQuery,
      page: (state) => state.post.page,
      limit: (state) => state.post.limit,
      totalPages: (state) => state.post.totalPages,
      sortOptions: (state) => state.post.sortOptions,
    }),
    ...mapGetters({
      sortedPosts: "post/sortedPosts",
      sortedAndSearchedPosts: "post/sortedAndSearchedPosts",
    }),
  },
};
</script>
<style>
form {
  display: flex;
  flex-direction: column;
}

.app__buttons {
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
}
.app__buttons .btn {
  margin: 0;
}

.page__wrapper {
  margin-bottom: 1rem;
}
.page__select-page {
  min-width: 2rem;
  min-height: 2rem;
  cursor: pointer;
  margin-right: 0.5rem;
  background-color: transparent;
  border-color: blueviolet;
  font-weight: 700;
  color: rgb(29, 9, 48);
  border-radius: 4px;
}

.page__select-page_current {
  background-color: blueviolet;
  color: #fff;
}
.observer {
  height: 2rem;
  background-color: grey;
}
</style>
