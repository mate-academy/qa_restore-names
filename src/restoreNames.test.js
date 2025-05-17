'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should restore undefined firstName from fullName', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Wade',
        fullName: 'John Holl',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('John');
  });

  it('should restore firstName for multiple users', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holl',
        fullName: 'John Holl',
      },
      {
        lastName: 'Mikola',
        fullName: 'Leo Mikola',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('John');
    expect(users[1].firstName).toBe('Leo');
  });
});
