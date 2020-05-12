import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('../components/Home.vue')
const User = () => import('../components/User.vue')

const routes = [
    {
        path: '/home/:id',
        component: Home,
        name: 'home'
    },
    {
        path: '/user',
        component: User,
        beforeEnter: function (to, from, next) {
            console.log("我是user的路由独享守卫")
            next()
        }
    }
]

const router = new VueRouter({
    routes,
    mode: 'history',

})

router.beforeEach((to, from, next) => {
    // setTimeout(() => console.log('我是全局前置钩子'), 1000)

    // console.log(from)
    // console.log(to)

    console.log('我是全局前置钩子')

    next()

})

router.beforeResolve((to, from, next) => {
    console.log('我是全局解析守卫')
    next()
})

router.afterEach((to, from) => {
    console.log('我是全局后置钩子')

})

export default router