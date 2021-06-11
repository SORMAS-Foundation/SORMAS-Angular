/* tslint:disable:no-unused-variable */
import { CustomDatePipe } from './custom-date.pipe';

describe('Pipe: CustomDatePipe', () => {
  it('create an instance', () => {
    const pipe = new CustomDatePipe('en');

    expect(pipe).toBeTruthy();
  });
});
