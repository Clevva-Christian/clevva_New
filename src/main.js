import './assets/main.css'
import './assets/base.css'
import 'primeicons/primeicons.css'
import 'primevue/resources/themes/saga-green/theme.css';
import 'primevue/resources/primevue.min.css' /* Deprecated */

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import PrimeVue from 'primevue/config';
import App from './App.vue'
import router from './router'

import Tailwind from 'primevue/passthrough/tailwind';
import Tree from 'primevue/tree';
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import Terminal from 'primevue/terminal';
import TerminalService from 'primevue/terminalservice'
import Ripple from 'primevue/ripple';
import Button from 'primevue/button';
import Divider from 'primevue/divider';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, { ripple: false, pt: Tailwind });

app.directive('ripple', Ripple);

app.component('Tree', Tree);
app.component('Splitter', Splitter);
app.component('SplitterPanel', SplitterPanel);
app.component('Terminal', Terminal);
app.component('TerminalService', TerminalService);
app.component('Button', Button);
app.component('Divider', Divider);

app.mount('#app')
