'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  test('should restore firstName when it is undefined and preserve other fields', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Jack');
    // Перевірка збереження існуючих даних
    expect(users[0].lastName).toBe('Holy');
    expect(users[0].fullName).toBe('Jack Holy');
  });

  test('should restore firstName when it is missing and preserve other fields', () => {
    const users = [
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Mike');
    // Перевірка збереження існуючих даних
    expect(users[0].lastName).toBe('Adams');
    expect(users[0].fullName).toBe('Mike Adams');
  });

  test('should NOT change firstName if it already exists and preserve other fields', () => {
    const users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        fullName: 'Johnny Doe',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('John');
    expect(users[0].lastName).toBe('Doe');
    expect(users[0].fullName).toBe('Johnny Doe');
  });

  test('should handle multiple users and preserve all their respective fields', () => {
    const users = [
      {
        firstName: undefined, lastName: 'Cooper', fullName: 'Alice Cooper',
      },
      {
        firstName: 'Bob', lastName: 'Marley', fullName: 'Robert Marley',
      },
      {
        lastName: 'Chaplin', fullName: 'Charlie Chaplin',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Alice',
        lastName: 'Cooper',
        fullName: 'Alice Cooper',
      },
      {
        firstName: 'Bob',
        lastName: 'Marley',
        fullName: 'Robert Marley',
      },
      {
        firstName: 'Charlie',
        lastName: 'Chaplin',
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
