import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/BlogView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import BlogView from "../views/BlogView.vue";
import BlogDetailsView from "../views/BlogDetailsView.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: 'Home', component: Home },
  { path: "/projects", name: 'Project', component: ProjectsView },
  { path: "/blog", name: 'Blog', component: BlogView },
  { path: "/blog-details/:id", name: 'Blog Details', component: BlogDetailsView },
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0, behavior: "smooth" }
  }
});

export default router;
