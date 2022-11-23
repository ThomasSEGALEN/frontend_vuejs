import { createRouter, createWebHistory } from 'vue-router';
import Loading from '@/views/Loading.vue';
import GetStarted from '@/views/GetStarted.vue';
import ChooseMode from '@/views/ChooseMode.vue';

const routes = [
    {
        name: 'Loading',
        path: '/loading',
        component: Loading,
    },
    {
        name: 'Get Started',
        path: '/get-started',
        component: GetStarted,
    },
    {
        name: 'Choose Mode',
        path: '/choose-mode',
        component: ChooseMode,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
