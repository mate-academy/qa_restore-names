'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should mutate an array and do not create a new one', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];
    const expected = [
      {
        firstName: 'Jack',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
      {
        firstName: 'Mike',
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);
    expect(users).toEqual(expected);
  });

  it('should return an emty array if users = []', () => {
    const users = [];

    restoreNames(users);
    expect(users).toEqual([]);
  });

  it(`should not modify 'firstName' if it was already in array`, () => {
    const users = [
      {
        firstName: 'Alice', lastName: 'Brown', fullName: 'Alice Brown',
      },
      {
        firstName: 'Bob', lastName: 'Taylor', fullName: 'Bob Taylor',
      },
    ];

    const originalCopy = JSON.parse(JSON.stringify(users));

    restoreNames(users);

    expect(users).toEqual(originalCopy);
  });

  it(`should use 'fullName' if 'fullName' consists only of 1 word`, () => {
    const users = [
      {
        lastName: '',
        fullName: 'Jack',
      },
    ];
    const expected = [
      {
        firstName: 'Jack',
        lastName: '',
        fullName: 'Jack',
      },
    ];

    restoreNames(users);

    expect(users).toEqual(expected);
  });
});
