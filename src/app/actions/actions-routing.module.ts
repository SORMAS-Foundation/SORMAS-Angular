import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActionsListComponent } from './actions-list/actions-list.component';
import { ActionsComponent } from './actions.component';

const routes: Routes = [
  {
    path: '',
    component: ActionsComponent,
    children: [{ path: 'list', component: ActionsListComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActionsRoutingModule {}
