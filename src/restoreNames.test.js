'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should ', () => {});

  it('restore names', () => {
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

    expect(users[0].firstName).toBe('Jack');
  });
});
