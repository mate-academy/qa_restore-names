'use strict';

const { restoreNames } = require('./restoreNames');

describe('restoreNames', () => {
  it('should return the full name if given both first and last names', () => {
    const users = [
      {
        firstName: 'John', lastName: 'Doe',
      },
      {
        firstName: 'Jane', lastName: 'Smith',
      },
    ];
    const result = restoreNames(users);

    expect(result).toEqual([
      {
        firstName: 'John', lastName: 'Doe', fullName: 'John Doe',
      },
      {
        firstName: 'Jane', lastName: 'Smith', fullName: 'Jane Smith',
      },
    ]);
  });

  it('should restore first name from fullName if first name is missing', () => {
    const users = [
      {
        firstName: null, lastName: 'Holy', fullName: 'Jack Holy',
      },
      {
        firstName: undefined, lastName: 'Johnson', fullName: 'Bob Johnson',
      },
    ];

    const result = restoreNames(users);

    expect(result).toEqual([
      {
        firstName: 'Jack', lastName: 'Holy', fullName: 'Jack Holy',
      },
      {
        firstName: 'Bob', lastName: 'Johnson', fullName: 'Bob Johnson',
      },
    ]);
  });

  it('should return an empty string if both names are missing', () => {
    const users = [
      {
        firstName: null, lastName: null,
      },
      {
        firstName: undefined, lastName: undefined,
      },
    ];
    const result = restoreNames(users);

    expect(result).toEqual([
      {
        firstName: null, lastName: null, fullName: '',
      },
      {
        firstName: undefined, lastName: undefined, fullName: '',
      },
    ]);
  });
});
