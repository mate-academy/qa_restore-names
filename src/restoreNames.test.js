'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it(`shoul be declareted`, () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it(`should set correct first name to user who do not have it`, () => {
    const users = [
      {
        lastName: 'Stark',
        fullName: 'Tony Stark',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Tony',
        lastName: 'Stark',
        fullName: 'Tony Stark',
      },
    ]);
  });

  it(`should set correct first name to user who is equal to undefined`, () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Potts',
        fullName: 'Pepper Potts',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Pepper',
        lastName: 'Potts',
        fullName: 'Pepper Potts',
      },
    ]);
  });

  it(`should set correct first name to users who do not have it`, () => {
    const users = [
      {
        lastName: 'Parker',
        fullName: 'Peter Parker',
      },
      {
        firstName: 'Tom',
        lastName: 'Holland',
        fullName: 'Tom Holland',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([{
      firstName: 'Peter',
      lastName: 'Parker',
      fullName: 'Peter Parker',
    },
    {
      firstName: 'Tom',
      lastName: 'Holland',
      fullName: 'Tom Holland',
    },
    ]);
  });

  it(`should set correct first name to users who is equal to undefined`, () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Romanoff',
        fullName: 'Natasha Romanoff',
      },
      {
        firstName: 'Scarlett',
        lastName: 'Johansson',
        fullName: 'Scarlett Johansson',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([{
      firstName: 'Natasha',
      lastName: 'Romanoff',
      fullName: 'Natasha Romanoff',
    },
    {
      firstName: 'Scarlett',
      lastName: 'Johansson',
      fullName: 'Scarlett Johansson',
    },
    ]);
  });
});
