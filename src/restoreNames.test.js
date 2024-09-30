'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  // write tests here
  it(`should be declared`, () => {
    expect(restoreNames).toBeDefined();
  });

  it(`should return 'undefined'`, () => {
    expect(restoreNames([])).toBeUndefined();
  });

  it(`should throw Error if fullName not exist`, () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
      },
      {
        lastName: 'Adams',
      },
    ];

    expect(() => restoreNames(users)).toThrow();
  });

  it(`should restore firstName from fullName if it is undefined`, () => {
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

  it(`should not change firtName if it already exist,
    even if is different than in fullName`, () => {
    const users = [
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
        firstName: 'Ben',
        lastName: 'Smith',
        fullName: 'John Smith',
      },
    ];

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
      {
        firstName: 'Ben',
        lastName: 'Smith',
        fullName: 'John Smith',
      },
    ]);
  });
});
