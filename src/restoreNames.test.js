'use strict';

const { restoreNames } = require('./restoreNames');

describe('restoreNames', () => {
  it('should be declared', () => {
    expect(restoreNames)
      .toBeInstanceOf(Function);
  });

  it('should not return anything', () => {
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

    expect(restoreNames(users))
      .toBeUndefined();
  });

  it('should set correct firstName if firstName is undefiend',
    () => {
      const users = [
        {
          firstName: undefined,
          lastName: 'Holy',
          fullName: 'Jack Holy',
        },
      ];

      restoreNames(users);

      expect(users)
        .toEqual(
          [
            {
              firstName: 'Jack',
              lastName: 'Holy',
              fullName: 'Jack Holy',
            },
          ]
        );
    });

  it('should add firstName key with proper value if its not decalred',
    () => {
      const users = [
        {
          lastName: 'Adams',
          fullName: 'Mike Adams',
        },
      ];

      restoreNames(users);

      expect(users)
        .toEqual(
          [
            {
              firstName: 'Mike',
              lastName: 'Adams',
              fullName: 'Mike Adams',
            },
          ]
        );
    });
});
