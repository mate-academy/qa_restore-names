'use strict';

const { restoreNames } = require('./restoreNames');

describe('restoreNames', () => {
  it('should restore firstName from fullName if firstName is undefined', () => {
    const users = [
      {
        firstName: undefined, lastName: 'Holy', fullName: 'Jack Holy',
      },
      {
        firstName: undefined, lastName: 'Adams', fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Jack', lastName: 'Holy', fullName: 'Jack Holy',
      },
      {
        firstName: 'Mike', lastName: 'Adams', fullName: 'Mike Adams',
      },
    ]);
  });

  it('should not modify users with existing firstName', () => {
    const users = [
      {
        firstName: 'Sarah', lastName: 'Connor', fullName: 'Sarah Connor',
      },
      {
        firstName: 'John', lastName: 'Doe', fullName: 'John Doe',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Sarah', lastName: 'Connor', fullName: 'Sarah Connor',
      },
      {
        firstName: 'John', lastName: 'Doe', fullName: 'John Doe',
      },
    ]);
  });

  it('should handle empty array', () => {
    const users = [];

    restoreNames(users);

    expect(users).toEqual([]);
  });

  it('should handle users with missing fullName gracefully', () => {
    const users = [
      {
        firstName: undefined, lastName: 'Smith', fullName: undefined,
      },
      {
        firstName: undefined, lastName: 'Brown', fullName: null,
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: undefined, lastName: 'Smith', fullName: undefined,
      },
      {
        firstName: undefined, lastName: 'Brown', fullName: null,
      },
    ]);
  });
});
