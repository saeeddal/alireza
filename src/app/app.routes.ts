import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: async () =>
      import('./layouts/general/_/general-layout.routes').then(
        (r) => r.GENERAL_LAYOUT_ROUTES,
      ),
  },
];
