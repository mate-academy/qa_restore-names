/* eslint-disable max-len */
'use strict';

const { restoreNames } = require('./restoreNames');

describe('restoreNames', () => {
  test('should restore firstName from fullName when firstName is undefined', () => {
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

  test('should restore firstName from fullName when firstName is missing', () => {
    const users = [
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Mike');
  });

  test('should not modify users that already have firstName', () => {
    const users = [
      {
        firstName: 'Sarah',
        lastName: 'Connor',
        fullName: 'Sarah Connor',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Sarah');
  });

  test('should correctly process multiple users', () => {
    const users = [
      {
        lastName: 'Smith',
        fullName: 'Anna Smith',
      },
      {
        firstName: 'Ben',
        lastName: 'Stone',
        fullName: 'Ben Stone',
      },
      {
        firstName: undefined,
        lastName: 'Brown',
        fullName: 'Tom Brown',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Anna');
    expect(users[1].firstName).toBe('Ben');
    expect(users[2].firstName).toBe('Tom');
  });

  test('should do nothing for an empty array', () => {
    const users = [];

    restoreNames(users);

    expect(users).toEqual([]);
  });
});
