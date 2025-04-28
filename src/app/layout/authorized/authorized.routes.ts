import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
            import('../../pages/home/home.component').then((m) => m.HomeComponent),
    },
    {
        path: 'profile',
        pathMatch: 'full',
        loadComponent: () =>
            import('../../pages/profile/profile.component').then((m) => m.ProfileComponent),
    },
    {
        path: 'messages',
        pathMatch: 'full',
        loadComponent: () =>
            import('../../pages/chat/chat.component').then((m) => m.ChatComponent),
    },

    // {
    //     path: '',
    //     pathMatch: 'full',
    //     loadComponent: () =>
    //         import('../../pages/home/home.component').then((m) => m.HomeComponent),
    // },
];
