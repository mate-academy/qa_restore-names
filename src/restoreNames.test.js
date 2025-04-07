'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should be declared as a function', () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it('should restore missing firstName from fullName', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Doe',
        fullName: 'John Doe',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('John');
  });

  it('should not change firstName if it already exists', () => {
    const users = [
      {
        firstName: 'Anna',
        lastName: 'Smith',
        fullName: 'Anna Smith',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Anna');
  });

  it('should handle multiple users with and without firstNames', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Brown',
        fullName: 'Charlie Brown',
      },
      {
        firstName: 'Lucy',
        lastName: 'Van Pelt',
        fullName: 'Lucy Van Pelt',
      },
      {
        lastName: 'Schroeder',
        fullName: 'Linus Schroeder',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Charlie');
    expect(users[1].firstName).toBe('Lucy');
    expect(users[2].firstName).toBe('Linus');
  });

  it('should handle user with fullName containing more than two names', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Garcia',
        fullName: 'Maria Jose Garcia',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Maria');
  });

  it('should not crash on empty array', () => {
    const users = [];

    expect(() => restoreNames(users)).not.toThrow();
  });

  it('should not modify users with empty fullName', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'N/A',
        fullName: '',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('');
  });
});
