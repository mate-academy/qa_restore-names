'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it(`'restoreNames' should be declarated`, () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it(`if 'firstName' is undefined`, () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Bodak',
        fullName: 'Nazar Bodak',
      },
    ];

    restoreNames(users);

    const actual = users[0].firstName;
    const expected = 'Nazar';

    expect(actual).toEqual(expected);
  });

  it(`if there is no 'firstName'`, () => {
    const users = [
      {
        lastName: 'Bodak',
        fullName: 'Nazar Bodak',
      },
    ];

    restoreNames(users);

    const actual = users[0].firstName;
    const expected = 'Nazar';

    expect(actual).toEqual(expected);
  });

  it(`if there are 3 users with 'firstName' problem`, () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Bodak',
        fullName: 'Nazar Bodak',
      },
      {
        lastName: 'Oles',
        fullName: 'Oleksandr Oles',
      },
      {
        firstName: undefined,
        lastName: 'Poroshenko',
        fullName: 'Petro Poroshenko',
      },

    ];

    restoreNames(users);

    const actual = users[0].firstName + ' '
    + users[1].firstName + ' ' + users[2].firstName;
    const expected = 'Nazar Oleksandr Petro';

    expect(actual).toEqual(expected);
  });
});
