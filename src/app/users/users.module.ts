import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { SharedModule } from '../shared/shared.module';
import { DynamicFormModule } from '../shared/dynamic-form/dynamic-form.module';
import { UsersRoutingModule } from './users-routing.module';
import { MaterialModule } from '../material.module';
import { UsersListComponent } from './users-list/users-list.component';
import { UserFiltersComponent } from './user-filters/user-filters.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    UsersComponent,
    UsersListComponent,
    UserFiltersComponent,
    UserAddComponent,
    UserComponent,
  ],
  imports: [CommonModule, UsersRoutingModule, MaterialModule, SharedModule, DynamicFormModule],
})
export class UsersModule {}
