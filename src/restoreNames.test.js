'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should restore firstName from fullName if firstName is missing', () => {
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

    expect(users).toEqual([
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

  it('should not change users that already have firstName', () => {
    const users = [
      {
        firstName: 'Anna',
        lastName: 'Brown',
        fullName: 'Kate Brown',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Anna',
        lastName: 'Brown',
        fullName: 'Kate Brown',
      },
    ]);
  });

  it('should not return anything', () => {
    const users = [
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    const result = restoreNames(users);

    expect(result).toBeUndefined();
  });
});
