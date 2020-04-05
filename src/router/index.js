import Vue from 'vue'
import VueRouter from 'vue-router'
import goods from '../components/goods/goods'
import ratings from '../components/ratings/ratings'
import seller from '../components/seller/seller'

Vue.use(VueRouter)

const routes = [
    {
        path:"/goods",
        component: goods
    },
    {
        path: "/ratings",
        component: ratings
    },
    {
        path: "/seller",
        component: seller
    },
    {
        path: "/",
        redirect: '/goods'
    }
]

var router = new VueRouter({
    routes,
    linkActiveClass:'active'
})
export default router;
