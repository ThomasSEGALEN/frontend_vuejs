import { createRouter, createWebHistory } from 'vue-router';
import Loading from '@/views/Loading.vue';
// import About from '@/views/About.vue';

const routes = [
    {
        name: 'Loading',
        path: '/loading',
        component: Loading,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
