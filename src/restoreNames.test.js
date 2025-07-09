'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should do nothing if firstName is set', () => {
    const users = [
      {
        firstName: 'dupa',
        lastName: 'mucha',
        fullName: 'dupa mucha',
      },
      {
        firstName: 'a',
        lastName: 'b',
        fullName: 'a b',
      },
    ];

    restoreNames(users);

    const expected = [
      {
        firstName: 'dupa',
        lastName: 'mucha',
        fullName: 'dupa mucha',
      },
      {
        firstName: 'a',
        lastName: 'b',
        fullName: 'a b',
      },
    ];

    expect(users).toEqual(expected);
  });

  it('should set firstName if !firstName', () => {
    const users = [
      {
        firstName: '',
        lastName: 'mucha',
        fullName: 'dupa mucha',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('dupa');
  });
});
