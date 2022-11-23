import { createRouter, createWebHistory } from 'vue-router';
import Loading from '../views/Loading.vue';
import GetStarted from '../views/GetStarted.vue';
import ChooseMode from '../views/ChooseMode.vue';
import Authentification from '../views/Authentification.vue';
import SignUp from '../views/SignUp.vue';
import Register from '../views/Register.vue';

const routes = [
    {
        name: 'Loading',
        path: '/loading',
        component: Loading,
    },
    {
        name: 'GetStarted',
        path: '/get-started',
        component: GetStarted,
    },
    {
        name: 'ChooseMode',
        path: '/choose-mode',
        component: ChooseMode,
    },
    {
        name: 'Authentification',
        path: '/authentification',
        component: Authentification,
    },
    {
        name: 'SignUp',
        path: '/sign-up',
        component: SignUp,
    },
    {
        name: 'Register',
        path: '/register',
        component: Register,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
