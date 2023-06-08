'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should be declared', () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it('should restore undefined firstNames', () => {
    const users = [
      {
        firstName: undefined, lastName: 'Smith', fullName: 'Jane Smith',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Jane', lastName: 'Smith', fullName: 'Jane Smith',
      },
    ]);
  });

  it('should restore empty firstNames', () => {
    const users = [
      {
        firstName: '', lastName: 'Lee', fullName: 'Anna Lee',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Anna', lastName: 'Lee', fullName: 'Anna Lee',
      },
    ]);
  });

  it('should restore missed firstNames', () => {
    const users = [
      {
        lastName: 'Brown', fullName: 'Michael Brown',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Michael', lastName: 'Brown', fullName: 'Michael Brown',
      },
    ]);
  });

  it('should work with correct firstNames', () => {
    const users = [
      {
        firstName: 'Mark', lastName: 'Johnson', fullName: 'Mark Johnson',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Mark', lastName: 'Johnson', fullName: 'Mark Johnson',
      },
    ]);
  });

  it('should restore firstNames for multiple users', () => {
    const users = [
      {
        firstName: undefined, lastName: 'Smith', fullName: 'Jane Smith',
      },
      {
        firstName: '', lastName: 'Lee', fullName: 'Anna Lee',
      },
      {
        lastName: 'Brown', fullName: 'Michael Brown',
      },
      {
        firstName: 'Mark', lastName: 'Johnson', fullName: 'Mark Johnson',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Jane', lastName: 'Smith', fullName: 'Jane Smith',
      },
      {
        firstName: 'Anna', lastName: 'Lee', fullName: 'Anna Lee',
      },
      {
        firstName: 'Michael', lastName: 'Brown', fullName: 'Michael Brown',
      },
      {
        firstName: 'Mark', lastName: 'Johnson', fullName: 'Mark Johnson',
      },
    ]);
  });
});
