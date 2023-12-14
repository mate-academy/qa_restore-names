'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it(`should be declared`, () => {
    expect(restoreNames)
      .toBeInstanceOf(Function);
  });

  it(`should calls without throw an error`, () => {
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

    expect(() => restoreNames(users))
      .not.toThrow();
  });

  it(`should add correct firstNames`, () => {
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

    const correctedUsers = [
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

    expect(users)
      .toEqual(correctedUsers);
  });
});
