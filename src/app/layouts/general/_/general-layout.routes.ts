import type { Routes } from '@angular/router';
import { GeneralLayout } from '../__/general-layout';

export const GENERAL_LAYOUT_ROUTES: Routes = [
  {
    path: '',
    component: GeneralLayout,
    children: [
      {
        path: '',
        loadChildren: async () =>
          import('../../narrow/_/narrow-layout.routes').then(
            (r) => r.NARROW_LAYOUT_ROUTES,
          ),
      },
    ],
  },
];
