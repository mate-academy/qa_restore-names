'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it(`should restore the first name for entry that
    is missing the firstName property`, () => {
    const users = [
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);

    expect(users).toBe([{
      firstName: 'Mike',
      lastName: 'Adams',
      fullName: 'Mike Adams',
    }]);
  });

  it(`should restore the first name for entry that
    has firstName property with 'undefined' value`, () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    restoreNames(users);

    expect(users).toBe([{
      firstName: 'Jack',
      lastName: 'Holy',
      fullName: 'Jack Holy',
    }]);
  });
});
