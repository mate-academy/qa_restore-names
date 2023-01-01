'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it(`An array with the one user`, () => {
    const users = [
      {
        lastName: 'Jackson',
        fullName: 'Peter Jackson',
      }
    ];
    restoreNames(users)
    expect(users)
      .toEqual([{
        firstName: 'Peter',
        lastName: 'Jackson',
        fullName: 'Peter Jackson',
      }]);
  });

  it(`An array with two users`, () => {
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
    restoreNames(users)
    expect(users)
      .toEqual([{
        firstName: 'Jack',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
      {
        firstName: 'Mike',
        lastName: 'Adams',
        fullName: 'Mike Adams',
      }]);
  });

  it(`An array with three users and without firstName property`, () => {
    const users = [
      {
        lastName: 'Gates',
        fullName: 'Bill Gates',
      },
      {
        lastName: 'Mask',
        fullName: 'Elon Mask',
      },
      {
        lastName: 'Bezos',
        fullName: 'Jeff Bezos',
      }
    ];
    restoreNames(users)
    expect(users)
      .toEqual([{
        firstName: 'Bill',
        lastName: 'Gates',
        fullName: 'Bill Gates',
      },
      {
        firstName: 'Elon',
        lastName: 'Mask',
        fullName: 'Elon Mask',
      },
      {
        firstName: 'Jeff',
        lastName: 'Bezos',
        fullName: 'Jeff Bezos',
      }]);
  });

  it(`An array with three users and 'firstName' property is undefined`, () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Gates',
        fullName: 'Bill Gates',
      },
      {
        firstName: undefined,
        lastName: 'Mask',
        fullName: 'Elon Mask',
      },
      {
        firstName: undefined,
        lastName: 'Bezos',
        fullName: 'Jeff Bezos',
      }
    ];
    restoreNames(users)
    expect(users)
      .toEqual([{
        firstName: 'Bill',
        lastName: 'Gates',
        fullName: 'Bill Gates',
      },
      {
        firstName: 'Elon',
        lastName: 'Mask',
        fullName: 'Elon Mask',
      },
      {
        firstName: 'Jeff',
        lastName: 'Bezos',
        fullName: 'Jeff Bezos',
      }]);
  });

  it(`An empty array`, () => {
    const users = [
    ];
    restoreNames(users)
    expect(users)
      .toEqual([]);
  });

  it(`An array with empty values`, () => {
    const users = [
      {
        lastName: '',
        fullName: '',
      }
    ];
    restoreNames(users)
    expect(users)
      .toEqual([{
        firstName: '',
        lastName: '',
        fullName: '',
      }]);
  });

  it(`An array with the firstName`, () => {
    const users = [
      {
        firstName: 'Peter',
        lastName: 'Jackson',
        fullName: 'Peter Jackson',
      }
    ];
    restoreNames(users)
    expect(users)
      .toEqual([{
        firstName: 'Peter',
        lastName: 'Jackson',
        fullName: 'Peter Jackson',
      }]);
  });

  // write tests here
});
