import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { getEnv } from '../environments/getEnv';
import { AuthLegacyGuard } from './shared/auth/app-legacy.guard';
import { AuthGuard } from './shared/auth/app.guard';
import { LeaveGuard } from './_guards/leave-guard';
import { NotFoundComponent } from './_common-components/not-found/not-found.component';

const Guard = getEnv().isLegacyLogin ? AuthLegacyGuard : AuthGuard;

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    canActivate: [Guard, LeaveGuard],
  },
  {
    path: 'about',
    // component: AboutComponent,
    loadChildren: () => import('./about/about.module').then((m) => m.AboutModule),
    canActivate: [Guard, LeaveGuard],
  },
  {
    path: 'tasks',
    loadChildren: () => import('./tasks/tasks.module').then((m) => m.TasksModule),
    canActivate: [Guard, LeaveGuard],
  },
  {
    path: 'contacts',
    loadChildren: () => import('./contacts/contacts.module').then((m) => m.ContactsModule),
    canActivate: [Guard, LeaveGuard],
  },
  {
    path: 'samples',
    loadChildren: () => import('./samples/samples.module').then((m) => m.SamplesModule),
    canActivate: [Guard, LeaveGuard],
  },
  {
    path: 'cases',
    loadChildren: () => import('./cases/cases.module').then((m) => m.CasesModule),
    canActivate: [AuthGuard, LeaveGuard],
  },
  {
    path: 'events',
    loadChildren: () => import('./events/events.module').then((m) => m.EventsModule),
    canActivate: [AuthGuard, LeaveGuard],
  },
  {
    path: 'user-profile',
    loadChildren: () =>
      import('./user-profile/user-profile.module').then((m) => m.UserProfileModule),
    canActivate: [Guard, LeaveGuard],
  },
  {
    path: 'persons',
    loadChildren: () => import('./persons/persons.module').then((m) => m.PersonsModule),
    canActivate: [Guard, LeaveGuard],
  },
  { path: 'login', loadChildren: () => import('./login/login.module').then((m) => m.LoginModule) },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
