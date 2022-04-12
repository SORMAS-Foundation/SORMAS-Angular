import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MergeDuplicatesComponent } from './merge-duplicates.component';
import { MergeDuplicatesListComponent } from './merge-duplicates-list/merge-duplicates-list.component';

const routes: Routes = [
  {
    path: '',
    component: MergeDuplicatesComponent,
    children: [{ path: 'list/:type', component: MergeDuplicatesListComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MergeDuplicatesRoutingModule {}
