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

const expectedResult = [
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

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should be declared', () => {
    expect(restoreNames)
      .toBeInstanceOf(Function);
  });

  it(`should add 'firstName' if it is undefined`, () => {
    const currentUsers = [...users];

    restoreNames(currentUsers);

    expect(currentUsers).toEqual(expectedResult);
  });

  it(`should not add 'firstName' if it is defined`, () => {
    const currentUsers = [...users];

    restoreNames(currentUsers);

    expect(currentUsers).toEqual(expectedResult);
  });
});
