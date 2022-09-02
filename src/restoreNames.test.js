'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it(`should be declared`, () => {
    expect(restoreNames)
      .toBeInstanceOf(Function);
  });

  it(`Should add a first name if absent`, () => {
    const users = [
      {
        lastName: 'Seagal',
        fullName: 'Petro Seagal',
      },
      {
        lastName: 'Stalone',
        fullName: 'Slavik Stalone',
      },
    ];

    const result = [
      {
        firstName: 'Petro',
        lastName: 'Seagal',
        fullName: 'Petro Seagal',
      },
      {
        firstName: 'Slavik',
        lastName: 'Stalone',
        fullName: 'Slavik Stalone',
      },
    ];

    restoreNames(users);

    expect(users)
      .toEqual(result);
  });

  it(`Should add a first name if undefined`, () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Poroshenko',
        fullName: 'Duncan Poroshenko',
      },
      {
        firstName: undefined,
        lastName: 'Hopkins',
        fullName: 'Anton Hopkins',
      },
    ];

    const result = [
      {
        firstName: 'Duncan',
        lastName: 'Poroshenko',
        fullName: 'Duncan Poroshenko',
      },
      {
        firstName: 'Anton',
        lastName: 'Hopkins',
        fullName: 'Anton Hopkins',
      },
    ];

    restoreNames(users);

    expect(users)
      .toEqual(result);
  });

  it(`Should add a first name if the firstName is 'Null'`, () => {
    const users = [
      {
        firstName: null,
        lastName: 'Anderson',
        fullName: 'Polina Anderson',
      },
      {
        firstName: null,
        lastName: 'Jolie',
        fullName: 'Angelina Jolie',
      },
    ];

    const result = [
      {
        firstName: 'Polina',
        lastName: 'Anderson',
        fullName: 'Polina Anderson',
      },
      {
        firstName: 'Angelina',
        lastName: 'Jolie',
        fullName: 'Angelina Jolie',
      },
    ];

    restoreNames(users);

    expect(users)
      .toEqual(result);
  });

  it(`Shouldn't be changed if the first name has correct property`, () => {
    const users = [
      {
        firstName: 'Uma',
        lastName: 'Thurman',
        fullName: 'Uma Thurman',
      },
      {
        firstName: 'Gal',
        lastName: 'Gadot',
        fullName: 'Gal Gadot',
      },
    ];

    const result = [
      {
        firstName: 'Uma',
        lastName: 'Thurman',
        fullName: 'Uma Thurman',
      },
      {
        firstName: 'Gal',
        lastName: 'Gadot',
        fullName: 'Gal Gadot',
      },
    ];

    restoreNames(users);

    expect(users)
      .toEqual(result);
  });
});
