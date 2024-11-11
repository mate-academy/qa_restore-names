'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  const users = [
    {
      firstName: 'Victoria',
      lastName: 'Law',
      fullName: 'Victoria Law',
    },
    {
      firstName: '',
      lastName: 'Cole',
      fullName: 'John Cole',
    },
    {
      firstName: undefined,
      lastName: 'Knight',
      fullName: 'Jennifer Knight',
    },
    {
      lastName: 'Miller',
      fullName: 'Tom Miller',
    },
  ];

  it(`should be declared`, () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it(`shouldn't change the value of the 'firstName'`
    + `property if 'firstName' has a value`, () => {
    const copy = [...users];
    const beginValue = copy[0].firstName;

    restoreNames(users);

    expect(users[0].firstName).toBe(beginValue);
  });

  it(`should add a property 'firstName' with value`
  + ` if user does not have one`, () => {
    restoreNames(users);

    expect(users[3]).toHaveProperty('firstName');
    expect(users[3].firstName).toBe('Tom');
  });

  it(`should add value if the 'firstName' property`
  + ` is undefined`, () => {
    restoreNames(users);

    expect(users[2].firstName).toBe('Jennifer');
  });

  it(`should add value if the 'firstName property'`
  + ` equals an empty string`, () => {
    restoreNames(users);

    expect(users[1].firstName).toBe('John');
  });

  it(`shouldn't return anything`, () => {
    expect(restoreNames(users)).toBeUndefined();
  });
});
