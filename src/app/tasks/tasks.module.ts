import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { SharedModule } from '../shared/shared.module';
import { DynamicFormModule } from '../shared/dynamic-form/dynamic-form.module';
import { TasksRoutingModule } from './tasks-routing.module';
import { MaterialModule } from '../material.module';
import { TaskFiltersComponent } from './task-filters/task-filters.component';
import { TaskAddEditComponent } from './task-add-edit/task-add-edit.component';
import { TaskEditComponent } from './task-edit/task-edit.component';

@NgModule({
  declarations: [
    TasksComponent,
    TasksListComponent,
    TaskFiltersComponent,
    TaskAddEditComponent,
    TaskEditComponent,
  ],
  imports: [CommonModule, TasksRoutingModule, MaterialModule, SharedModule, DynamicFormModule],
})
export class TasksModule {}
