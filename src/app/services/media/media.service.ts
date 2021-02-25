import { Injectable } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BreakpointsService, CustomBreakpoints } from './breakpoints.service';

@Injectable({
  providedIn: 'root',
})
export class MediaService {
  activeBreakpoints: string[] = [];

  constructor(
    private breakpointObserver: BreakpointObserver,
    private breakpointService: BreakpointsService
  ) {}

  subscribeToLayoutChanges(): Observable<string[]> {
    return this.breakpointObserver
      .observe(this.breakpointService.getBreakpoints())
      .pipe(map((observeResponse) => this.parseBreakpointsResponse(observeResponse.breakpoints)));
  }

  parseBreakpointsResponse(breakpoints: CustomBreakpoints): string[] {
    this.activeBreakpoints = [];

    Object.keys(breakpoints).forEach((key) => {
      if (breakpoints[key]) {
        this.activeBreakpoints.push(this.breakpointService.getBreakpointName(key));
      }
    });

    return this.activeBreakpoints;
  }

  isBreakpointActive(breakpointName: string): string | undefined {
    return this.activeBreakpoints.find((breakpoint) => breakpoint === breakpointName);
  }
}
