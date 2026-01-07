'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  let arrayOfUsersButRaw;
  let arrayOfUsers;

  beforeEach(() => {
    arrayOfUsersButRaw = [
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

    arrayOfUsers = [
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
  });

  it('should be declared', () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it('should not modify an empty array', () => {
    const array = [];

    restoreNames(array);

    expect(array).toEqual([]);
  });

  it(`should not modify objects where field 'firstName' isn't empty`, () => {
    const arrayCopy = arrayOfUsersButRaw.slice(0, 1);

    restoreNames(arrayCopy);

    expect(arrayCopy[0]).toEqual(arrayOfUsers[0]);
  });

  it(`should restore missing 'firstName' fields from 'fullName'`, () => {
    const arrayCopy = arrayOfUsersButRaw.slice(1);

    restoreNames(arrayCopy);

    expect(arrayCopy).toEqual(arrayOfUsers.slice(1));
  });

  it('should restore all missing names in the array', () => {
    restoreNames(arrayOfUsersButRaw);

    expect(arrayOfUsersButRaw).toEqual(arrayOfUsers);
  });
});
