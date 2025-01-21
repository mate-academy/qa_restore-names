/* eslint-disable max-len */
'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should restore firstName from fullName when firstName is undefined', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
      {
        firstName: undefined,
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Jack');
    expect(users[1].firstName).toBe('Mike');
  });

  it('should not change firstName if it is already set', () => {
    const users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        fullName: 'John Doe',
      },
      {
        firstName: 'Jane',
        lastName: 'Doe',
        fullName: 'Jane Doe',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('John');
    expect(users[1].firstName).toBe('Jane');
  });

  it('should not modify users who already have a valid firstName', () => {
    const users = [
      {
        firstName: 'Jack',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
      {
        firstName: 'Mike',
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Jack');
    expect(users[1].firstName).toBe('Mike');
  });

  it('should not alter other properties of the user object', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
      {
        firstName: undefined,
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    const originalUsers = JSON.parse(JSON.stringify(users)); // create a deep copy

    restoreNames(users);

    // Checking if only firstName is updated and others remain unchanged
    expect(users[0].firstName).toBe('Jack');
    expect(users[1].firstName).toBe('Mike');
    expect(users[0].lastName).toBe(originalUsers[0].lastName);
    expect(users[1].lastName).toBe(originalUsers[1].lastName);
    expect(users[0].fullName).toBe(originalUsers[0].fullName);
    expect(users[1].fullName).toBe(originalUsers[1].fullName);
  });

  it('should handle an empty array gracefully', () => {
    const users = [];

    restoreNames(users);
    expect(users).toEqual([]);
  });

  it('should work if fullName is already correct', () => {
    const users = [
      {
        firstName: 'Jack',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
      {
        firstName: 'Mike',
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Jack');
    expect(users[1].firstName).toBe('Mike');
  });
});
