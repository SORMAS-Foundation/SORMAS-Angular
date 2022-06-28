import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessagesListComponent } from './messages-list/messages-list.component';
import { MessagesComponent } from './messages.component';

const routes: Routes = [
  {
    path: '',
    component: MessagesComponent,
    children: [{ path: 'list', component: MessagesListComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessagesRoutingModule {}
