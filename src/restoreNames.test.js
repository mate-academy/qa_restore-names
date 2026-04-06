'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');


   it(`should be declared`, () => {
    expect(restoreNames).toBeInstanceOf(Function);
   });

  it(`should not return anything from the function`, () => {
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
    const result = restoreNames(users);
    expect(result).toBe(undefined);
  });

  it(`set correct 'firstName' to users who is equal to 'undefined'`, () => {
    const users = [
  {
    firstName: undefined,
    lastName: 'Holy',
    fullName: 'Jack Holy',
  }
];
    restoreNames(users);
    expect(users[0].firstName).toBe("Jack");
  });

  it(`set correct 'firstName' to users who do not have it`, () => {
    const users = [
  {
    lastName: 'Adams',
    fullName: 'Mike Adams',
  },
];
    restoreNames(users);
    expect(users[0].firstName).toBe("Mike");
  });

  it(`should not change first name user who already has a valid firstName`, () => {
    const users = [
  {
    firstName: 'Jack',
    lastName: 'Holy',
    fullName: 'Jack Holy',
  }
];
    restoreNames(users);
    expect(users[0].firstName).toBe("Jack");
  });
  // write tests here
});
