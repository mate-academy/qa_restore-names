'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should restore name, if it is lost', () => {
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
        firstName: 'Joe',
        lastName: 'Doe',
        fullName: 'Joe Doe',
      },
    ];

    const expectedUsers = [
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

      {
        firstName: 'Joe',
        lastName: 'Doe',
        fullName: 'Joe Doe',
      },
    ];

    restoreNames(users);

    expect(users).toEqual(expectedUsers);
  });

  it('should not modify users with existing firstName', () => {
    const users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        fullName: 'John Doe',
      },
    ];

    const expected = [...users];

    restoreNames(users);
    expect(users).toEqual(expected);
  });

  it('should handle empty array', () => {
    const users = [];
    const expected = [];

    restoreNames(users);
    expect(users).toEqual(expected);
  });
});
