'use strict';

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

describe('restoreNames', () => {
  it("adds firstName to each user if it is undefined or doesn't exist", () => {
    restoreNames(users);

    expect(users[0].firstName).toBe('Jack');
    expect(users[1].firstName).toBe('Mike');
  });

  it("doesn't change existing names of the users", () => {
    const usersWithNames = [
      {
        firstName: 'Michael',
        lastName: 'Jackson',
        fullName: 'Michael Jackson',
      },
      {
        firstName: 'Joe',
        lastName: 'Biden',
        fullName: 'Joe Biden',
      },
    ];

    restoreNames(users);

    expect(usersWithNames[0].firstName).toBe('Michael');
    expect(usersWithNames[1].firstName).toBe('Joe');
  });

  it("doesn't return anything", () => {
    expect(restoreNames(users)).toBe(undefined);
  });
});
