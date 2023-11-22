import { createWebHashHistory, createRouter } from "vue-router";

import HomeView from "./view/HomeView.vue";
import ProjectsView from "./view/ProjectsView.vue";
import AboutView from "./view/AboutView.vue";
import SingleProjectView from "./view/SingleProjectView.vue";
import NotFoundView from "./view/NotFoundView.vue";


const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/projects',
        name: 'projects',
        component: ProjectsView
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView
    },
    {
        path: '/projects/:slug',
        name: 'project',
        component: SingleProjectView
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFoundView
    }

];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export { router }