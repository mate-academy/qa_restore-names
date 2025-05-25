'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it(`should not change name if correct`, () => {
    const users = [
      {
        firstName: 'Jack',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe('Jack');
  });

  it(`should change 'name' if 'undefined'`, () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe('Jack');
  });

  it(`should create 'name' if absent`, () => {
    const users = [
      {
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe('Jack');
  });

  it(`should create 'name' if both users names is absent`, () => {
    const users = [
      {
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe('Jack');
    expect(users[1].firstName).toBe('Mike');
  });

  it(`should restore 'name' if both users names is 'undefined'`, () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
      {
        firstName: undefined,
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe('Jack');
    expect(users[1].firstName).toBe('Mike');
  });

  it(`should fix multiple user's names`, () => {
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
        firstName: undefined,
        lastName: 'Holmes',
        fullName: 'Sherlock Holmes',
      },
      {
        lastName: 'Watson',
        fullName: 'John Watson',
      },
      {
        firstName: 'James',
        lastName: 'Moriarty',
        fullName: 'James Moriarty',
      },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe('Jack');
    expect(users[1].firstName).toBe('Mike');
    expect(users[2].firstName).toBe('Sherlock');
    expect(users[3].firstName).toBe('John');
    expect(users[4].firstName).toBe('James');
  });
});
