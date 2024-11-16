'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('function is declared', () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it('undefined firstName from fullName', () => {
    const user = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    restoreNames(user);

    expect(user[0]).toEqual({
      firstName: 'Jack',
      lastName: 'Holy',
      fullName: 'Jack Holy',
    });
  });

  it('missing firstName from fullName', () => {
    const user = [
      {
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    restoreNames(user);

    expect(user[0]).toEqual({
      firstName: 'Jack',
      lastName: 'Holy',
      fullName: 'Jack Holy',
    });
  });

  it('does not modify non-empty firstName', () => {
    const user = [
      {
        firstName: 'Merry',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    restoreNames(user);

    expect(user[0]).toEqual({
      firstName: 'Merry',
      lastName: 'Holy',
      fullName: 'Jack Holy',
    });
  });

  it('correctly works with multiple users in array', () => {
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

  it('does not change an empty array', () => {
    const user = [];

    restoreNames(user);

    expect(user).toEqual([]);
  });
});
