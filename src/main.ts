/* eslint-disable prettier/prettier */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./tailwind.css";

// Import icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faHouse,
  faQuestion,
  faCoffee,
  faClipboardList,
  faArrowUpRightDots,
  faGamepad,
  faPersonWalking,
  faCode,
  faDice,
  faBeer,
  faMusic,
  faPaw,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { createPinia } from "pinia";

library.add(faHouse, faQuestion, faCoffee, faClipboardList);
library.add(faArrowUpRightDots, faGamepad, faPersonWalking, faCode, faDice, faBeer, faMusic, faPaw);
library.add(faGithub, faLinkedin);

// Add stores.
const pinia = createPinia();

createApp(App)
  .use(pinia)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
