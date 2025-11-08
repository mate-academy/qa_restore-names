'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');
  const correctUsers = [
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

  it('should not return anything', () => {
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

    expect(restoreNames(users)).toBe(undefined);
  });

  it(`should restore 'firstName' correctly`, () => {
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

    restoreNames(users);

    expect(users).toEqual(correctUsers);
  });

  it(`should restore 'firstName' if it is an empty string`, () => {
    const usersWithEmptyString = [
      {
        firstName: '',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    restoreNames(usersWithEmptyString);

    expect(usersWithEmptyString[0].firstName).toBe('Jack');
  });
});
