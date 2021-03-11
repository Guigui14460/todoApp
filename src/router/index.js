import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/about',
        name: 'about',
        component: () => (import('../views/About.vue')),
    },
    {
        path: '/signin',
        name: 'login',
        component: () => (import('../views/SignIn.vue')),
    },
    {
        path: '/signup',
        name: 'register',
        component: () => (import('../views/SignUp.vue')),
    },
    {
        path: '/api',
        name: 'api',
        component: () => (import('../views/API.vue')),
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: "/",
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
