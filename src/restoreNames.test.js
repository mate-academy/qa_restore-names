'use strict';

const { restoreNames } = require('./restoreNames');

describe('restoreNames', () => {
  it('should correctly return an empty array', () => {
    const user = [];

    restoreNames(user);
    expect(user).toEqual([]);
  });

  it('should restore firstName from fullname when is missning', () => {
    const users = [
      {
        lastName: 'Holy', fullName: 'Jack Holy',
      },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe('Jack');
  });

  it('should restore firstName from fullname when is undefined', () => {
    const users = [
      {
        firstName: undefined, lastName: 'Holy', fullName: 'Jack Holy',
      },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe('Jack');
  });

  it('should return firstName if it already exist', () => {
    const users = [
      {
        firstName: 'Alice', lastName: 'Holy', fullName: 'Jack Holy',
      },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe('Alice');
  });

  it('should not modify users array length', () => {
    const users = [
      {
        firstName: undefined, lastName: 'Smith', fullName: 'John Smith',
      },
      {
        lastName: 'Doe', fullName: 'Jane Doe',
      },
    ];
    const originalLenght = users.length;

    restoreNames(users);
    expect(users.length).toBe(originalLenght);
  });
});
