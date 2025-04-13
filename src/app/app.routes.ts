import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'auth',
        pathMatch: 'full',
        loadComponent: () =>
            import('./pages/auth/auth.component').then((m) => m.AuthComponent),
    },

    {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
            import('./pages/home/home.component').then((m) => m.HomeComponent),
    },
];
