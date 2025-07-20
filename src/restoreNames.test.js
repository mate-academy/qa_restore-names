'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should be a function', () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it('should restore the firstName field', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Statham',
        fullName: 'JSON Statham',
      },
      {
        lastName: 'Pupkin',
        fullName: 'Vasya Pupkin',
      },
    ];

    const fixedUsers = [
      {
        firstName: 'JSON',
        lastName: 'Statham',
        fullName: 'JSON Statham',
      },
      {
        firstName: 'Vasya',
        lastName: 'Pupkin',
        fullName: 'Vasya Pupkin',
      },
    ];

    restoreNames(users);

    expect(users).toEqual(fixedUsers);
  });

  it('Should do nothing if the firstName field is not empty', () => {
    const users = [
      {
        firstName: 'Aboba',
        lastName: 'Bobikovich',
        fullName: 'Aboba Bobikovich',
      },
    ];

    const sameUsers = [
      {
        firstName: 'Aboba',
        lastName: 'Bobikovich',
        fullName: 'Aboba Bobikovich',
      },
    ];

    restoreNames(users);

    expect(users).toEqual(sameUsers);
  });
});
