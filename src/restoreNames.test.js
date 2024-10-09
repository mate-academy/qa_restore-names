'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should be declared', () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it('should restore firstName from fullName when firstName is undefined', () => {
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

  it('should restore firstName from fullName when firstName is missing', () => {
    const users = [
      {
        lastName: 'Smith',
        fullName: 'John Smith',
      },
      {
        lastName: 'Doe',
        fullName: 'Jane Doe',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'John',
        lastName: 'Smith',
        fullName: 'John Smith',
      },
      {
        firstName: 'Jane',
        lastName: 'Doe',
        fullName: 'Jane Doe',
      },
    ]);
  });

  it('should not change firstName if it is already set', () => {
    const users = [
      {
        firstName: 'Alice',
        lastName: 'Wonderland',
        fullName: 'Alice Wonderland',
      },
      {
        firstName: 'Bob',
        lastName: 'Builder',
        fullName: 'Bob Builder',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Alice',
        lastName: 'Wonderland',
        fullName: 'Alice Wonderland',
      },
      {
        firstName: 'Bob',
        lastName: 'Builder',
        fullName: 'Bob Builder',
      },
    ]);
  });

  it('should handle empty array', () => {
    const users = [];

    restoreNames(users);

    expect(users).toEqual([]);
  });

  it('should handle users with only fullName', () => {
    const users = [
      {
        fullName: 'Charlie Brown',
      },
      {
        fullName: 'Lucy van Pelt',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Charlie',
        fullName: 'Charlie Brown',
      },
      {
        firstName: 'Lucy',
        fullName: 'Lucy van Pelt',
      },
    ]);
  });
});

