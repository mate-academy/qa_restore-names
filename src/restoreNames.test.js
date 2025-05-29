'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should restore firstName if it is equal to undefined', () => {
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

  it('should restore firstName if it is missing', () => {
    const users = [
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe('Mike');
  });

  it('should do nothing if firstName is exists', () => {
    const users = [
      {
        firstName: 'John',
        lastName: 'Smith',
        fullName: 'John Smith',
      },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe('John');
  });

  it('should work correctly with multiple users in input', () => {
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
      {
        firstName: 'John',
        lastName: 'Smith',
        fullName: 'John Smith',
      },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe('Jack');
    expect(users[1].firstName).toBe('Mike');
    expect(users[2].firstName).toBe('John');
  });

  // write tests here
});
