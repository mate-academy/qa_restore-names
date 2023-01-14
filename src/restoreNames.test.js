'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it(`should be declared`, () => {
    expect(restoreNames)
      .toBeInstanceOf(Function);
  });

  test(`should restore firstName 'Jack' from fullName`
  + `if it equal 'undefined'`, () => {
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

    expect(users[0].firstName)
      .toBe('Jack');
  });

  test(`should restore firstName 'Mike' from fullName`
  + `if it is missing`, () => {
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

    expect(users[1].firstName)
      .toBe('Mike');
  });

  test(`should doesn't change firstName if firstName has a value`, () => {
    const users = [
      {
        firstName: 'Jack',
        lastName: 'Holy',
        fullName: 'Jack1 Holy',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName)
      .toBe('Jack');
  });

  test(`should show an empty array if users is empty`, () => {
    const users = [];

    restoreNames(users);

    expect(users)
      .toEqual([]);
  });

  test(`should throw an error if users does not have fullName`, () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
      },
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    expect(() => {
      restoreNames(users);
    }).toThrow();
  });

  test(`should restore firstName everywhere`
  + ` if firstName missing or undefined  `, () => {
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
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'James Holy',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName)
      .toBe('Jack');

    expect(users[1].firstName)
      .toBe('Mike');

    expect(users[2].firstName)
      .toBe('James');
  });
  // write tests here
});
