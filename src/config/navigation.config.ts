import type { INavigationLink } from "../types/navigation";

export const NAVIGATION = {
    home: {
        href: "/",
        label: "Home",
        showAlways: true,
        hideWhenAuthenticated: false,
    },
    dashboard: {
        href: "/dashboard",
        label: "Dashboard",
        showAlways: false,
        hideWhenAuthenticated: false,
    },
    login: {
        href: "/login",
        label: "Login",
        showAlways: false,
        hideWhenAuthenticated: true,
    },
    signOut: {
        href: "/signOut",
        label: "Sign Out",
        showAlways: false,
        hideWhenAuthenticated: false,
    },
};

export const NAVIGATION_LINKS: INavigationLink[] = Object.values(NAVIGATION);
