import type { Routes } from '@angular/router';
import { NarrowLayout } from '../__/narrow-layout';

export const NARROW_LAYOUT_ROUTES: Routes = [
  {
    path: '',
    component: NarrowLayout,
    children: [
      {
        path: 'auth',
        loadComponent: () =>
          import('../../../pages/auth/login/login').then((x) => x.Login),
      },
      {
        path: '',
        loadChildren: async () =>
          import('../../main/_/main-layout.routes').then(
            (r) => r.MAIN_LAYOUT_ROUTES,
          ),
      },
    ],
  },
];
