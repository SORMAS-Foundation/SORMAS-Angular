import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [TasksComponent],
  imports: [CommonModule, TasksRoutingModule, MaterialModule, FormsModule, ReactiveFormsModule],
})
export class TasksModule {}
