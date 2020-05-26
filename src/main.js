import Vue from 'vue'
import App from './App.vue'
import router from './configs/routes';
import vuetify from './plugins/vuetify';

import VueRouter from 'vue-router';

import ctext from './components/text';
import DateHelper from './helpers/date_helper';

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.component("ctext", ctext)
new Vue({
    router,
    vuetify,
    render: h => h(App),
    data() {
        return {
            DateHelper
        }
    },
    methods: {
        app() {
            return this.$children[0];
        },
        alerts() {
            return this.$children[0].$refs.alerts;
        }
    }
}).$mount('#app')