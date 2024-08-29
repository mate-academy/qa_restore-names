'use strict';

const { restoreNames } = require('./restoreNames');

describe('restoreNames', () => {
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

  const returnUsers = [
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

  it(`should be declared`, () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it('should return corect firstName', () => {
    restoreNames(users);

    expect(users).toEqual(returnUsers);
  });

  it('should not return anything', () => {
    expect(restoreNames(users)).toBeUndefined();
  });
});
