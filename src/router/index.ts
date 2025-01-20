import HomePage from "@/modules/landing/HomePage.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', name: 'home', component: HomePage },
        { path: '/features', name: 'features', component: () => import('@landing/FeaturePage.vue') }, //LOADING ON DEMAND (LAZY)
        { path: '/pricing', name: 'pricing', component: () => import('@/modules/landing/Pricing.vue') },
        { path: '/contact', name: 'contact', component: () => import('@landing/ContactPage.vue') },
    ]
});

export default router;