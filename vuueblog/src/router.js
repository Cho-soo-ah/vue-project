import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home";
import List from "./components/List";
import Detail from "./components/Detail";
import Author from "./components/Author";
import Comment from "./components/Comment";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/list",
    component: List,
  },
  {
    path: "/detail/:id",
    component: Detail,
    children: [
      { path: "author", component: Author },
      { path: "comment", component: Comment },
    ],
  },

  //   404 페이지
  //   {
  //     path: "/:anything(.*)",
  //     component: 404page,
  //   },

  //   권한 체크
  //   {
  //     path: "/hello",
  //     component: HelloWorld,
  //     beforeEnter: (to, from) => {
  //       if (로그인했냐 == false) {
  //         return "/login";
  //       } else {
  //         return to.fullPath;
  //       }
  //     },
  //   },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
