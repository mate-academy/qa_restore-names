'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it(`Function 'restoreNames' should be declared`, () => {
    expect(restoreNames)
      .toBeInstanceOf(Function);
  });

  it(`First name 'Jack' and 'Adams'`, () => {
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

    expect(users)
      .toEqual([
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
      ]);
  });

  // write tests here
});
