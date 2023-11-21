import { createWebHashHistory, createRouter } from "vue-router";

import HomeView from "./view/HomeView.vue";
import ProjectsView from "./view/ProjectsView.vue";
import AboutView from "./view/AboutView.vue";
import SingleProjectView from "./view/SingleProjectView.vue";


const routes = [
    { path: '/', component: HomeView },
    { path: '/projects', component: ProjectsView },
    { path: '/about', component: AboutView },
    {
        path: '/projects/:slug',
        name: 'project',
        component: SingleProjectView
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export { router }