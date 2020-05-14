import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import theme from "@/configs/theme.js"

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: theme,
        },
    },
});