'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should restore firstName for users with undefined firstName', () => {
    const users = [
      {
        firstName: undefined, lastName: 'Holy', fullName: 'Jack Holy',
      },
    ];

    expect(users[0]).toHaveProperty('firstName', undefined);

    restoreNames(users);

    expect(users[0]).toHaveProperty('firstName', 'Jack');
  });

  it('should restore firstName for users with missed firstName', () => {
    const users = [
      {
        lastName: 'Holy', fullName: 'Jack Holy',
      },
    ];

    expect(users[0]).not.toHaveProperty('firstName');

    restoreNames(users);

    expect(users[0]).toHaveProperty('firstName', 'Jack');
  });

  it('should be a void function', () => {
    const users = [
      {
        firstName: undefined, lastName: 'Holy', fullName: 'Jack Holy',
      },
    ];
    const result = restoreNames(users);

    expect(result).toBe(undefined);
  });

  it('should not modify firstName for users with existing firstName', () => {
    const users = [
      {
        firstName: 'John', lastName: 'Doe', fullName: 'Joe Doe',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('John');
  });

  it('should handle empty array of users', () => {
    const users = [];

    restoreNames(users);

    expect(users).toEqual([]);
  });

  it('should handle multiple objects in array', () => {
    const users = [
      {
        firstName: undefined, lastName: 'Holy', fullName: 'Jack Holy',
      },
      {
        lastName: 'Adams', fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);

    expect(users[0]).toHaveProperty('firstName', 'Jack');
    expect(users[1]).toHaveProperty('firstName', 'Mike');
  });
});
