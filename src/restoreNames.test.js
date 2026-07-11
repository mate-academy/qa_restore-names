'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should be declared', () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it('should not return anything', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    expect(restoreNames(users)).toBeUndefined();
  });

  it('should restore firstName when it is undefined', () => {
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

  it('should restore firstName when the property is missing', () => {
    const users = [
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Mike');
  });

  it('should not modify firstName when it is already set', () => {
    const users = [
      {
        firstName: 'John',
        lastName: 'Smith',
        fullName: 'James Smith',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('John');
  });

  it('should not modify lastName or fullName', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    restoreNames(users);

    expect(users[0].lastName).toBe('Holy');
    expect(users[0].fullName).toBe('Jack Holy');
  });

  it('should restore names for multiple users at once', () => {
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
        firstName: 'John',
        lastName: 'Smith',
        fullName: 'James Smith',
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
        firstName: 'John',
        lastName: 'Smith',
        fullName: 'James Smith',
      },
    ]);
  });

  it('should mutate the original array without creating new objects', () => {
    const user = {
      firstName: undefined,
      lastName: 'Holy',
      fullName: 'Jack Holy',
    };
    const users = [user];

    restoreNames(users);

    expect(users[0]).toBe(user);
  });

  it('should do nothing for an empty array', () => {
    const users = [];

    restoreNames(users);

    expect(users).toEqual([]);
  });
});
