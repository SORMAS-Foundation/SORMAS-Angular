import { PositionType } from './positionType';

export interface CardActions {
  type: string;
  presentation: 'button' | 'checkbox';
  position: PositionType;
}
