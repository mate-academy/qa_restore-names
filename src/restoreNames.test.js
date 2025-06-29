'use strict';

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

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('must change the first name of user if it is undefined or null'
    + 'and doesn\'t change otherwise', () => {
    restoreNames(users);

    expect(users).toEqual([
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
});
