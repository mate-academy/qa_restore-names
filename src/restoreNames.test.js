'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should restore first Name from full name ', () => {
    const users = [{
      firstName: undefined,
      lastName: 'Holy',
      fullName: 'Jack Holy',
    },
    {
      firstName: '',
      lastName: 'Adams',
      fullName: 'Mike Adams',
    },
    {
      lastName: 'Mouse',
      fullName: 'Mickey Mouse',
    },
    ];

    restoreNames(users);

    users.forEach(user => {
      expect(user.firstName).toBe(user.fullName.split(' ')[0]);
    });
  });

  // write tests here
});
