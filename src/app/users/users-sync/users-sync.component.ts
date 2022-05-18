import { Component, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription, timer } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { UserService } from '../../_services/api/user.service';

@Component({
  selector: 'app-users-sync',
  templateUrl: './users-sync.component.html',
  styleUrls: ['./users-sync.component.scss'],
})
export class UsersSyncComponent implements OnDestroy {
  processed: number;
  syncronized: number;
  errors: number;
  showProgress = false;
  syncDone = false;
  syncOngoing = false;

  private subscriptions: Subscription = new Subscription();

  constructor(private userService: UserService, @Inject(MAT_DIALOG_DATA) public data: any) {}

  clearProgress(): void {
    this.showProgress = false;
    this.syncDone = false;
    this.syncOngoing = false;
    this.processed = 0;
    this.errors = 0;
    this.syncronized = 0;
  }

  startSync(): void {
    const timerProgress = timer(0, 30);

    this.clearProgress();
    this.showProgress = true;
    this.syncOngoing = true;

    this.subscriptions.add(
      timerProgress
        .pipe(takeWhile(() => this.processed < this.data.usersCount && !this.syncDone))
        .subscribe(() => {
          this.processed += 1;
        })
    );

    this.subscriptions.add(
      this.userService.sync().subscribe({
        next: (result) => {
          if (this.syncDone) {
            return;
          }
          this.processed = this.data.usersCount;
          this.syncDone = true;
          this.syncOngoing = false;
          if (result) {
            this.syncronized = Math.floor(result.syncronized * this.data.usersCount);
            this.errors = Math.ceil(result.errors * this.data.usersCount);
          }
        },
        error: () => {},
        complete: () => {},
      })
    );
  }

  cancelSync(): void {
    this.syncDone = true;
    this.syncOngoing = false;
    this.subscriptions.add(
      this.userService.abortSync().subscribe((result) => {
        this.processed = Math.floor(result.syncronized * this.data.usersCount);
        this.syncronized = Math.floor(result.syncronized * this.data.usersCount);
        this.errors = 0;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
