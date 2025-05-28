'use strict';

const { restoreNames } = require('./restoreNames');

describe('restoreNames', () => {
  it('should restore firstName from fullName if firstName is undefined', () => {
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

  it('should restore firstName if the field is missing', () => {
    const users = [
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Mike');
  });

  it('should not change firstName if it already exists', () => {
    const users = [
      {
        firstName: 'Jane',
        lastName: 'Doe',
        fullName: 'Jane Doe',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Jane');
  });

  it('should correctly handle multiple users with mixed cases', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'One',
        fullName: 'UserOne One',
      },
      {
        lastName: 'Two',
        fullName: 'UserTwo Two',
      },
      {
        firstName: 'AlreadySet',
        lastName: 'Three',
        fullName: 'AlreadySet Three',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('UserOne');
    expect(users[1].firstName).toBe('UserTwo');
    expect(users[2].firstName).toBe('AlreadySet');
  });

  it('should not throw if array is empty', () => {
    const users = [];

    expect(() => restoreNames(users)).not.toThrow();
  });
});
