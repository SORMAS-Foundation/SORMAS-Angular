import { Injectable } from '@angular/core';

export const CustomBreakpointNames = {
  small: 'small',
  medium: 'medium',
  large: 'large',
  extraLarge: 'extraLarge',
  wide: 'wide',
};

export interface CustomBreakpoints {
  [key: string]: any;
}

@Injectable({
  providedIn: 'root',
})
export class BreakpointsService {
  breakpoints: CustomBreakpoints = {
    '(max-width: 720px)': CustomBreakpointNames.small,
    '(max-width: 840px)': CustomBreakpointNames.medium,
    '(max-width: 1024px)': CustomBreakpointNames.large,
    '(max-width: 1440px)': CustomBreakpointNames.extraLarge,
    '(max-width: 1680px)': CustomBreakpointNames.wide,
  };

  getBreakpoints(): string[] {
    return Object.keys(this.breakpoints);
  }

  getBreakpointName(value: string): string {
    return this.breakpoints[value];
  }
}
