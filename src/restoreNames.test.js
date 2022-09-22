'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('firstName restored', () => {
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

    for (const user of users) {
      expect(user).toHaveProperty('firstName');
      expect(user.firstName).toBeDefined();
    }
  });

  it('fullName is missing', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
      },
      {
        lastName: 'Adams',
      },
    ];

    expect(() => {
      restoreNames(users);
    }).toThrow();
  });
});
