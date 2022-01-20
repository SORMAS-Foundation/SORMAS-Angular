import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { getEnv } from '../environments/getEnv';
import { AuthLegacyGuard } from './shared/auth/app-legacy.guard';
import { AuthGuard } from './shared/auth/app.guard';
import { NotFoundComponent } from './_common-components/not-found/not-found.component';

const Guard = getEnv().isLegacyLogin ? AuthLegacyGuard : AuthGuard;

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    canActivate: [Guard],
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then((m) => m.AboutModule),
    canActivate: [Guard],
  },
  {
    path: 'tasks',
    loadChildren: () => import('./tasks/tasks.module').then((m) => m.TasksModule),
    canActivate: [Guard],
  },
  {
    path: 'contacts',
    loadChildren: () => import('./contacts/contacts.module').then((m) => m.ContactsModule),
    canActivate: [Guard],
  },
  {
    path: 'samples',
    loadChildren: () => import('./samples/samples.module').then((m) => m.SamplesModule),
    canActivate: [Guard],
  },
  {
    path: 'entries',
    loadChildren: () => import('./entries/entries.module').then((m) => m.EntriesModule),
    canActivate: [Guard],
  },
  {
    path: 'cases',
    loadChildren: () => import('./cases/cases.module').then((m) => m.CasesModule),
    canActivate: [Guard],
  },
  {
    path: 'events',
    loadChildren: () => import('./events/events.module').then((m) => m.EventsModule),
    canActivate: [Guard],
  },
  {
    path: 'immunizations',
    loadChildren: () =>
      import('./immunizations/immunizations.module').then((m) => m.ImmunizationsModule),
    canActivate: [Guard],
  },
  {
    path: 'user-profile',
    loadChildren: () =>
      import('./user-profile/user-profile.module').then((m) => m.UserProfileModule),
    canActivate: [Guard],
  },
  {
    path: 'persons',
    loadChildren: () => import('./persons/persons.module').then((m) => m.PersonsModule),
    canActivate: [Guard],
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then((m) => m.UsersModule),
    canActivate: [Guard],
  },
  {
    path: 'configuration',
    loadChildren: () =>
      import('./configuration/configuration.module').then((m) => m.ConfigurationModule),
    canActivate: [Guard],
  },
  {
    path: 'stats',
    loadChildren: () => import('./stats/stats.module').then((m) => m.StatsModule),
    canActivate: [Guard],
  },
  { path: 'login', loadChildren: () => import('./login/login.module').then((m) => m.LoginModule) },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      paramsInheritanceStrategy: 'always',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
