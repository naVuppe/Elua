import {
  createRouter,
  // createWebHistory,
  createWebHashHistory,
} from "vue-router";
import Layout from "../layout/index.vue";
const routes = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/:pathMatch(.*)*",
      redirect: "/404",
    },
    {
      path: "/404",
      name: "404",
      component: () => import("./../views/404.vue"),
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("./../views/login/index.vue"),
    },
    // Index
    {
      path: "/",
      name: "Index",
      component: Layout,
      redirect: "/index",
      children: [
        {
          path: "index",
          component: () => import("./../views/index/index.vue"),
        },
      ],
    },
    // Monday
    {
      path: "/Monday",
      name: "Monday",
      component: Layout,
      redirect: "/my",
      meta: {
        title: "星期一",
        icon: "<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" data-v-ea893728=\"\"><path fill=\"currentColor\" d=\"M399.5 849.5a225 225 0 1 0 0-450 225 225 0 0 0 0 450zm0 56.25a281.25 281.25 0 1 1 0-562.5 281.25 281.25 0 0 1 0 562.5zm253.125-787.5h225q28.125 0 28.125 28.125T877.625 174.5h-225q-28.125 0-28.125-28.125t28.125-28.125z\"></path><path fill=\"currentColor\" d=\"M877.625 118.25q28.125 0 28.125 28.125v225q0 28.125-28.125 28.125T849.5 371.375v-225q0-28.125 28.125-28.125z\"></path><path fill=\"currentColor\" d=\"M604.813 458.9 565.1 419.131l292.613-292.668 39.825 39.824z\"></path></svg>",
      },
      children: [
        {
          path: "home",
          component: () => import("./../views/Monday/home/index.vue"),
          meta: {
            title: "home",
          },
        },
        {
          path: "todolist",
          component: () => import("./../views/Monday/todolist/index.vue"),
          meta: {
            title: "todolist",
          }
        },
        {
          path: "my",
          component: () => import("./../views/Monday/my/my.vue"),
          meta: {
            title: "my",
          }
        },
      ],
    },
    {
      path: "/Tuesday",
      name: "Tuesday",
      component: Layout,
      redirect: "/test1",
      children: [
        {
          path: "test1",
          component: () => import("./../views/Tuesday/test1.vue"),
        },
      ],
    },
    {
      path: "/Wednesday",
      name: "Wednesday",
      component: Layout,
      redirect: "/test1",
      children: [
        {
          path: "test1",
          component: () => import("./../views/Wednesday/test1.vue"),
        },
        {
          path: "vip",
          component: () => import("./../views/Wednesday/vip/index.vue"),
          // redirect: "",
          children: [
            {
              path: "vip1",
              component: () => import("./../views/Wednesday/vip/vip.vue"),
            },
            {
              path: "test",
              component: () => import("./../views/Wednesday/vip/test.vue"),
            }
          ]
        }
      ],
    },
    {
      path: "/Thursday",
      name: "Thursday",
      component: Layout,
      redirect: "/test1",
      children: [
        {
          path: "test1",
          component: () => import("./../views/Thursday/test1.vue"),
        },
      ],
    },
    {
      path: "/Friday",
      name: "Friday",
      component: Layout,
      redirect: "/test1",
      children: [
        {
          path: "test1",
          component: () => import("./../views/Friday/test1.vue"),
        },
      ],
    },
    {
      path: "/Saturday",
      name: "Saturday",
      component: Layout,
      redirect: "/test1",
      children: [
        {
          path: "test1",
          component: () => import("./../views/Saturday/test1.vue"),
        },
      ],
    },
    {
      path: "/Sunday",
      name: "Sunday",
      component: Layout,
      redirect: "/test1",
      children: [
        {
          path: "test1",
          component: () => import("./../views/Sunday/test1.vue"),
        },
      ],
    },
    {
      path: "/Monday",
      redirect: "/Monday/my",
    },
    {
      path: "/Tuesday",
      redirect: "/Monday/my",
    },
    {
      path: "/Wednesday",
      redirect: "/Monday/my",
    },
    {
      path: "/Thursday",
      redirect: "/Monday/my",
    },
    {
      path: "/Friday",
      redirect: "/Monday/my",
    },
    {
      path: "/Saturday",
      redirect: "/Monday/my",
    },
    {
      path: "/Sunday",
      redirect: "/Monday/my",
    },
  ],
});

export default routes;
