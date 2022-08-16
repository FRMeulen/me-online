/* eslint-disable prettier/prettier */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './tailwind.css';

// Import icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faHouse,
  faQuestion,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

library.add(faHouse, faQuestion, faEnvelope);

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(store)
  .use(router)
  .mount('#app');
