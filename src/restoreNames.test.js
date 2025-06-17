'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should add name from fullName if user do not have it', () => {
    const users = [
      {
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    const user = users[0];

    restoreNames(users);

    expect(user.firstName).toBe('Jack');
  });

  it('should add name from fullName if userName is undefined', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    const user = users[0];

    restoreNames(users);

    expect(user.firstName).toBe('Jack');
  });

  it('should add name from fullName if userName is empty string', () => {
    const users = [
      {
        firstName: '',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    const user = users[0];

    restoreNames(users);

    expect(user.firstName).toBe('Jack');
  });
});
