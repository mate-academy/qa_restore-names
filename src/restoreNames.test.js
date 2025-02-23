'use strict';

describe('restoreNames function test', () => {
  const { restoreNames } = require('./restoreNames');

  test('Should restore first name from full name', () => {
    const users = [
      {
        firstName: '', lastName: 'Doe', fullName: 'John Doe',
      },
      {
        firstName: '', lastName: 'Smith', fullName: 'Jane Smith',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'John', lastName: 'Doe', fullName: 'John Doe',
      },
      {
        firstName: 'Jane', lastName: 'Smith', fullName: 'Jane Smith',
      },
    ]);
  });

  test('Shold not change first if they are already set', () => {
    const users = [
      {
        firstName: 'John', lastName: 'Doe', fullName: 'John Doe',
      },
      {
        firstName: 'Jane', lastName: 'Smith', fullName: 'Jane Smith',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'John', lastName: 'Doe', fullName: 'John Doe',
      },
      {
        firstName: 'Jane', lastName: 'Smith', fullName: 'Jane Smith',
      },
    ]);
  });

  test('Should handle empty array', () => {
    const users = [];

    restoreNames(users);

    expect(users).toEqual([]);
  });

  test('Should handle empty full name', () => {
    const users = [
      {
        firstName: '', lastName: '', fullName: '',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: '', lastName: '', fullName: '',
      },
    ]);
  });
});
