'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

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
    {
      firstName: 'Rob',
      lastName: 'Warner',
      fullName: 'Robert Warner',
    },
  ];

  it(`should be declared`, () => {
    expect(restoreNames)
      .toBeInstanceOf(Function);
  });

  it(`should overwrite the name if it is 'undefined'`, () => {
    restoreNames(users);

    expect(users[0].firstName)
      .toBe('Jack');
  });

  it(`should add firstName property if it doesn't exist`, () => {
    restoreNames(users);

    expect(users[1].firstName)
      .toBe('Mike');
  });

  it(`should not change firstName property if it exist`, () => {
    restoreNames(users);

    expect(users[2].firstName)
      .toBe('Rob');
  });
});
