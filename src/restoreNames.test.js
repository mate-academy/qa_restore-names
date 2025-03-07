'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  test('should restore firstName for a user with firstName undefined', () => {
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

  test('should restore firstName for a user missing the firstName', () => {
    const users = [
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe('Mike');
  });

  test('should not override existing firstName', () => {
    const users = [
      {
        firstName: 'Lucy',
        lastName: 'Smith',
        fullName: 'Lucy Smith',
      },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe('Lucy');
  });

  test('should handle multiple users', () => {
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
        firstName: 'Anna',
        lastName: 'Smith',
        fullName: 'Anna Smith',
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
        firstName: 'Anna',
        lastName: 'Smith',
        fullName: 'Anna Smith',
      },
    ]);
  });

  test('should leave fullName and lastName properties untouched', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Doe',
        fullName: 'John Doe',
      },
    ];

    restoreNames(users);
    expect(users[0].lastName).toBe('Doe');
    expect(users[0].fullName).toBe('John Doe');
  });

  test('should not throw error with an empty array', () => {
    const users = [];

    expect(() => restoreNames(users)).not.toThrow();
  });
});
