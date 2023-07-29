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

  it('should be declared', () => {
    expect(restoreNames)
      .toBeInstanceOf(Function);
  });

  it('should not return anything', () => {
    expect(restoreNames(users))
      .toEqual(undefined);
  });

  it('should set correct "firstName" to users who do not have it or is equal to "undefined"', () => {
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
});
