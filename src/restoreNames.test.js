'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should have first name', () => {
    const users = [
      {
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    restoreNames(users);

    expect(users[0]).toHaveProperty('firstName');
  });

  it('firstName should match fullName', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Helen Holy',
      },
    ];

    restoreNames(users);

    expect(users[0]).toHaveProperty('firstName', 'Helen');
  });

  it('should fix multiple objects', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Helen Holy',
      },
      {
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
      {
        firstName: 'Mike',
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Helen',
        lastName: 'Holy',
        fullName: 'Helen Holy',
      },
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

  it('should not change existing firstName', () => {
    const users = [
      {
        firstName: 'Helen',
        lastName: 'Holy',
        fullName: 'Helen Holy',
      },
      {
        firstName: 'Jonny',
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Helen',
        lastName: 'Holy',
        fullName: 'Helen Holy',
      },
      {
        firstName: 'Jonny',
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ]);
  });
});
