import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//Pages
import home from "../pages/Home.vue";
import Post from "../pages/Post.vue";
import Profile from "../pages/Profile.vue";
import Search from "../pages/Search.vue";

const routes = [
    { path: '/', component: home },
    { path: '/Post', component: Post },
    { path: '/Profile', component: Profile },
    { path: '/Search', component: Search },

]

const router = new VueRouter({
    mode: 'history',
    routes: routes // short for `routes: routes`
})

export default router

