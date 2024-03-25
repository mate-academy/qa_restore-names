'use strict';

const { restoreNames } = require('./restoreNames');

describe('restoreNames', () => {
  it(' should add a firstName if it is missing', () => {
    const users = [
      {

        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
      {

        lastName: 'Doe',
        fullName: 'John Doe',
      },
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Jack',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
      {
        firstName: 'John',
        lastName: 'Doe',
        fullName: 'John Doe',
      },
      {
        firstName: 'Mike',
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ]);
  });

  it('should set firstName if it is undefined', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Doe',
        fullName: 'John Doe',
      },
      {
        firstName: undefined,
        lastName: 'Smith',
        fullName: 'Jane Smith',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'John',
        lastName: 'Doe',
        fullName: 'John Doe',
      },
      {
        firstName: 'Jane',
        lastName: 'Smith',
        fullName: 'Jane Smith',
      },
    ]);
  });

  it('should not modify users with defined firstName', () => {
    const users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        fullName: 'John Doe',
      },
      {
        firstName: 'Jane',
        lastName: 'Smith',
        fullName: 'Jane Smith',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'John',
        lastName: 'Doe',
        fullName: 'John Doe',
      },
      {
        firstName: 'Jane',
        lastName: 'Smith',
        fullName: 'Jane Smith',
      },
    ]);
  });
});

it('should add first name if it is empty string', () => {
  const users = [
    {
      firstName: '',
      lastName: 'Holy',
      fullName: 'Jack Holy',
    },
    {
      firstName: '',
      lastName: 'Adams',
      fullName: 'Mike Adams',
    },
  ];

  restoreNames(users);

  expect(users).toEqual([
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

it('should processing empty user array', () => {
  const users = [];
  restoreNames(users);
  expect(users).toEqual([]);
});

