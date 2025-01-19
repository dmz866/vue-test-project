import HomePage from "@/modules/landing/HomePage.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', name: 'home', component: HomePage },
        { path: '/features', name: 'features', component: () => import('@landing/FeaturePage.vue') }, //LOADING ON DEMAND (LAZY)
        { path: '/pricing', name: 'pricing', component: () => import('@landing/Princing.vue') },
        { path: '/contact', name: 'contact', component: () => import('@landing/ContactPage.vue') },
    ]
});

export default router;