'use strict';

const { restoreNames } = require('./restoreNames');

describe('restoreNames', () => {
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

  it('should restore firstName when it is not present', () => {
    const users = [
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];
    restoreNames(users);
    expect(users[0].firstName).toBe('Mike');
  });

  it('should not change firstName when it is present and correct', () => {
    const users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        fullName: 'John Doe',
      },
    ];
    restoreNames(users);
    expect(users[0].firstName).toBe('John');
  });
it('should work with multiple objects', () => {
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

  it('should return an empty array when input is an empty array', () => {
    const users = [];
    restoreNames(users);
    expect(users).toEqual([]);
  });
});

