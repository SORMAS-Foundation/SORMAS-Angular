import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeaveGuard } from '../_guards/leave-guard';
import { ContactsComponent } from './contacts.component';
import { ContactComponent } from './contact/contact.component';
import { ContactDetailsComponent } from './contact-components/contact-details/contact-details.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactPersonComponent } from './contact-components/contact-person/contact-person.component';
import { ContactEpidemiologicalDataComponent } from './contact-components/contact-epidemiological-data/contact-epidemiological-data.component';
import { ContactFollowUpComponent } from './contact-components/contact-follow-up/contact-follow-up.component';

const routes: Routes = [
  {
    path: '',
    component: ContactsComponent,
    children: [
      { path: 'list', component: ContactsListComponent, canActivate: [LeaveGuard] },
      {
        path: 'contact/:contactId',
        component: ContactComponent,
        children: [
          { path: 'details', component: ContactDetailsComponent, canActivate: [LeaveGuard] },
          { path: 'person', component: ContactPersonComponent, canActivate: [LeaveGuard] },
          {
            path: 'epidemiological-data',
            component: ContactEpidemiologicalDataComponent,
            canActivate: [LeaveGuard],
          },
          { path: 'follow-up', component: ContactFollowUpComponent, canActivate: [LeaveGuard] },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactsRoutingModule {}
