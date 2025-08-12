import type { Routes } from '@angular/router';
import { MainLayout } from '../__/main-layout';

export const MAIN_LAYOUT_ROUTES: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [],
  },
];
