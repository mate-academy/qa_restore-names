'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it(`should be declared`, () => {
    expect(restoreNames)
      .toBeInstanceOf(Function);
  });

  test('returns correct values with undefined first name', () => {
    const user = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    restoreNames(user);

    expect(user).toEqual([{
      firstName: 'Jack',
      lastName: 'Holy',
      fullName: 'Jack Holy',
    },
    ]);
  });

  test('returns correct values with no first name property in input', () => {
    const user = [
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(user);

    expect(user).toEqual([{
      firstName: 'Mike',
      lastName: 'Adams',
      fullName: 'Mike Adams',
    },
    ]);
  });

  test('returns correct values with multiple users in array', () => {
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

    expect(users).toEqual([{
      firstName: 'Jack',
      lastName: 'Holy',
      fullName: 'Jack Holy',
    },
    {
      firstName: 'Mike',
      lastName: 'Adams',
      fullName: 'Mike Adams',
    },
    ]);
  });
});
