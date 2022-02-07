<template>
  <div>
    <h1>Posts List:</h1>

    <my-input v-focus placeholder="Saerch..." v-model="searchQuery" />
    <div class="app__buttons">
      <my-button @click="showDialog">Create Post</my-button>
      <my-select :options="sortOptions" v-model="selectedSort" />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>
    <!-- <div class="page__wrapper">
      <button
        :class="{
          'page__select-page_current': page === pageNumber,
        }"
        class="page__select-page"
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        @click="() => pageChange(pageNumber)"
      >
        {{ pageNumber }}
      </button>
    </div> -->
    <post-list
      @remove="removePost"
      :posts="sortedAndSearched"
      v-if="!isPostLoading"
    />

    <div v-intersection="loadMorePosts" class="observer"></div>
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
      page: 1,
      limit: 10,
      totalPages: 0,
      dialogVisible: false,
      modificatorValue: "",
      isPostLoading: false,
      selectedSort: "",
      searchQuery: "",
      sortOptions: [
        { value: "title", name: "по названию" },
        { value: "body", name: "по содержанию" },
      ],
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
    // pageChange(pageNumber) {
    //   this.page = pageNumber;
    // },
    async fetchPosts() {
      try {
        this.isPostLoading = true;
        setTimeout(async () => {
          const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts",
            {
              params: {
                _page: this.page,
                _limit: this.limit,
              },
            }
          );

          this.posts = response.data;

          this.totalPages = Math.ceil(
            response.headers["x-total-count"] / this.limit
          );
          console.log(this.totalPages);
          this.isPostLoading = false;
        }, 300);
      } catch (error) {
        alert(error);
        console.error(error);
      }
    },

    async loadMorePosts() {
      this.page += 1;
      try {
        setTimeout(async () => {
          const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts",
            {
              params: {
                _page: this.page,
                _limit: this.limit,
              },
            }
          );

          this.posts = [...this.posts, ...response.data];

          this.totalPages = Math.ceil(
            response.headers["x-total-count"] / this.limit
          );
          console.log(this.totalPages);
        }, 300);
      } catch (error) {
        alert(error);
        console.error(error);
      }
    },
  },
  mounted() {
    this.fetchPosts();
    //  console.log(this.$refs.observer);
    //  const options = {
    //    rootMargin: "0px",
    //    threshhold: 1.0,
    //  };
    //  const callback = (entries, observer) => {
    //    if (entries[0].isIntersecting && this.page < this.totalPages) {
    //      this.loadMorePosts();
    //    }
    //  };
    //  const observer = new IntersectionObserver(callback, options);
    //  observer.observe(this.$refs.observer);
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => {
        return post1[this.selectedSort]?.localeCompare(
          post2[this.selectedSort]
        );
      });
    },
    sortedAndSearched() {
      return this.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  watch: {
    // page() {
    //   this.fetchPosts();
    // },
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
