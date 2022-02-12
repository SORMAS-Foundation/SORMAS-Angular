import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharesComponent } from './shares.component';
import { SharesListComponent } from './shares-list/shares-list.component';

const routes: Routes = [
  {
    path: '',
    component: SharesComponent,
    children: [{ path: 'list', component: SharesListComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharesRoutingModule {}
