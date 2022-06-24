import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { UserService } from '../../_services/api/user.service';
import { UserDto } from '../../_models/userDto';

@Component({
  selector: 'app-lab-message-assign',
  templateUrl: './lab-message-assign.component.html',
  styleUrls: ['./lab-message-assign.component.scss'],
})
export class LabMessageAssignComponent implements OnInit, OnDestroy {
  form: UntypedFormGroup;
  users: UserDto[] = [];
  subscriptions: Subscription[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private userService: UserService) {}

  ngOnInit(): void {
    this.initForm();
    this.fetchUsers();
  }

  initForm(): void {
    this.form = new UntypedFormGroup({
      assignee: new UntypedFormControl(this.data.labMessage?.assignee?.uuid),
    });
  }

  fetchUsers(): void {
    this.subscriptions.push(
      this.userService.getAll().subscribe({
        next: (result) => {
          this.users = result.elements as UserDto[];
        },
        error: () => {},
      })
    );
  }

  save(): void {
    // save logic here
  }

  assignSelf(): void {
    // assing slef logic here
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
