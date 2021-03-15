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
        path: '/createTodoList',
        name: 'create',
        component: ()=> (import('../views/CreateTodo.vue')),
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
    },
    {
        path: '/register',
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
