'use strict';

describe('restoreNames', () => {
  // const { restoreNames } = require('./restoreNames');
  const { restoreNames } = require('./restoreNames');
  const correctUsers = [{
    firstName: 'Jack',
    lastName: 'Holy',
    fullName: 'Jack Holy',
  },
  {
    firstName: 'Mike',
    lastName: 'Adams',
    fullName: 'Mike Adams',
  },
  ];

  it('should ', () => {
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

    it('should be declared', () => {
      expect(restoreNames)
        .toBeInstanceOf(Function);
    });

    it('should add correct firstName if it is undefined', () => {
      restoreNames(users);

      expect(users[0].firstName)
        .toBe(correctUsers[0].firstName);
    });

    it('should add correct firstName if it does not exist', () => {
      restoreNames(users);

      expect(users[1].firstName)
        .toBe(correctUsers[1].firstName);
    });
  });
});
