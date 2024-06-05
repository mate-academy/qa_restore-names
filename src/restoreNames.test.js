'use strict';

const { restoreNames } = require('./restoreNames');

describe('restoreNames', () => {
  it(`should modify objects where `
    + `the 'firstName' field is undefined`, () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    restoreNames(users);

    expect(users)
      .toEqual([
        {
          firstName: 'Jack',
          lastName: 'Holy',
          fullName: 'Jack Holy',
        },
      ]);
  });

  it(`restore the 'firstName' field if it is lost`, () => {
    const users = [
      {
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    restoreNames(users);

    expect(users)
      .toEqual([
        {
          firstName: 'Jack',
          lastName: 'Holy',
          fullName: 'Jack Holy',
        },
      ]);
  });

  it(`shouldn't modify objects where `
    + `the 'firstName' field is not empty`, () => {
    const users = [
      {
        firstName: 'Jack',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    restoreNames(users);

    expect(users)
      .toEqual([
        {
          firstName: 'Jack',
          lastName: 'Holy',
          fullName: 'Jack Holy',
        },
      ]);
  });

  it(`should work with an array of objects where `
    + `all 'firstName' fields are undefined`, () => {
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

    expect(users)
      .toEqual([
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

  it(`should work with an array of objects where `
    + `some 'firstName' fields are undefined or completely lost`, () => {
    const testUsers = [
      {
        firstName: undefined,
        lastName: 'House',
        fullName: 'Gregory House',
      },
      {
        firstName: undefined,
        lastName: 'Clarkson',
        fullName: 'Jeremy Clarkson',
      },
      {
        firstName: 'Loly',
        lastName: 'S.Oliva',
        fullName: 'Loly S.Oliva',
      },
      {
        lastName: 'Sunderland',
        fullName: 'Robert Sunderland',
      },
    ];

    restoreNames(testUsers);

    expect(testUsers)
      .toEqual([
        {
          firstName: 'Gregory',
          lastName: 'House',
          fullName: 'Gregory House',
        },
        {
          firstName: 'Jeremy',
          lastName: 'Clarkson',
          fullName: 'Jeremy Clarkson',
        },
        {
          firstName: 'Loly',
          lastName: 'S.Oliva',
          fullName: 'Loly S.Oliva',
        },
        {
          firstName: 'Robert',
          lastName: 'Sunderland',
          fullName: 'Robert Sunderland',
        },
      ]);
  });
});
