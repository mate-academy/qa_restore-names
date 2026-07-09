'use strict';

const { restoreNames } = require('./restoreNames');

describe('restoreNames', () => {
  test('should be declared as a function', () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  test('should restore firstName when is explicitly set to undefined', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Jack',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ]);
  });

  test('should restore firstName when property missing from the object', () => {
    const users = [
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Mike',
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ]);
  });

  test('should not modify firstName if it is already present and valid', () => {
    const users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        fullName: 'John Doe',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'John',
        lastName: 'Doe',
        fullName: 'John Doe',
      },
    ]);
  });

  test('should correctly handle an empty array without errors', () => {
    const users = [];

    restoreNames(users);

    expect(users).toEqual([]);
  });

  test('should process a mixed array of users correctly', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
      {
        firstName: 'Sarah',
        lastName: 'Connor',
        fullName: 'Sarah Connor',
      },
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Jack',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
      {
        firstName: 'Sarah',
        lastName: 'Connor',
        fullName: 'Sarah Connor',
      },
      {
        firstName: 'Mike',
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ]);
  });
});
