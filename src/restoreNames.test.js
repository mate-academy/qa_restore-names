'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should add firstName if it is missing', () => {
    const user = {
      lastName: 'Holy',
      fullName: 'Jack Holy',
    };

    restoreNames([user]);

    expect(user.firstName).toBe('Jack');
  });

  it('should add firstName from fullName when firstName is undefined', () => {
    const user = {
      firstName: undefined,
      lastName: 'Holy',
      fullName: 'Jack Holy',
    };

    restoreNames([user]);

    expect(user.firstName).toBe('Jack');
  });

  it('should not overwrite existing firstName', () => {
    const user = {
      firstName: 'John',
      lastName: 'Holy',
      fullName: 'Jack Holy',
    };

    restoreNames([user]);

    expect(user.firstName).toBe('John');
  });

  it('should restore firstName for all users in the array', () => {
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

    expect(users).toEqual([
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
    ]);
  });
});
