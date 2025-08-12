import type { Routes } from '@angular/router';
import { Main } from '../__/main';
import { ActiveSessions } from '../active-sessions/active-sessions';
import { Connections } from '../connections/connections';
import { Groups } from '../groups/groups';
import { Preferences } from '../preferences/preferences';
import { Users } from '../users/users';
import { Dashboard } from '../dashboard/dashboard';
import { Histories } from '../histories/histories';

export const MAIN_ROUTES: Routes = [
  {
    path: '',
    component: Main,
    children: [
      {
        path: 'dashboard',
        component: Dashboard,
      },
      { path: 'activeSessions', component: ActiveSessions },
      { path: 'Connections', component: Connections },
      { path: 'groups', component: Groups },
      { path: 'histories', component: Histories },
      { path: 'preferences', component: Preferences },
      { path: 'users', component: Users },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
];
