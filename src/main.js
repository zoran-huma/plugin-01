import { createApp } from 'vue';
import App from './App.vue';
import PocButton from 'poc-button';

import 'poc-button/dist/style.css';

const app = createApp(App);

app.use(PocButton);

app.mount('#app');
