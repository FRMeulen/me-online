/* eslint-disable prettier/prettier */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./tailwind.css";

// Import icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faHouse,
  faQuestion,
  faEnvelope,
  faCoffee,
  faArrowUpRightDots,
  faGamepad,
  faPersonWalking,
  faCode,
  faDiceFive,
  faBeer
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

library.add(faHouse, faQuestion, faEnvelope, faCoffee, faArrowUpRightDots, faGamepad, faPersonWalking, faCode, faDiceFive, faBeer);
library.add(faGithub, faLinkedin);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(store)
  .use(router)
  .mount("#app");
