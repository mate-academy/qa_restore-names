/* eslint-disable max-len */
'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  test('should be declared', () => {
    expect(restoreNames)
      .toBeInstanceOf(Function);
  });

  test('should restore the first name if first name is empty string', () => {
    const user = [{
      firstName: '',
      lastName: 'Stadnyk',
      fullName: 'Kyrylo Stadnyk',
    }];

    restoreNames(user);

    expect(user)
      .toStrictEqual([{
        firstName: 'Kyrylo',
        lastName: 'Stadnyk',
        fullName: 'Kyrylo Stadnyk',
      }]);
  });

  test('should restore the first name if first name is undefined', () => {
    const user = [{
      firstName: undefined,
      lastName: 'Stadnyk',
      fullName: 'Kyrylo Stadnyk',
    }];

    restoreNames(user);

    expect(user)
      .toStrictEqual([{
        firstName: 'Kyrylo',
        lastName: 'Stadnyk',
        fullName: 'Kyrylo Stadnyk',
      }]);
  });

  test('should restore the first name if first name is null', () => {
    const user = [{
      firstName: null,
      lastName: 'Stadnyk',
      fullName: 'Kyrylo Stadnyk',
    }];

    restoreNames(user);

    expect(user)
      .toStrictEqual([{
        firstName: 'Kyrylo',
        lastName: 'Stadnyk',
        fullName: 'Kyrylo Stadnyk',
      }]);
  });

  test('should restore the name if fullname is not empty', () => {
    const user = [{
      firstName: '',
      lastName: 'Stadnyk',
      fullName: 'Kyrylo Stadnyk',
    }];

    restoreNames(user);

    expect(user)
      .toStrictEqual([{
        firstName: 'Kyrylo',
        lastName: 'Stadnyk',
        fullName: 'Kyrylo Stadnyk',
      }]);
  });

  test('should restore the names of several objects', () => {
    const users = [{
      firstName: null,
      lastName: 'Stadnyk',
      fullName: 'Kyrylo Stadnyk',
    },
    {
      firstName: undefined,
      lastName: 'Ortega',
      fullName: 'Jenna Ortega',
    },
    {
      firstName: '',
      lastName: 'Ricci',
      fullName: 'Christina Ricci',
    }];

    restoreNames(users);

    expect(users)
      .toStrictEqual([{
        firstName: 'Kyrylo',
        lastName: 'Stadnyk',
        fullName: 'Kyrylo Stadnyk',
      },
      {
        firstName: 'Jenna',
        lastName: 'Ortega',
        fullName: 'Jenna Ortega',
      },
      {
        firstName: 'Christina',
        lastName: 'Ricci',
        fullName: 'Christina Ricci',
      }]);
  });

  test('should restore the names of several objects if at least one of them have the first name', () => {
    const users = [{
      firstName: 'Kyrylo',
      lastName: 'Stadnyk',
      fullName: 'Kyrylo Stadnyk',
    },
    {
      firstName: undefined,
      lastName: 'Ortega',
      fullName: 'Jenna Ortega',
    },
    {
      firstName: null,
      lastName: 'Ricci',
      fullName: 'Christina Ricci',
    }];

    restoreNames(users);

    expect(users)
      .toStrictEqual([{
        firstName: 'Kyrylo',
        lastName: 'Stadnyk',
        fullName: 'Kyrylo Stadnyk',
      },
      {
        firstName: 'Jenna',
        lastName: 'Ortega',
        fullName: 'Jenna Ortega',
      },
      {
        firstName: 'Christina',
        lastName: 'Ricci',
        fullName: 'Christina Ricci',
      }]);
  });
});
