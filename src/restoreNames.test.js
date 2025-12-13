'use strict';

const { restoreNames } = require('./restoreNames');

describe('restoreNames', () => {
  it('should restore missing firstName and lastName from fullName', () => {
    const users = [
      {
        firstName: 'John', lastName: 'Doe', fullName: 'John Doe',
      },
      {
        firstName: '', lastName: 'Smith', fullName: 'Jane Smith',
      },
      {
        firstName: 'Alice', lastName: '', fullName: 'Alice Johnson',
      },
      {
        firstName: '', lastName: '', fullName: 'Bob Brown',
      },
      {
        firstName: 'Charlie', lastName: 'Davis', fullName: '',
      },
      {
        firstName: '', lastName: '', fullName: '',
      },
    ];

    const restoredUsers = restoreNames(users);

    expect(restoredUsers).toEqual([
      {
        firstName: 'John', lastName: 'Doe', fullName: 'John Doe',
      },
      {
        firstName: 'Jane', lastName: 'Smith', fullName: 'Jane Smith',
      },
      {
        firstName: 'Alice', lastName: 'Johnson', fullName: 'Alice Johnson',
      },
      {
        firstName: 'Bob', lastName: 'Brown', fullName: 'Bob Brown',
      },
      {
        firstName: 'Charlie', lastName: 'Davis', fullName: '',
      },
      {
        firstName: '', lastName: '', fullName: '',
      },
    ]);
  });

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
