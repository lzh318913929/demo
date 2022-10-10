import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import defaultRoutes from './defaultRoutes/index'
const routes: Array<RouteRecordRaw> = defaultRoutes
const router = createRouter({
  history: createWebHistory(), // createWebHistory
  routes: routes
})
router.beforeEach((to, from, next) => {
  let userInfo = localStorage.getItem('user');
  if (to.path === "/login") {
    next();
  } else {
    if (userInfo) {
      next();
    } else {
      next({
        path: '/login'
      });
    }
  }
});
export default router