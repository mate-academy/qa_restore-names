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
      {
        firstName: undefined,
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
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
    ]);
  });

  it('should not modify users who already have firstName', () => {
    const users = [
      {
        firstName: 'Anna',
        lastName: 'Smith',
        fullName: 'Anna Smith',
      },
      {
        firstName: 'John',
        lastName: 'Doe',
        fullName: 'John Doe',
      },
    ];

    const originalUsers = JSON.parse(JSON.stringify(users));

    restoreNames(users);

    expect(users).toEqual(originalUsers);
  });

  it('should handle empty array without errors', () => {
    const users = [];

    restoreNames(users);
    expect(users).toEqual([]);
  });

  it('should correctly handle users firstName but present fullName', () => {
    const users = [
      {
        lastName: 'White',
        fullName: 'Walter White',
      },
      {
        firstName: undefined,
        lastName: 'Pinkman',
        fullName: 'Jesse Pinkman',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Walter',
        lastName: 'White',
        fullName: 'Walter White',
      },
      {
        firstName: 'Jesse',
        lastName: 'Pinkman',
        fullName: 'Jesse Pinkman',
      },
    ]);
  });

  it('should handle names with multiple spaces correctly', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Stark',
        fullName: 'Tony  Stark',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Tony',
        lastName: 'Stark',
        fullName: 'Tony  Stark',
      },
    ]);
  });
});
