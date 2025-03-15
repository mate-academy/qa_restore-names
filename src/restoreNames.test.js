'use strict';

const { restoreNames } = require('./restoreNames');

describe('restoreNames', () => {
  // const { restoreNames } = require('./restoreNames');

  it('function restoreNames should be declared', () => {
    expect(restoreNames).toBeDefined();
    expect(typeof restoreNames).toBe('function');
  });

  it('should return an array', () => {
    const users = [];

    restoreNames(users);
    expect(users).toEqual([]);
  });

  it('should restore firstName if it is empty or undefined', () => {
    const users = [
      {
        firstName: undefined, fullName: 'Jack Holy',
      },
      { fullName: 'Mike Adams' },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe('Jack');
    expect(users[1].firstName).toBe('Mike');
  });

  it('should not overwrite existing firstName', () => {
    const users = [
      {
        firstName: 'John', fullName: 'John Doe',
      },
      {
        firstName: 'Mike', fullName: 'Mike Smith',
      },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe('John');
    expect(users[1].firstName).toBe('Mike');
  });
});
