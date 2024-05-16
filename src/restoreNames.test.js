'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should be declared', () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it('should restore if firstName is undefined', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    const expectedResult = [
      {
        firstName: 'Jack',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    restoreNames(users);

    expect(users).toEqual(expectedResult);
  });

  it('should restore if no firstName field', () => {
    const users = [
      {
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    const expectedResult = [
      {
        firstName: 'Jack',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    restoreNames(users);

    expect(users).toEqual(expectedResult);
  });

  it('should not change if firstName field exist', () => {
    const users = [
      {
        firstName: 'Ivan',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    const expectedResult = [
      {
        firstName: 'Ivan',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    restoreNames(users);

    expect(users).toEqual(expectedResult);
  });
});
