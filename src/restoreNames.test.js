'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should array no changes if the data is full', () => {
    const user = [
      {
        firstName: 'Sam',
        lastName: 'Smit',
        fullName: 'Sam Smit',
      },
      {
        firstName: 'James',
        lastName: 'Silver',
        fullName: 'James Silver',
      },
    ];

    restoreNames(user);

    expect(user).toEqual([
      {
        firstName: 'Sam',
        lastName: 'Smit',
        fullName: 'Sam Smit',
      },
      {
        firstName: 'James',
        lastName: 'Silver',
        fullName: 'James Silver',
      },
    ]);
  });

  it(`should restore for user 'firstName' if it is missing`, () => {
    const user = [
      {
        lastName: 'Smit',
        fullName: 'Sam Smit',
      },
      {
        lastName: 'Silver',
        fullName: 'James Silver',
      },
    ];

    restoreNames(user);

    expect(user).toEqual([
      {
        firstName: 'Sam',
        lastName: 'Smit',
        fullName: 'Sam Smit',
      },
      {
        firstName: 'James',
        lastName: 'Silver',
        fullName: 'James Silver',
      },
    ]);
  });

  it(`should restore for user 'firstName' if it contains 'undefined'`, () => {
    const user = [
      {
        firstName: undefined,
        lastName: 'Smit',
        fullName: 'Sam Smit',
      },
      {
        firstName: undefined,
        lastName: 'Silver',
        fullName: 'James Silver',
      },
    ];

    restoreNames(user);

    expect(user).toEqual([
      {
        firstName: 'Sam',
        lastName: 'Smit',
        fullName: 'Sam Smit',
      },
      {
        firstName: 'James',
        lastName: 'Silver',
        fullName: 'James Silver',
      },
    ]);
  });
});
