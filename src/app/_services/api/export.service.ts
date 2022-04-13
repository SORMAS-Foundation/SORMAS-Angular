import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { HelperService } from '../helper.service';
import { NotificationService } from '../notification.service';

@Injectable({
  providedIn: 'root',
})
export class ExportService implements OnDestroy {
  private subscriptions: Subscription[] = [];

  constructor(
    public helperService: HelperService,
    public httpClient: HttpClient,
    public notificationService: NotificationService
  ) {}
  export(type: string, url: string): Observable<any> {
    return this.httpClient.post(`${this.helperService.getApiUrl()}/${url}`, {
      exportType: type,
    });
  }

  executeExport(exportType: string, endpoint: string): void {
    this.subscriptions.push(
      this.export(exportType, endpoint).subscribe({
        next: () => {},
        error: (err: any) => {
          this.notificationService.error(err);
        },
        complete: () => {},
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
