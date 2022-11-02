'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  const users = [
    {
      lastName: 'Holy',
      fullName: 'Jack Holy',
    },
    {
      firstName: undefined,
      lastName: 'Adams',
      fullName: 'Mike Adams',
    },
    {
      fullName: 'Max Stashuk',
    },
    {
      firstName: 'Serhii',
      lastName: 'Pirozhok',
      fullName: 'Serhii Pirozhok',
    },
  ];

  it('function should be declared', () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it(`shouldn't return anuything `, () => {
    expect(restoreNames(users)).toBe(undefined);
  });

  it(`should modify original object`, () => {
    const newUsers = users;

    restoreNames(newUsers);
    expect(newUsers[0].firstName).toBe('Jack');
  });

  it('Nothing should be perfomed if user has first name ', () => {
    const userBefore = users[3];

    restoreNames(users);
    expect(users[3]).toBe(userBefore);
  });

  it('First name should be restored if it is undefined', () => {
    restoreNames(users);
    expect(users[1].firstName).toBe('Mike');
  });

  it('First name should be restored if it is not given', () => {
    restoreNames(users);
    expect(users[0].firstName).toBe('Jack');
  });

  it('Should restore first names of multiple users', () => {
    restoreNames(users);
    expect(users[0].firstName).toBe('Jack');
    expect(users[1].firstName).toBe('Mike');
  });

  it('should restore first name if lastname is not given', () => {
    restoreNames(users);
    expect(users[2].firstName).toBe('Max');
  });
});
