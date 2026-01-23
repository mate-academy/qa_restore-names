'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it(`should set the firstName from fullName when firstName is undefined `,
    () => {
      const users = [
        {
          firstName: undefined,
          lastName: 'Holy',
          fullName: 'Jack Holy',
        },
      ];

      restoreNames(users);

      expect(users[0].firstName).toBe('Jack');
    });

  it(`should set the firstName from fullName when firstName
   is not set as property`,
  () => {
    const users = [
      {
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Jack');
  });

  it(`should keep the firstName when firstName has a different
   value than fullName`,
  () => {
    const users = [
      {
        firstName: 'Jack',
        lastName: 'Holy',
        fullName: 'John Holy',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Jack');
  });
});
