'use strict';

const { restoreNames } = require('./restoreNames');

describe('restoreNames', () => {
  // const { restoreNames } = require('./restoreNames');

  it('should ', () => {

  });

  it('should set firstName from fullName if firstName is undefined', () => {
    const users = [
      {
        firstName: undefined, lastName: 'Smith', fullName: 'Alice Smith',
      },
      {
        firstName: undefined, lastName: 'Brown', fullName: 'John Brown',
      },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe('Alice');
    expect(users[1].firstName).toBe('John');
  });

  it('should not modify users who already have a firstName', () => {
    const users = [
      {
        firstName: 'Emily', lastName: 'Clark', fullName: 'Emily Clark',
      },
      {
        firstName: 'David', lastName: 'Johnson', fullName: 'David Johnson',
      },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe('Emily');
    expect(users[1].firstName).toBe('David');
  });

  it('should handle an empty array without errors', () => {
    const users = [];

    restoreNames(users);
    expect(users).toEqual([]);
  });
});
