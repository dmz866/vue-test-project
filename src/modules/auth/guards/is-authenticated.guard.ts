import type { NavigationGuardNext, RouteLocationNormalized } from "vue-router";

const isAuthenticatedGuard = (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    const userId = localStorage.getItem('userId');

    if (!userId) {
        return next('/auth');
    }

    next();
};

export default isAuthenticatedGuard;

