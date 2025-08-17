'use strict';

const { restoreNames } = require('./restoreNames');

describe('restoreNames', () => {
  it('should restore firstName if it is undefined', () => {
    const users = [
      { firstName: undefined, lastName: 'Holy', fullName: 'Jack Holy' },
      { lastName: 'Adams', fullName: 'Mike Adams' },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Jack');
    expect(users[1].firstName).toBe('Mike');
  });

  it('should not overwrite firstName if it already exists', () => {
    const users = [
      { firstName: 'John', lastName: 'Doe', fullName: 'John Doe' },
      { firstName: 'Alice', lastName: 'Smith', fullName: 'Alice Smith' },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('John');
    expect(users[1].firstName).toBe('Alice');
  });

  it('should handle empty array without throwing errors', () => {
    const users = [];
    expect(() => restoreNames(users)).not.toThrow();
    expect(users).toEqual([]);
  });

  it('should handle users without firstName property at all', () => {
    const users = [
      { lastName: 'Brown', fullName: 'Charlie Brown' },
      { lastName: 'White', fullName: 'Betty White' },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Charlie');
    expect(users[1].firstName).toBe('Betty');
  });

  it('should handle fullName with more than two words correctly', () => {
    const users = [
      { firstName: undefined, lastName: 'Gates', fullName: 'Bill Henry Gates' },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Bill');
  });
});
