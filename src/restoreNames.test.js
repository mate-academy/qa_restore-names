'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it(
    'should create a firstname from fullname if a firstname is missing',
    () => {
      const users = [
        {
          firstName: '',
          lastName: 'Doe',
          fullName: 'John Doe',
        },
      ];

      restoreNames(users);

      expect(users[0].firstName).toBe('John');
    });

  it('should not edit a firstname if it is given ', () => {
    const users = [
      {
        firstName: 'Jane',
        lastName: 'Smith',
        fullName: 'Jane Smith',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Jane');
  });

  it('should do nothing with the empty array', () => {
    const users = [];

    restoreNames(users);

    expect(users).toEqual([]);
  });

  it('should work if the lastName is missing', () => {
    const users = [
      {
        fullName: 'Lara Croft',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Lara');
  });

  it('should use the first name fron a fullName', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Brown',
        fullName: 'Chris Paul Brown',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Chris');
  });
});
