'use strict';

const { restoreNames } = require('./restoreNames');

describe('restoreNames', () => {
  it('should set firstName from fullName when firstName is missing', () => {
    const users = [
      {
        fullName: 'John Doe', lastName: 'Doe',
      },
      {
        fullName: 'Alice Smith', lastName: 'Smith',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('John');
    expect(users[1].firstName).toBe('Alice');
  });

  it('should not change firstName if it already exists', () => {
    const users = [
      {
        firstName: 'Bob', fullName: 'Robert Brown', lastName: 'Brown',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Bob'); // не должен перезаписаться
  });

  it('should handle undefined firstName correctly', () => {
    const users = [
      {
        firstName: undefined, fullName: 'Charlie Black', lastName: 'Black',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Charlie');
  });

  it('should not fail if users array is empty', () => {
    const users = [];

    restoreNames(users);

    expect(users).toEqual([]);
  });

  it('should only set the first word from fullName as firstName', () => {
    const users = [
      {
        fullName: 'Anna Maria Lopez', lastName: 'Lopez',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Anna'); // только первое слово
  });
});
