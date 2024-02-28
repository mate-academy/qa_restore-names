'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should be declared', () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it('should restore firstName for users with firstName undefined', () => {
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

  it('should not modify firstName for users with firstName already defined',
    () => {
      const users = [
        {
          firstName: 'John',
          lastName: 'Doe',
          fullName: 'John Doe',
        },
        {
          firstName: 'Alice',
          lastName: 'Smith',
          fullName: 'Alice Smith',
        },
      ];

      restoreNames(users);

      expect(users).toEqual([
        {
          firstName: 'John',
          lastName: 'Doe',
          fullName: 'John Doe',
        },
        {
          firstName: 'Alice',
          lastName: 'Smith',
          fullName: 'Alice Smith',
        },
      ]);
    });

  it('should work with an empty array', () => {
    const users = [];

    restoreNames(users);

    expect(users).toEqual([]);
  });
});
