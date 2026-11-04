'use strict';

const { restoreNames } = require('./restoreNames');

describe('restoreNames', () => {
  it('should restore a missing firstName', () => {
    const users = [
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Mike',
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ]);
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

  it('should preserve an existing firstName', () => {
    const users = [
      {
        firstName: 'John',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('John');
  });

  it('should use only the first word from fullName', () => {
    const users = [
      {
        fullName: 'Mary Jane Watson',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Mary');
  });

  it('should process all users in a mixed array', () => {
    const users = [
      { firstName: 'Ann', fullName: 'Anna Smith' },
      { fullName: 'Mike Adams' },
      { firstName: undefined, fullName: 'Jack Holy' },
    ];

    restoreNames(users);

    expect(users).toEqual([
      { firstName: 'Ann', fullName: 'Anna Smith' },
      { firstName: 'Mike', fullName: 'Mike Adams' },
      { firstName: 'Jack', fullName: 'Jack Holy' },
    ]);
  });

  it('should handle an empty array', () => {
    const users = [];

    restoreNames(users);

    expect(users).toEqual([]);
  });

  it('should return undefined', () => {
    const users = [{ fullName: 'Mike Adams' }];

    expect(restoreNames(users)).toBeUndefined();
    expect(users[0].firstName).toBe('Mike');
  });

  it('should preserve an empty firstName', () => {
    const users = [
      {
        firstName: '',
        fullName: 'Jack Holy',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('');
  });
});
