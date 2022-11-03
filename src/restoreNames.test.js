'use strict';

const correctUsers = [
  {
    firstName: 'Elon',
    lastName: 'Musk',
    fullName: 'Elon Musk',
  },
  {
    firstName: 'Tony',
    lastName: 'Stark',
    fullName: 'Tony Stark',
  },
  {
    firstName: 'Bill',
    lastName: 'Gates',
    fullName: 'Bill Gates',
  },
];

const { restoreNames } = require('./restoreNames');

describe('restoreNames', () => {
  it('should be declared', () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it(`should restore firstname if 'firstName'`
    + `is empty, missing or undefined`, function() {
    const brokenUsers = [
      {
        firstName: undefined,
        lastName: 'Musk',
        fullName: 'Elon Musk',
      },
      {
        lastName: 'Stark',
        fullName: 'Tony Stark',
      },
      {
        firstName: '',
        lastName: 'Gates',
        fullName: 'Bill Gates',
      },
    ];

    restoreNames(brokenUsers);

    expect(brokenUsers).toEqual(correctUsers);
  });

  it(`shouldn't change users array if 'first name is exist'`, function() {
    const brokenUsers = [
      {
        firstName: 'Elon',
        lastName: 'Musk',
        fullName: 'Elon Musk',
      },
      {
        firstName: 'Tony',
        lastName: 'Stark',
        fullName: 'Tony Stark',
      },
      {
        firstName: 'Bill',
        lastName: 'Gates',
        fullName: 'Bill Gates',
      },
    ];

    restoreNames(brokenUsers);

    expect(brokenUsers).toEqual(correctUsers);
  });
});
