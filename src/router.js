import { createRouter, createWebHistory } from "vue-router";

import home from "./pages/home.vue";
import about from "./pages/about.vue";
import blog from "./pages/blog.vue";
import contact from "./pages/contact.vue";
import error404 from "./pages/error404.vue";


const router= createRouter({

  history:createWebHistory(),
  routes:[
    {
      path:'/',
      name:'home',
      component: home
    },
    {
      path:'/chi siamo',
      name:'about',
      component: about
    },
    {
      path:'/ portfolio',
      name:'blog',
      component: blog
    },
    {
      path:'/contatti',
      name:'contact',
      component: contact
    },
    {
      path:'/:pathMatch(.*)*',
      name:'error404',
      component: error,
    }
  ]
})
export {router}