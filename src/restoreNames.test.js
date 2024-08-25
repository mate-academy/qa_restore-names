'use strict';

const { restoreNames } = require('./restoreNames');

describe('restoreNames', () => {
  let users;
  let correctUsers;

  beforeEach(() => {
    users = [
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

    correctUsers = [
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
    ];
  });

  it('should corectly add firstName from fullName', () => {
    restoreNames(users);

    expect(users).toEqual(correctUsers);
  });

  it('should add firstName if this parametr missing', () => {
    restoreNames(users);
    expect(users[1]).toEqual(correctUsers[1]);
  });

  it('should not return anything', () => {
    const result = restoreNames(users);

    expect(result).toBeUndefined();
  });

  it('should not create a copy, but change the original array', () => {
    const originalUsers = JSON.parse(JSON.stringify(users));

    restoreNames(users);

    expect(users).not.toEqual(originalUsers);
  });
});
