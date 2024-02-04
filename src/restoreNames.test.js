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
    {
      lastName: 'Milian',
      fullName: 'Yulia Milian',
    },

    {
      firstName: 'Olia',
      lastName: 'Holy',
      fullName: 'Olia Holy',
    },

  ];

  it('should return first name', () => {
    restoreNames(users);
    expect(users[0].firstName).toEqual('Jack');
    expect(users[1].firstName).toEqual('Mike');
    expect(users[2].firstName).toEqual('Yulia');
    expect(users[3].firstName).toEqual('Olia');

    expect(() => restoreNames(users))
      .not.toThrow();
  });
});
