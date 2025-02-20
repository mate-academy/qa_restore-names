'use strict';

const { restoreNames } = require('./restoreNames');

describe('restoreNames', () => {
  it('should be declared', () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it('should restore firstName if it is missing', () => {
    const users = [
      {
        fullName: 'Jack Holy',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Jack');
  });

  it('should restore firstName if it is undefined', () => {
    const users = [
      {
        firstName: undefined,
        fullName: 'Jack Holy',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Jack');
  });

  it('should handle multiple users correctly', () => {
    const users = [
      {
        fullName: 'Jack Holy',
      },
      {
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        fullName: 'Jack Holy', firstName: 'Jack',
      },
      {
        fullName: 'Mike Adams', firstName: 'Mike',
      },
    ]);
  });
});
