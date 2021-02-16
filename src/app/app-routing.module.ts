import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './shared/auth/app.guard';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'tasks',
    loadChildren: () => import('./tasks/tasks.module').then((m) => m.TasksModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'forms',
    loadChildren: () =>
      import('./form-example/formExample.module').then((m) => m.FormExampleModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'user-profile',
    loadChildren: () =>
      import('./user-profile/user-profile.module').then((m) => m.UserProfileModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'case',
    loadChildren: () => import('./case/case.module').then((m) => m.CaseModule),
    canActivate: [AuthGuard],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
