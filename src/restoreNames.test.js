'use strict';
const brokenUsers = [
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
    firstName: '',
    lastName: 'Musk',
    fullName: 'Elon Musk',
  },
];

const correctUsers = [
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
  {
    firstName: 'Elon',
    lastName: 'Musk',
    fullName: 'Elon Musk',
  },
];

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should restore firstname if missing, undefined or empty', () => {
    restoreNames(brokenUsers);
    expect(brokenUsers).toEqual(correctUsers);
  });

  it('should not change users if firstname exist', () => {
    const users = correctUsers;
    restoreNames(users);
    expect(users).toEqual(correctUsers);
  });
});
