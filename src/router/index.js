import { createRouter, createWebHistory } from "vue-router";
import HomeContent from '../components/HomeContent.vue';
import AboutContent from '../components/AboutContent.vue';
import WorkContent from '../components/WorkContent.vue';
import ProjectsContent from '../components/ProjectsContent.vue';


const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeContent
    },
    {
        path: '/about',
        name: 'About',
        component: AboutContent
    },
    {
        path: '/work',
        name: 'Work',
        component: WorkContent
    },
    {
        path: '/projects',
        name: 'Projects',
        component: ProjectsContent
    },
]


// may need to use a hash
const router = createRouter({
    history: createWebHistory(import.meta.env.Base_URL),
    routes
})

export default router