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

    restoreNames(users);

    expect(users).toEqual(expected);
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

    restoreNames(users);

    expect(users).toEqual(expected);
  });

  it('should return empty array for empty array', () => {
    const expected = [];

    const users = [];

    restoreNames(users);

    expect(users).toEqual(expected);
  });
});
