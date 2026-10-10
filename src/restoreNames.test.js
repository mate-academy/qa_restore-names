'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should restore name from full name', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Jack');
  });

  it('should add first name key', () => {
    const users = [
      {
        lastName: 'Lebrovskiy',
        fullName: 'Anton Lebrovskiy',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Anton');
  });

  it(`shouldn't add first name key if fullName doesn't exists`, () => {
    const users = [
      {
        lastName: 'Lebrovskiy',
      },
    ];

    restoreNames(users);

    expect(users[0]).not.toHaveProperty('firstName');
  });

  // write tests here
});
