'use strict';

const { restoreNames } = require('./restoreNames');

describe('restoreNames', () => {
  it('should return a users firstname if it is undefined', () => {
    const users = [
      {
        firstName: undefined, lastName: 'Lennon', fullName: 'John Lennon',
      },
    ];

    const restoredUsers = restoreNames(users);

    expect(restoredUsers).toEqual([
      {
        firstName: 'John', lastName: 'Lennon', fullName: 'John Lennon',
      },
    ]);
  });

  it('should return a users lastname if it is undefined', () => {
    const users = [
      {
        firstName: 'John', lastName: undefined, fullName: 'John Lennon',
      },
    ];

    const restoredUsers = restoreNames(users);

    expect(restoredUsers).toEqual([
      {
        firstName: 'John', lastName: 'Lennon', fullName: 'John Lennon',
      },
    ]);
  });

  it('should handle names with only a first name in fullName', () => {
    const users = [
      {
        firstName: '', lastName: '', fullName: 'Madonna',
      },
    ];

    const restoredUsers = restoreNames(users);

    expect(restoredUsers).toEqual([
      {
        firstName: 'Madonna', lastName: '', fullName: 'Madonna',
      },
    ]);
  });
});
