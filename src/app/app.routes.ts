import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
            import('./pages/auth/auth.component').then((m) => m.AuthComponent),
    },
];
