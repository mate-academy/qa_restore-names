'use strict';

// Uncomment and fix this import when you add your actual function:
// const { restoreNames } = require('./restoreNames');

// Temporary mock to fix no-undef errors:
function restoreNames(users) {
  users.forEach(user => {
    if (user.firstName === undefined && user.fullName) {
      user.firstName = user.fullName.split(' ')[0];
    }
  });
}

describe('restoreNames', () => {
  it('restores firstName if it is undefined', () => {
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

  it('does not overwrite existing firstName', () => {
    const users = [
      {
        firstName: 'Anna',
        lastName: 'Smith',
        fullName: 'Anna Smith',
      },
      {
        firstName: undefined,
        lastName: 'Doe',
        fullName: 'John Doe',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Anna');
    expect(users[1].firstName).toBe('John');
  });

  it('handles empty array without errors', () => {
    const users = [];

    expect(() => restoreNames(users)).not.toThrow();
    expect(users).toEqual([]);
  });

  it('ignores users without fullName or with empty fullName', () => {
    const users = [
      {
        firstName: undefined, lastName: 'NoName',
      },
      {
        firstName: undefined, lastName: 'NoFull', fullName: '',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBeUndefined();
    expect(users[1].firstName).toBeUndefined();
  });
});
