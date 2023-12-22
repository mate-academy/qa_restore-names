'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should set correct firstName to users', () => {
    const expected = [
      {
        firstName: 'Jack',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
      {
        firstName: 'Mike',
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    expect(restoreNames(users)).toEqual(expected);
  });

  it('should left the same firstName if it is', () => {
    const expected = [
      {
        firstName: 'Jack',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    const users = [
      {
        firstName: 'Jack',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    expect(restoreNames(users)).toEqual(expected);
  });

  it('should return empty array for empty array', () => {
    const expected = [];

    const users = [];

    expect(restoreNames(users)).toEqual(expected);
  });
});
