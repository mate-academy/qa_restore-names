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

  it('should restore names ', () => {
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

  it('should return empty []', () => {
    const arr = [];

    restoreNames(arr);

    expect(arr).toEqual([]);
  });
});
