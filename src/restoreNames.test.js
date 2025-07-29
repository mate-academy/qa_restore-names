'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should be declared', () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it(`should restore user${'`s'} first name`, () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    restoreNames(users);

    const userFirstName = users[0].firstName;

    expect(userFirstName).toBe('Jack');
  });

  it(`should restore 'firstName' and user${'`s'} first name`, () => {
    const users = [
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);

    const userFirstName = users[0].firstName;

    expect(userFirstName).toBe('Mike');
  });
});
