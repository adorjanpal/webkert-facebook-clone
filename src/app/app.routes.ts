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
        loadComponent: () =>
          import('./layout/authorized/authorized.component').then(
            (m) => m.AuthorizedComponent
          ),
        children: [
          {
            path: '',
            loadChildren: () => import('./layout/authorized/authorized.routes').then((m) => m.routes),
          },
        ],
      },
];
