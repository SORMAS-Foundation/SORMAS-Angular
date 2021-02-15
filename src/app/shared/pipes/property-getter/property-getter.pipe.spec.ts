import { PropertyGetterPipe } from './property-getter.pipe';

describe('PropertyGetterPipe', () => {
  it('create an instance', () => {
    const pipe = new PropertyGetterPipe();

    expect(pipe).toBeTruthy();
  });
});
