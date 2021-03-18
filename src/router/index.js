import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import store from '../store/index';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        beforeEnter: (to, from, next) => {
            if(store.state.account.token){
                next();
            } else {
                next("/login");
            }
        }
    },
    {
        path: '/about',
        name: 'about',
        component: () => (import('../views/About.vue')),
    },
    {
        path: '/login',
        name: 'login',
        component: () => (import('../views/SignIn.vue')),
        beforeEnter: (to, from, next) => {
            if(store.state.account.token){
                next({next: "home"});
            } else {
                next();
            }
        }
    },
    {
        path: '/register',
        name: 'register',
        component: () => (import('../views/SignUp.vue')),
        beforeEnter: (to, from, next) => {
            if(store.state.account.token){
                next({next: "home"});
            } else {
                next();
            }
        }
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
