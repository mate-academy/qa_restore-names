'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should be declared', () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it('should restore firstName if it is undefined', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Kostiuk',
        fullName: 'Andrii Kostiuk',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Andrii');
  });

  it('should restore firstName if it is missing', () => {
    const users = [
      {
        lastName: 'Kostiuk',
        fullName: 'Andrii Kostiuk',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Andrii');
  });

  it('should not change firstName if it is exist', () => {
    const users = [
      {
        firstName: 'Andrii',
        lastName: 'Kostiuk',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Andrii');
  });

  it('should return undefined', () => {
    const users = [];

    expect(restoreNames(users)).toBeUndefined();
  });

  it('should restore firstName for multiple users', () => {
    const users = [
      {
        firstName: undefined,
        fullName: 'Daniel Lee',
      },
      { fullName: 'Emma Watson' },
      {
        firstName: 'Frank',
        fullName: 'Frank Castle',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Daniel',
        fullName: 'Daniel Lee',
      },
      {
        firstName: 'Emma',
        fullName: 'Emma Watson',
      },
      {
        firstName: 'Frank',
        fullName: 'Frank Castle',
      },
    ]);
  });

  it('should throw error if firstName and fullName is missing', () => {
    const users = [{ lastName: 'Black' }];

    expect(() => restoreNames(users)).toThrow();
  });
});
