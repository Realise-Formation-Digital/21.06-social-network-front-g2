import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//Pages
import home from "../pages/home.vue";
import post from "../pages/post.vue";
import profile from "../pages/profile.vue";
import search from "../pages/search.vue";

const routes = [
    { path: '/', component: home },
    { path: '/post', component: post },
    { path: '/profile', component: profile },
    { path: '/search', component: search },

]

const router = new VueRouter({
    mode: 'history',
    routes: routes // short for `routes: routes`
})

export default router
