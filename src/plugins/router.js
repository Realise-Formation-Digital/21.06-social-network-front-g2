import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//Pages
import home from "../pages/Home.vue";
import post from "../pages/Post.vue";
import profile from "../pages/Profile.vue";
import search from "../pages/Search.vue";

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
