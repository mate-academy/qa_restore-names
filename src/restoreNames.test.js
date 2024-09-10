'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should be declared', () => {
    expect(restoreNames)
      .toBeInstanceOf(Function);
  });

  it('should return nothing', () => {
    expect(restoreNames([]))
      .toBeUndefined();
  });

  it('should throw Error if fullName is undefined', () => {
    const users = [
      {
        firstName: null,
      },
    ];

    expect(() => restoreNames(users))
      .toThrow();
  });

  it(`shouldn't restore firstName if it has value`, () => {
    const users = [
      {
        lastName: 'Vader',
        firstName: 'Dart',
        fullName: 'Dar Vader',
      },
      {
        lastName: 'Konor',
        firstName: 'Sarah',
        fullName: 'Sara Konor',
      },
    ];

    restoreNames(users);

    expect(users)
      .toEqual([
        {
          lastName: 'Vader',
          firstName: 'Dart',
          fullName: 'Dar Vader',
        },
        {
          lastName: 'Konor',
          firstName: 'Sarah',
          fullName: 'Sara Konor',
        },
      ]);
  });

  it('should restore firstName if its value is undefined', () => {
    const users = [
      {
        lastName: 'Vader',
        firstName: 'Dart',
        fullName: 'Dart Vader',
      },
      {
        lastName: 'Konor',
        firstName: undefined,
        fullName: 'Sarah Konor',
      },
    ];

    restoreNames(users);

    expect(users)
      .toEqual([
        {
          lastName: 'Vader',
          firstName: 'Dart',
          fullName: 'Dart Vader',
        },
        {
          lastName: 'Konor',
          firstName: 'Sarah',
          fullName: 'Sarah Konor',
        },
      ]);
  });

  it(`should restore firstName if such property doesn't exist`, () => {
    const users = [
      {
        lastName: 'Vader',
        fullName: 'Dart Vader',
      },
      {
        lastName: 'Konor',
        firstName: 'Sarah',
        fullName: 'Sarah Konor',
      },
    ];

    restoreNames(users);

    expect(users)
      .toEqual([
        {
          lastName: 'Vader',
          firstName: 'Dart',
          fullName: 'Dart Vader',
        },
        {
          lastName: 'Konor',
          firstName: 'Sarah',
          fullName: 'Sarah Konor',
        },
      ]);
  });
});
