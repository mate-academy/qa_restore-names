'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  test('should restore firstName when it is undefined', () => {
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

  test('should restore firstName when it is missing (not in object)', () => {
    const users = [
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Mike');
  });

  test('should NOT change firstName if it already exists', () => {
    const users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        fullName: 'Johnny Doe',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('John');
  });

  test('should handle multiple users in the array', () => {
    const users = [
      {
        firstName: undefined,
        fullName: 'Alice Cooper',
      },
      {
        firstName: 'Bob',
        fullName: 'Robert Marley',
      },
      { fullName: 'Charlie Chaplin' },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Alice',
        fullName: 'Alice Cooper',
      },
      {
        firstName: 'Bob',
        fullName: 'Robert Marley',
      },
      {
        firstName: 'Charlie',
        fullName: 'Charlie Chaplin',
      },
    ]);
  });

  test('should work correctly with an empty array', () => {
    const users = [];

    restoreNames(users);
    expect(users).toEqual([]);
  });
});
