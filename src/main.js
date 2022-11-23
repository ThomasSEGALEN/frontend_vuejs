import { createApp } from 'vue';
import App from './App.vue';
import ButtonComponent from './components/ButtonComponent.vue';
import InputComponent from './components/InputComponent.vue';

import router from './router/index';

import './assets/main.css';

const app = createApp(App);
app.component('ButtonComponent', ButtonComponent);
app.component('InputComponent', InputComponent);
app.use(router);
app.mount('#app');
