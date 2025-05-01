'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should restore missing firstName from fullName', () => {
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

  it('should not modify firstName if already present', () => {
    const users = [
      {
        firstName: 'Alice',
        lastName: 'Walker',
        fullName: 'Alice Walker',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Alice');
  });

  it('should restore firstName for multiple users correctly', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Smith',
        fullName: 'John Smith',
      },
      {
        lastName: 'Brown',
        fullName: 'Lisa Brown',
      },
      {
        firstName: 'Emily',
        lastName: 'Stone',
        fullName: 'Emily Stone',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('John');
    expect(users[1].firstName).toBe('Lisa');
    expect(users[2].firstName).toBe('Emily');
  });

  it('should not return anything', () => {
    const users = [
      {
        lastName: 'Fox',
        fullName: 'Emma Fox',
      },
    ];

    const result = restoreNames(users);

    expect(result).toBeUndefined();
  });
});
