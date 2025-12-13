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

  it('should handle names with single word fullName', () => {
    const users = [
      {
        firstName: '', lastName: '', fullName: 'Madonna',
      },
      {
        firstName: '', lastName: '', fullName: 'Prince',
      },
    ];

    const restoredUsers = restoreNames(users);

    expect(restoredUsers).toEqual([
      {
        firstName: 'Madonna', lastName: '', fullName: 'Madonna',
      },
      {
        firstName: 'Prince', lastName: '', fullName: 'Prince',
      },
    ]);
  });

  it('should handle if fullName is empty', () => {
    const users = [
      {
        firstName: '', lastName: '', fullName: undefined,
      },
      {
        firstName: 'Elton', lastName: '', fullName: undefined,
      },
    ];

    const restoredUsers = restoreNames(users);

    expect(restoredUsers).toEqual([
      {
        firstName: '', lastName: '', fullName: undefined,
      },
      {
        firstName: 'Elton', lastName: '', fullName: undefined,
      },
    ]);
  });
});
