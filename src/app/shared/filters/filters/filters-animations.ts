import { trigger, state, style, transition, animate } from '@angular/animations';

export const onSideNavChange = trigger('onSideNavChange', [
  state(
    'close',
    style({
      width: '380px',
    })
  ),
  state(
    'open',
    style({
      width: '94vw',
    })
  ),
  transition('close <=> open', animate('200ms ease-in')),
]);

export const onMainContentChange = trigger('onMainContentChange', [
  state(
    'close',
    style({
      'margin-left': '380px',
    })
  ),
  state(
    'open',
    style({
      'margin-left': '380px',
    })
  ),
  transition('close <=> open', animate('200ms ease-in')),
]);
