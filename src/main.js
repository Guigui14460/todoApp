import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';

import FontAwesomeIcon from './components/FontAwesomeIcon.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faTrashAlt, faEdit, faTimesCircle, faPlus,
    faArrowRight, faArrowLeft, faCheck, faTimes,
} from '@fortawesome/free-solid-svg-icons';

library.add(faTrashAlt, faEdit, faTimesCircle, faPlus,
            faEdit, faArrowRight, faArrowLeft, faCheck,
            faTimes);


createApp(App)
    .use(router)
    .use(store)
    .component("fa", FontAwesomeIcon)
    .mount('#app')
