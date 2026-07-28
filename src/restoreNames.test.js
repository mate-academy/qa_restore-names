'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should be declared as a function', () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it('should return undefined', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    expect(restoreNames(users)).toBeUndefined();
  });

  it('should restore `firstName` when it is `undefined`', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Jack',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ]);
  });

  it('should restore `firstName` when the property is missing', () => {
    const users = [
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Mike',
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ]);
  });

  it('should keep an existing `firstName` unchanged', () => {
    const users = [
      {
        firstName: 'Kate',
        lastName: 'Smith',
        fullName: 'Jane Smith',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Kate',
        lastName: 'Smith',
        fullName: 'Jane Smith',
      },
    ]);
  });

  it('should restore names for several users at once', () => {
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
      {
        firstName: 'Kate',
        lastName: 'Smith',
        fullName: 'Kate Smith',
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
      {
        firstName: 'Kate',
        lastName: 'Smith',
        fullName: 'Kate Smith',
      },
    ]);
  });

  it('should not change an empty array', () => {
    const users = [];

    restoreNames(users);

    expect(users).toEqual([]);
  });

  it('should not touch a filled `firstName` without `fullName`', () => {
    const users = [
      {
        firstName: 'Jack',
        name: 'Jack',
        surname: 'Holy',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Jack',
        name: 'Jack',
        surname: 'Holy',
      },
    ]);
  });
});
