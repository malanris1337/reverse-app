import reverse from './reverse'

describe('reverse test', function () {
  it('12345 -> 54321', () => {
    expect(reverse(12345)).toEqual('54321');
  });

  it('123456 -> 654321', () => {
    expect(reverse(123456)).toEqual('654321');
  });

  it('321 -> 123', () => {
    expect(reverse(321)).toEqual('123');
  });

  it('111111111111 -> 0', () => {
    expect(reverse(111111111111)).toEqual(0);
  });
});
