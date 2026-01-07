'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  const arrayOfUsersButRaw = [
    {
      firstName: 'Jack',
      lastName: 'Joyce',
      fullName: 'Jack Joyce',
    },
    {
      lastName: 'Faden',
      fullName: 'Jesse Faden',
    },
    {
      lastName: 'Faden',
      fullName: 'Dylan Faden',
    },
  ];

  const arrayOfUsers = [
    {
      firstName: 'Jack',
      lastName: 'Joyce',
      fullName: 'Jack Joyce',
    },
    {
      firstName: 'Jesse',
      lastName: 'Faden',
      fullName: 'Jesse Faden',
    },
    {
      firstName: 'Dylan',
      lastName: 'Faden',
      fullName: 'Dylan Faden',
    },
  ];

  it('should be declared', () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it('should not modify an empty array', () => {
    const array = [];

    restoreNames(array);

    expect(array).toEqual([]);
  });

  it(`should not modify objects where field 'firstName' isn't empty`, () => {
    const array = [
      {
        firstName: 'Jack',
        lastName: 'Joyce',
        fullName: 'Jack Joyce',
      },
    ];

    restoreNames(array);

    expect(array).toEqual(array);
  });

  it(`should restore missing 'firstName' fields from 'fullName'`, () => {
    const array = [
      {
        lastName: 'Faden',
        fullName: 'Jesse Faden',
      },
    ];

    restoreNames(array);

    expect(array).toEqual([
      {
        firstName: 'Jesse',
        lastName: 'Faden',
        fullName: 'Jesse Faden',
      },
    ]);
  });

  it('should restore all missing names in the array', () => {
    restoreNames(arrayOfUsersButRaw);

    expect(arrayOfUsersButRaw).toEqual(arrayOfUsers);
  });
});
