import isAuthenticatedGuard from "@/modules/auth/guards/is-authenticated.guard";
import HomePage from "@/modules/landing/pages/HomePage/HomePage.vue";
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
                {
                    path: '/features/:id',
                    beforeEnter: [
                        isAuthenticatedGuard
                    ],
                    //props: true,
                    props: (route) => {
                        const id = Number(route.params.id);

                        if (isNaN(id)) return { id: 1 };

                        return { id }
                    },
                    name: 'features',
                    component: () => import('@/modules/landing/pages/FeaturePage.vue')
                }, //LOADING ON DEMAND (LAZY)
                { path: '/pricing', name: 'pricing', component: () => import('@/modules/landing/pages/Pricing.vue') },
                { path: '/contact', name: 'contact', component: () => import('@/modules/landing/pages/ContactPage.vue') },
            ]
        },
        { path: '/auth', name: 'auth', component: () => import('@/modules/auth/pages/LoginPage.vue') },
        //{ path: '/:pathMatch(.*)*', redirect: '/'}
        { path: '/:pathMatch(.*)*', component: () => import('@/modules/common/pages/NotFound.vue') }
    ]
});

export default router;