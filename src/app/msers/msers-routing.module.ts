import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MsersComponent } from './msers.component';
import { MsersListComponent } from './msers-list/msers-list.component';

const routes: Routes = [
  {
    path: '',
    component: MsersComponent,
    children: [{ path: 'list', component: MsersListComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MsersRoutingModule {}
