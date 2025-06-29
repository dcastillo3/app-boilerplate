import _ from "lodash";
import { initialDocumentTitle, generalRoutes, menuRoutes, protectedRoutes, notFoundRoute } from "./routesConsts";

const getRouteById = id => {
    const menuRoute = menuRoutes.find(route => route.id === id);
    if (!_.isEmpty(menuRoute)) return menuRoute;

    const generalRoute = generalRoutes.find(route => route.id === id);
    if (!_.isEmpty(generalRoute)) return generalRoute;

    const protectedRoute = protectedRoutes.find(route => route.id === id);
    if (!_.isEmpty(protectedRoute)) return protectedRoute;

    return notFoundRoute;
};

const getRouteByPathname = pathname => {
    const menuRoute = menuRoutes.find(route => route.path === pathname);
    if (!_.isEmpty(menuRoute)) return menuRoute;

    const generalRoute = generalRoutes.find(route => route.path === pathname);
    if (!_.isEmpty(generalRoute)) return generalRoute;

    const protectedRoute = protectedRoutes.find(route => route.path === pathname);
    if (!_.isEmpty(protectedRoute)) return protectedRoute;

    return notFoundRoute;
};

const buildDocumentTitle = title =>
    title !== getRouteById(1).name ? `${title} | ${initialDocumentTitle}` : initialDocumentTitle;

export {
    getRouteById,
    getRouteByPathname,
    buildDocumentTitle
};