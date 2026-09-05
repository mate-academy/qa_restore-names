'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should be declared', () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  test('should  set correct firstName if it is undefined', () => {
    expect(restoreNames({
      firstName: undefined,
      lastName: 'Holy',
      fullName: 'Jack Holy',
    },)).toEqual({
      firstName: 'Jack',
      lastName: 'Holy',
      fullName: 'Jack Holy',
    },);
  });

  test('should  set correct firstName if it is unset', () => {
    expect(restoreNames({
      lastName: 'Adams',
      fullName: 'Mike Adams',
    },)).toEqual({
      firstName: 'Mike',
      lastName: 'Adams',
      fullName: 'Mike Adams',
    },);
  });
});
