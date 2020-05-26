import VueRouter from 'vue-router';
import general from './general';
import covid_tools from './covid_tools';

const routes = [{
    path: '/',
    name: general.app_name,
    component: () =>
        import ("@/screens/dashboard")
}]

covid_tools.forEach(tool => {
    routes.push({
        path: tool.link,
        name: tool.name,
        component: () =>
            import ("@/covid_tools/" + tool.id + "/" + tool.id)
    })
});


const router = new VueRouter({
    routes // short for `routes: routes`
})


export default router;