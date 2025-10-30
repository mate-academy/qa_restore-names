'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should restore firstName from fullName when it`s undefined', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Daniels',
        fullName: 'Jack Daniels',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Jack');
  });

  it('should restore firstName from fullName when it`s missing', () => {
    const users = [
      {
        lastName: 'Marston',
        fullName: 'John Marston',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('John');
  });

  it('should NOT restore firstName from fullName when it`s defined', () => {
    const users = [
      {
        firstName: 'Mario',
        lastName: 'Super',
        fullName: 'Luigi Super',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Mario');
  });

  it('should handle multiple users array correctly', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Schevchenko',
        fullName: 'Taras Schevchenko',
      },
      {
        lastName: 'Franko',
        fullName: 'Ivan Franko',
      },
      {
        firstName: 'Sarah',
        lastName: 'Connor',
        fullName: 'Sara Connor',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Taras');
    expect(users[1].firstName).toBe('Ivan');
    expect(users[2].firstName).toBe('Sarah');
  });

  it('should handle an empty array', () => {
    const users = [];

    restoreNames(users);

    expect(users).toEqual([]);
  });

  it('should mutate the original array', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'McConaughey',
        fullName: 'Matthew McConaughey',
      },
    ];
    const originalReference = users;

    restoreNames(users);

    expect(users).toBe(originalReference);
    expect(users[0].firstName).toBe('Matthew');
  });
});
