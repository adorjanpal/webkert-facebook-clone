import { Routes } from '@angular/router';
import { authGuard } from '../../guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
            import('../../pages/home/home.component').then((m) => m.HomeComponent),
        canActivate: [authGuard],
    },
    {
        path: 'profile',
        pathMatch: 'full',
        loadComponent: () =>
            import('../../pages/profile/profile.component').then((m) => m.ProfileComponent),
        canActivate: [authGuard],
    },
    {
        path: 'profile/:email',
        pathMatch: 'full',
        loadComponent: () =>
            import('../../pages/profile/profile.component').then((m) => m.ProfileComponent),
        canActivate: [authGuard],
    },
   
];
