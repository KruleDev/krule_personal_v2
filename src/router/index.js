import { createRouter, createWebHistory } from "vue-router";

import Home from '../components/Home.vue';
import Skills from '../components/Skills.vue';
import Projects from '../components/Projects.vue';
import Contact from '../components/Contact.vue';

const router= createRouter({
    history:createWebHistory(),
    routes:[
        { path:'/', component: Home},
        { path:'/skills', component: Skills},
        { path:'/contact', component: Contact},
        { path:'/projects', component: Projects},
    ]
});

export default router;