// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Dashboard.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@/views/dashbaord/Index.vue"),
      },
      {
        path: "quiz",
        name: "Quiz",
        component: () => import("@/views/dashbaord/Quiz.vue"),
      },
    ],
  },
  {
    path: "/auth",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "login",
        name: "LogIn",
        component: () => import("@/views/auth/LogIn.vue"),
      },
      {
        path: "signup",
        name: "SignUp",
        component: () => import("@/views/auth/SignUp.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
