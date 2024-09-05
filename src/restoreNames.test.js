'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should restore firstName for users where it is undefined', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Sandzhlavi',
        fullName: 'Oleh Sandzhlavi',
      },
      {
        lastName: 'Savchyk',
        fullName: 'Vasyl Savchyk',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Oleh',
        lastName: 'Sandzhlavi',
        fullName: 'Oleh Sandzhlavi',
      },
      {
        firstName: 'Vasyl',
        lastName: 'Savchyk',
        fullName: 'Vasyl Savchyk',
      },
    ]);
  });

  it('should not modify firstName if it is already set', () => {
    const users = [
      {
        firstName: 'Oleh',
        lastName: 'Sandzhlavi',
        fullName: 'Oleh Sandzhlavi',
      },
      {
        firstName: 'Vasyl',
        lastName: 'Savchyk',
        fullName: 'Vasyl Savchyk',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Oleh',
        lastName: 'Sandzhlavi',
        fullName: 'Oleh Sandzhlavi',
      },
      {
        firstName: 'Vasyl',
        lastName: 'Savchyk',
        fullName: 'Vasyl Savchyk',
      },
    ]);
  });

  it('should handle users with missing fullName', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Sandzhlavi',
      },
      {
        firstName: 'Vasyl',
        lastName: 'Savchyk',
        fullName: 'Vasyl Savchyk',
      },
    ];

    expect(users).toEqual([
      {
        firstName: undefined, // No fullName to restore from
        lastName: 'Sandzhlavi',
      },
      {
        firstName: 'Vasyl',
        lastName: 'Savchyk',
        fullName: 'Vasyl Savchyk',
      },
    ]);
  });

  it('should handle empty user array', () => {
    const users = [];

    restoreNames(users);

    expect(users).toEqual([]); // Should remain an empty array
  });

  it('should handle a user with only fullName and undefined firstName', () => {
    const users = [
      {
        firstName: undefined,
        fullName: 'Oleh Sandzhlavi',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Oleh',
        fullName: 'Oleh Sandzhlavi',
      },
    ]);
  });
});
