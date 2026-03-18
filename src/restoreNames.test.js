'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should restore firstName if it is undefined', () => {
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

  it('should restore firstName from fullName if it is missing', () => {
    const users = [{ lastName: 'Adams', fullName: 'Mike Adams' }];

    restoreNames(users);

    expect(users[0].firstName).toBe('Mike');
  });

  it('should not change existing firstName', () => {
    const users = [
      { firstName: 'John', lastName: 'Doe', fullName: 'Mike Doe' },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('John');
  });

  it('should work correctly with multiple users', () => {
    const users = [
      { lastName: 'Adams', fullName: 'Mike Adams' },
      { firstName: undefined, lastName: 'Holy', fullName: 'Jack Holy' },
    ];

    restoreNames(users);

    expect(users).toEqual([
      { firstName: 'Mike', lastName: 'Adams', fullName: 'Mike Adams' },
      { firstName: 'Jack', lastName: 'Holy', fullName: 'Jack Holy' },
    ]);
  });
});
