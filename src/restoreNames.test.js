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

  it('restores only missing firstName in mixed users', () => {
    const mixedUsers = [
      {
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
      {
        firstName: 'Already',
        lastName: 'Exists',
        fullName: 'Already Exists',
      },
      {
        firstName: undefined,
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    const expectedMixedUsers = [
      {
        firstName: 'Jack',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
      {
        firstName: 'Already',
        lastName: 'Exists',
        fullName: 'Already Exists',
      },
      {
        firstName: 'Mike',
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(mixedUsers);

    expect(mixedUsers).toEqual(expectedMixedUsers);
  });
});
