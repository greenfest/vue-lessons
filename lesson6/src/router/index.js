import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/BlogView.vue";
import ProjectView from "../views/ProjectView.vue";
import ProjectDetailView from "../views/ProjectDetailsView.vue";
import BlogView from "../views/BlogView.vue";
import BlogDetailsView from "../views/BlogDetailsView.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: 'Home', component: Home },
  { path: "/project", name: 'Project', component: ProjectView },
  { path: "/project-details/:id", name: 'Project Details', component: ProjectDetailView },
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
