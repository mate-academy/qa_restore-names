'use strict';

describe('restoreNames function test', () => {
  const { restoreNames } = require('./restoreNames');

  test('Should restore first name from full name when firstName property is missing', () => {
    const users = [
      // missing firstName property entirely
      {
        lastName: 'Doe', fullName: 'John Doe',
      },
      // missing firstName property entirely
      {
        lastName: 'Smith', fullName: 'Jane Smith',
      },
    ];

    const originalArray = users;
    const originalUser0 = users[0];

    const ret = restoreNames(users);

    // function returns undefined
    expect(ret).toBeUndefined();
    // in-place mutation: same array and same object references
    expect(users).toBe(originalArray);
    expect(users[0]).toBe(originalUser0);

    expect(users).toEqual([
      {
        firstName: 'John', lastName: 'Doe', fullName: 'John Doe',
      },
      {
        firstName: 'Jane', lastName: 'Smith', fullName: 'Jane Smith',
      },
    ]);
  });

  test('Should restore first name when firstName is explicitly undefined', () => {
    const users = [
      {
        firstName: undefined, lastName: 'Brown', fullName: 'Jack Brown',
      },
    ];

    const originalUser0 = users[0];
    const ret = restoreNames(users);

    expect(ret).toBeUndefined();
    expect(users[0]).toBe(originalUser0);
    expect(users).toEqual([
      {
        firstName: 'Jack', lastName: 'Brown', fullName: 'Jack Brown',
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

    const originalUser0 = users[0];
    const ret = restoreNames(users);

    expect(ret).toBeUndefined();
    expect(users[0]).toBe(originalUser0);
    expect(users).toEqual([
      {
        firstName: '', lastName: '', fullName: '',
      },
    ]);
  });

  test('Should restore when firstName is empty string (falsy)', () => {
    const users = [
      {
        firstName: '', lastName: 'Walker', fullName: 'Neo Walker',
      },
    ];

    const originalUser0 = users[0];
    const ret = restoreNames(users);

    expect(ret).toBeUndefined();
    expect(users[0]).toBe(originalUser0);
    expect(users).toEqual([
      {
        firstName: 'Neo', lastName: 'Walker', fullName: 'Neo Walker',
      },
    ]);
  });
});
