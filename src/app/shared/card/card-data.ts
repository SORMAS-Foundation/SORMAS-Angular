import { CardActions } from '../../_models/cardActions';

export const AVAILABLE_ACTIONS: CardActions[] = [
  {
    type: 'select',
    presentation: 'checkbox',
    position: 'TOPLEFT',
  },
  {
    type: 'edit',
    presentation: 'button',
    position: 'TOPLEFT',
  },
  {
    type: 'delete',
    presentation: 'button',
    position: 'TOPLEFT',
  },
  {
    type: 'link',
    presentation: 'button',
    position: 'TOPLEFT',
  },
  {
    type: 'unlink',
    presentation: 'button',
    position: 'TOPLEFT',
  },
  {
    type: 'refresh',
    presentation: 'button',
    position: 'TOPLEFT',
  },
];
