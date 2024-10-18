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
  ];

  it(`should be declared`, () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it(`should not return anything`, () => {
    expect(restoreNames(users)).toBeUndefined();
  });

  it(`should modify 'user' inside users`
    + `if his key firstName' is 'undefined'`, () => {
    restoreNames(users);

    expect(users[0]).toMatchObject({
      firstName: 'Jack',
      lastName: 'Holy',
      fullName: 'Jack Holy',
    });
  });

  it(`should modify 'user' inside users`
    + `if his key 'firstName' was missed`, () => {
    restoreNames(users);

    expect(users[1]).toMatchObject({
      firstName: 'Mike',
      lastName: 'Adams',
      fullName: 'Mike Adams',
    });
  });
});
