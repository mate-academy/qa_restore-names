'use strict';

describe(`restoreNames`, () => {
  const { restoreNames } = require('./restoreNames');
  const users = [
    {
      firstName: undefined,
      lastName: `Holy`,
      fullName: `Jack Holy`,
    },
    {
      lastName: `Adams`,
      fullName: `Mike Adams`,
    },
  ];

  restoreNames(users);

  it(`should be declared`, () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it(`shouldn't return anything`, () => {
    expect(restoreNames(users)).toBe(void 0);
  });

  it(`shouldn't do any effect for empty array`, () => {
    const emptyArray = [];

    restoreNames(emptyArray);

    expect(emptyArray).toEqual([]);
  });

  it(`should update firstName if it equal to 'undefined'`, () => {
    expect(users[0].firstName).toBe(`Jack`);
  });

  it(`should set firstName if it doesn't exists`, () => {
    expect(users[1].firstName).toBe(`Mike`);
  });

  it(`shouldn't changed values if it already exists`, () => {
    const usersWithoutEmptyValues = [
      {
        firstName: 'William',
        lastName: 'Gates',
        fullName: 'Bill Gates',
      },
    ];

    restoreNames(usersWithoutEmptyValues);

    expect(usersWithoutEmptyValues).toEqual([{
      firstName: 'William',
      lastName: 'Gates',
      fullName: 'Bill Gates',
    }]);
  });
});
