import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { getEnv } from '../environments/getEnv';
import { AboutComponent } from './about/about.component';
import { AuthLegacyGuard } from './shared/auth/app-legacy.guard';
import { AuthGuard } from './shared/auth/app.guard';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const Guard = getEnv().isLegacyLogin ? AuthLegacyGuard : AuthGuard;

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    canActivate: [Guard],
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [Guard],
  },
  {
    path: 'tasks',
    loadChildren: () => import('./tasks/tasks.module').then((m) => m.TasksModule),
    canActivate: [Guard],
  },
  {
    path: 'forms',
    loadChildren: () =>
      import('./form-example/formExample.module').then((m) => m.FormExampleModule),
    canActivate: [Guard],
  },
  {
    path: 'cases',
    loadChildren: () =>
      import('./cases-overview/cases-overview.module').then((m) => m.CasesOverviewModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'user-profile',
    loadChildren: () =>
      import('./user-profile/user-profile.module').then((m) => m.UserProfileModule),
    canActivate: [Guard],
  },
  {
    path: 'case',
    loadChildren: () => import('./case/case.module').then((m) => m.CaseModule),
    canActivate: [AuthGuard],
  },
  { path: 'login', loadChildren: () => import('./login/login.module').then((m) => m.LoginModule) },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
