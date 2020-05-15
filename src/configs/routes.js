import VueRouter from 'vue-router';


const routes = [{
        path: '/',
        component: () =>
            import ("@/screens/dashboard")
    }, {
        path: '/max-peoples',
        component: () =>
            import ("@/covid_tools/max_peoples/max_peoples")
    },
    {
        path: '/news',
        component: () =>
            import ("@/covid_tools/news/news")
    }
    // { path: '/bar', component: Bar }
]


const router = new VueRouter({
    routes // short for `routes: routes`
})


export default router;