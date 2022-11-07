'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');
  const users = [
    {
      firstName: undefined,
      lastName: 'Grinko',
      fullName: 'Misha Grinko',
    },
    {
      lastName: 'Klichko',
      fullName: 'Vitaliy Klichko',
    },
    {
      firstName: 'Mikhailo',
      lastName: 'Poplavskiy',
      fullName: 'Mikhailo Poplavskiy',
    },
    {
      firstName: '',
      lastName: 'Presley',
      fullName: 'Elvis Presley',
    },
  ];

  it('function should be declared', () => {
    expect(restoreNames)
      .toBeInstanceOf(Function);
  });

  it('should not change "firstName" if it is not empty', () => {
    expect(users[2].firstName)
      .toBe('Mikhailo');
  });

  it('should change "firstName" if it is "undefined"', () => {
    restoreNames(users);

    expect(users[0].firstName)
      .toBe('Misha');
  });

  it('should create "firstName" if it is does not exist', () => {
    restoreNames(users);

    expect(users[1].firstName)
      .toBe('Vitaliy');
  });

  it('should change "firstName" if it is empty', () => {
    restoreNames(users);

    expect(users[3].firstName)
      .toBe('Elvis');
  });
});
