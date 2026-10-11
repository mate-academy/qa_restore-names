'use strict';

const { restoreNames } = require('./restoreNames');

describe('restoreNames', () => {
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

  test('should restore firstName when the property is missing', () => {
    const users = [
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Mike');
  });

  test('should restore firstName for multiple users', () => {
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

    expect(users[0].firstName).toBe('Jack');
    expect(users[1].firstName).toBe('Mike');
  });

  test('should preserve an existing firstName', () => {
    const users = [
      {
        firstName: 'John',
        lastName: 'Smith',
        fullName: 'John Smith',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('John');
  });

  test('should return undefined', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    expect(restoreNames(users)).toBeUndefined();
  });

  test('should handle an empty array', () => {
    const users = [];

    expect(restoreNames(users)).toBeUndefined();
    expect(users).toEqual([]);
  });

  test('should restore firstName when it is an empty string', () => {
    const users = [
      {
        firstName: '',
        lastName: 'Brown',
        fullName: 'Alice Brown',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Alice');
  });
});
