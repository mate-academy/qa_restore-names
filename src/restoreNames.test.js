'use strict';

describe(`'restoreNames' function`, () => {
  const { restoreNames } = require('./restoreNames');

  it('should be a function', () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it(`not change user if 'firstName' is already defined`, () => {
    const users = [
      {
        firstName: 'Jack',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    restoreNames(users);

    expect(users[0]).toEqual({
      firstName: 'Jack',
      lastName: 'Holy',
      fullName: 'Jack Holy',
    });
  });

  it(`restore 'firstName' if it is undefined`, () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    restoreNames(users);

    expect(users[0]).toEqual({
      firstName: 'Jack',
      lastName: 'Holy',
      fullName: 'Jack Holy',
    });
  });

  it(`restore 'firstName' if it does not exist`, () => {
    const users = [
      {
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    restoreNames(users);

    expect(users[0]).toEqual({
      firstName: 'Jack',
      lastName: 'Holy',
      fullName: 'Jack Holy',
    });
  });

  it(`restore 'firstName' for all users missing it`, () => {
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

  it('should not modify an empty array', () => {
    const users = [];

    restoreNames(users);
    expect(users).toEqual([]);
  });
});
