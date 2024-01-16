import { createApp } from "vue";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faSearch,
  faCreditCard,
  faFilter,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import "@mdi/font/css/materialdesignicons.min.css";

library.add(faSearch);
library.add(faFilter);
library.add(faCreditCard);
library.add(faUtensils);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
