import { Route } from '@angular/router';
export const NOT_FOUND_ROUTE = '40x';

export const CORE_ROUTES_CONFIG: Route[] = [
    {
        path: NOT_FOUND_ROUTE,
        loadComponent: () => import('../fof/fof.component').then(m => m.FofComponent),
    },
    {
        path: '**',
        redirectTo: NOT_FOUND_ROUTE,
    },
];
export const appRoutes: Route[] = [
    {
        path: '', loadChildren: () => import('../pages/pages.module').then(m => m.PagesModule),

    },
    ...CORE_ROUTES_CONFIG,
];
