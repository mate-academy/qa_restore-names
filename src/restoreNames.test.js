'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should be declared', () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it('should restore the right users firstnames when they are underfined', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
      {
        firstName: undefined,
        lastName: 'Ivanova',
        fullName: 'Anastasiya Ivanova',
      }
    ];

    restoreNames(users);

    const usersFirstNames = users.map(user => user.firstName);

    const expectedResult = [
      {
        firstName: 'Jack',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
      {
        firstName: 'Anastasiya',
        lastName: 'Ivanova',
        fullName: 'Anastasiya Ivanova',
      },
    ];

    const expectedUsersFirstNames = expectedResult.map(user => user.firstName);

    expect(usersFirstNames).toEqual(expectedUsersFirstNames);
  });

  it('should restore the right users firstnames when they are not provided', () => {
    const users = [
      {
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
      {
        lastName: 'Ivanova',
        fullName: 'Anastasiya Ivanova',
      }
    ];

    restoreNames(users);

    const usersFirstNames = users.map(user => user.firstName);

    const expectedResult = [
      {
        firstName: 'Jack',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
      {
        firstName: 'Anastasiya',
        lastName: 'Ivanova',
        fullName: 'Anastasiya Ivanova',
      },
    ];

    const expectedUsersFirstNames = expectedResult.map(user => user.firstName);

    expect(usersFirstNames).toEqual(expectedUsersFirstNames);
  });
});
