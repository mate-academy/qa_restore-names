'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should be declared', () => {
    expect(restoreNames)
      .toBeInstanceOf(Function);
  });

  it('should restore first name if firstname is missing', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toEqual('Jack');
  });

  it('should restored value should be a "string" ', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    restoreNames(users);

    expect(typeof (users[0].firstName)).toEqual('string');
  });

  it('should not change existing values', () => {
    const users = [
      {
        firstName: 'Geralt',
        lastName: 'Holy',
        fullName: 'Geralt Holy',
      },
      {
        firstName: 'Daniel',
        lastName: 'Novak',
        fullName: 'Daniel Novak',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Geralt');
    expect(users[1].firstName).toBe('Daniel');
  });

  it('should handle an empty array', () => {
    const arr = [];

    restoreNames(arr);

    expect(arr).toEqual([]);
  });

  it('should not modify array if "username" is missing and "fullname" is missing ', () => {
    const users = [
      {
        firstName: ' ',
        lastName: 'Holy',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe(' ');
  });
});
