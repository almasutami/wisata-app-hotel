import { createApp } from "vue";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faSearch,
  faTag,
  faTableCells,
  faInfoCircle,
  faCreditCard,
  faFilter,
  faUtensils,
  faBed,
  faVectorSquare,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import { faSquare, faCopy } from "@fortawesome/free-regular-svg-icons";

library.add(faSearch);
library.add(faTag);
library.add(faTableCells);
library.add(faInfoCircle);
library.add(faFilter);
library.add(faCreditCard);
library.add(faUtensils);
library.add(faBed);
library.add(faSquare);
library.add(faCopy);
library.add(faVectorSquare);
library.add(faEllipsis);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
