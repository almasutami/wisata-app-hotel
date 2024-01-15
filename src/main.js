import { createApp } from "vue";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faSearch,
  faTag,
  faCamera,
  faInfoCircle,
  faCreditCard,
  faFilter,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

library.add(faSearch);
library.add(faTag);
library.add(faCamera);
library.add(faInfoCircle);
library.add(faFilter);
library.add(faCreditCard);
library.add(faUtensils);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
