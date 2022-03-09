import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LabMessagesListComponent } from './lab-messages-list/lab-messages-list.component';
import { LabMessagesComponent } from './lab-messages.component';

const routes: Routes = [
  {
    path: '',
    component: LabMessagesComponent,
    children: [{ path: 'list', component: LabMessagesListComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LabMessagesRoutingModule {}
