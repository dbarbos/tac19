import Vue from 'vue'
import App from './App.vue'
import router from './configs/routes';
import vuetify from './plugins/vuetify';

import VueRouter from 'vue-router';

import ctext from './components/text';

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.component("ctext", ctext)
new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')