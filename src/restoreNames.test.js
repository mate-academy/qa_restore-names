/* eslint-disable max-len */
'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should be declared', () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  test("should add first name if it doesn't exist", () => {
    const users = [{
      lastName: 'Hamman',
      fullName: 'Bob Hamman',
    }];

    restoreNames(users);

    const result = [{
      firstName: 'Bob',
      lastName: 'Hamman',
      fullName: 'Bob Hamman',
    }];

    expect(users).toEqual(result);
  });

  test('should restore first name if it undefined or "" or null', () => {
    const user1 = [{
      firstName: undefined,
      lastName: 'Hamman',
      fullName: 'Bob Hamman',
    }];
    const user2 = [{
      firstName: undefined,
      lastName: 'Hamman',
      fullName: 'Bob Hamman',
    }];
    const user3 = [{
      firstName: undefined,
      lastName: 'Hamman',
      fullName: 'Bob Hamman',
    }];

    restoreNames(user1);
    restoreNames(user2);
    restoreNames(user3);

    const result = [{
      firstName: 'Bob',
      lastName: 'Hamman',
      fullName: 'Bob Hamman',
    }];

    expect(user1).toEqual(result);
    expect(user2).toEqual(result);
    expect(user3).toEqual(result);
  });

  test('should work coorectly with many users in array', () => {
    const users = [
      {
        lastName: 'Hamman', fullName: 'Bob Hamman',
      },
      {
        firstName: '', lastName: 'Mekstroth', fullName: 'Jeff Mekstroth',
      },
      {
        firstName: null, lastName: 'Makhmood', fullName: 'Zia Makhmood',
      },
      {
        firstName: 'Benito', lastName: 'Garozzo', fullName: 'Benito Garozzo',
      },
      {
        firstName: undefined, lastName: 'Dragan', fullName: 'Volodymyr Dragan',
      },
    ];

    restoreNames(users);

    const result = [
      {
        firstName: 'Bob', lastName: 'Hamman', fullName: 'Bob Hamman',
      },
      {
        firstName: 'Jeff', lastName: 'Mekstroth', fullName: 'Jeff Mekstroth',
      },
      {
        firstName: 'Zia', lastName: 'Makhmood', fullName: 'Zia Makhmood',
      },
      {
        firstName: 'Benito', lastName: 'Garozzo', fullName: 'Benito Garozzo',
      },
      {
        firstName: 'Volodymyr', lastName: 'Dragan', fullName: 'Volodymyr Dragan',
      },
    ];

    expect(users).toEqual(result);
  });
});
