import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CasesOverviewComponent } from './cases-overview.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: CasesOverviewComponent,
  },
];

@NgModule({
  declarations: [CasesOverviewComponent],
  imports: [RouterModule.forChild(routes), CommonModule, SharedModule],
  exports: [RouterModule],
})
export class CasesOverviewModule {}
