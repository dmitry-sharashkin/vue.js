import Main from "@/pages/Main";
import PostsPages from "@/pages/PostsPages";
import PostsPagesWidthStore from "@/pages/PostsPagesWidthStore";
import About from "@/pages/About";
import PostIdPage from "@/pages/PostIdPage";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: Main,
  },

  {
    path: "/about",
    component: About,
  },

  {
    path: "/posts",
    component: PostsPages,
  },

  {
    path: "/posts/:id",
    component: PostIdPage,
  },

  {
    path: "/store",
    component: PostsPagesWidthStore,
  },
];
const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});
export default router;
