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

    // eslint-disable-next-line max-len
    const originalUsers = JSON.parse(JSON.stringify(users)); // Kopiujemy strukturę

    restoreNames(users);

    expect(users).toEqual(originalUsers);
  });

  it('should handle an empty array without errors', () => {
    const users = [];

    restoreNames(users);
    expect(users).toEqual([]);
  });

  it('should correctly restore firstName when only fullName is present', () => {
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
        fullName: 'Tony  Stark', // Podwójna spacja między imieniem a nazwiskiem
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
