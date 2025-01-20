import HomePage from "@/modules/landing/HomePage.vue";
import LandingLayout from "@/modules/landing/layouts/LandingLayout.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/', name: 'landing', component: LandingLayout,
            redirect: '/home',
            children: [
                { path: '/home', name: 'home', component: HomePage, },
                { path: '/features', name: 'features', component: () => import('@landing/FeaturePage.vue') }, //LOADING ON DEMAND (LAZY)
                { path: '/pricing', name: 'pricing', component: () => import('@/modules/landing/Pricing.vue') },
                { path: '/contact', name: 'contact', component: () => import('@landing/ContactPage.vue') },
            ]
        },
        { path: '/auth', name: 'auth', component: () => import('@/modules/auth/pages/LoginPage.vue') },
        //{ path: '/:pathMatch(.*)*', redirect: '/'}
        { path: '/:pathMatch(.*)*', component: () => import('@/modules/common/pages/NotFound.vue') }
    ]
});

export default router;