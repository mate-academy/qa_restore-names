'use strict';
const { restoreNames } = require('./restoreNames');

describe('restoreNames', () => {
  it('should restore firstName from fullName when it is missing', () => {
    const users = [
      { firstName: undefined, lastName: 'Holy', fullName: 'Jack Holy' },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe('Jack');
  });
  
  it('should not change firstName if it is already present', () => {
    const users = [
      { firstName: 'John', lastName: 'Doe', fullName: 'John Doe' },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe('John');
  });

  it('should handle multiple users correctly', () => {
    const users = [
      { firstName: undefined, lastName: 'Holy', fullName: 'Jack Holy' },
      { firstName: 'Jane', lastName: 'Doe', fullName: 'Jane Doe' },
      { firstName: undefined, lastName: 'Smith', fullName: 'Will Smith' },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe('Jack');
    expect(users[1].firstName).toBe('Jane');
    expect(users[2].firstName).toBe('Will');
  });

  it('should handle empty user list without errors', () => {
    const users = [];

    restoreNames(users);
    expect(users).toEqual([]);
  });

});
