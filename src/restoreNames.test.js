'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

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

  it('should ', () => {});

  it('restore first name', () => {
    restoreNames(users);

    expect(users[0].firstName).toBe('Jack');
  });

  it('restore second name', () => {
    restoreNames(users);

    expect(users[1].firstName).toBe('Mike');
  });

  it('check undefined', () => {
    expect(restoreNames(users)).toBeUndefined();
  });
});
