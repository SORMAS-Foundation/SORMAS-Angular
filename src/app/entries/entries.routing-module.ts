import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntriesComponent } from './entries.component';
import { EntriesListComponent } from './entries-list/entries-list.component';
import { EntryComponent } from './entry/entry.component';
import { TravelEntryComponent } from './travel-entry/travel-entry.component';
import { LeaveGuard } from '../_guards/leave-guard';
import { TravelEntryPersonComponent } from './travel-entry-person/travel-entry-person.component';

const routes: Routes = [
  {
    path: '',
    component: EntriesComponent,
    children: [
      { path: 'list', component: EntriesListComponent },
      {
        path: 'entry/:entryId',
        component: EntryComponent,
        children: [
          { path: 'travel-entry', component: TravelEntryComponent, canDeactivate: [LeaveGuard] },
          {
            path: 'travel-entry-person',
            component: TravelEntryPersonComponent,
            canDeactivate: [LeaveGuard],
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntriesRoutingModule {}
