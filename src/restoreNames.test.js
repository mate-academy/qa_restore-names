'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it(`'restoreNames' should be declarated`, () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it(`'firstName' should be 'Nazar' if 'firstName' is undefined`, () => {
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

  it(`'firstName' should be 'Nazar' if there is no 'firstName'`, () => {
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

  it(`'firstName's should be 'Nazar' and 'Oleksandr' 
  if there are 2 users with 'firstName' problem`, () => {
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
    ];

    restoreNames(users);

    const actual = users[0].firstName + ' '
    + users[1].firstName;
    const expected = 'Nazar Oleksandr';

    expect(actual).toEqual(expected);
  });

  it(`'firstName' should be 'Oleg' if 'firstName' is 'Oleg' 
  and 'fullName' is 'Nazar Bodak'`, () => {
    const users = [
      {
        firstName: 'Oleg',
        lastName: 'Bodak',
        fullName: 'Nazar Bodak',
      },
    ];

    restoreNames(users);

    const actual = users[0].firstName;
    const expected = 'Oleg';

    expect(actual).toEqual(expected);
  });
});
