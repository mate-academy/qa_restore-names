'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  const usersMock = [
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
    const usersForTesting = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
      {
        firstName: undefined,
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    expect(restoreNames(usersForTesting)).toBeUndefined();
  });

  it(`should return the correct value if the`
    + ` 'firstName' field is missing`, () => {
    const usersForTesting = [
      {
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(usersForTesting);

    expect(usersForTesting).toEqual(usersMock);
  });

  it(`should return the correct value if the`
    + ` 'firstName' === undefined`, () => {
    const usersForTesting = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
      {
        firstName: undefined,
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(usersForTesting);

    expect(usersForTesting).toEqual(usersMock);
  });
});
