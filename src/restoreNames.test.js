'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should restore first names `Jack` from full names `Jack Holy`', () => {
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

  it('should restore first names `Jack` from full names `Jack Holy`', () => {
    const users = [
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Mike');
  });
});
