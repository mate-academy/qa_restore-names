'use strict';

const { restoreNames } = require('./restoreNames');

describe('restoreNames', () => {
  it('should be a function', () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  test('should not return anything', () => {
    expect(restoreNames([])).toBeUndefined();
  });

  it('should return an empty array on empty input', () => {
    const users = [];

    restoreNames(users);

    expect(users).toEqual([]);
  });

  it('should restore first names if they do not exist', () => {
    const users = [
      {
        lastName: 'Johnson',
        fullName: 'Dwayne Johnson',
      },
      {
        lastName: 'Taylor',
        fullName: 'Inna Taylor',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Dwayne',
        lastName: 'Johnson',
        fullName: 'Dwayne Johnson',
      },
      {
        firstName: 'Inna',
        lastName: 'Taylor',
        fullName: 'Inna Taylor',
      },
    ]);
  });

  it('should restore first names when they are undefined', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Johnson',
        fullName: 'Dwayne Johnson',
      },
      {
        firstName: undefined,
        lastName: 'Taylor',
        fullName: 'Inna Taylor',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Dwayne',
        lastName: 'Johnson',
        fullName: 'Dwayne Johnson',
      },
      {
        firstName: 'Inna',
        lastName: 'Taylor',
        fullName: 'Inna Taylor',
      },
    ]);
  });

  it('should restore first names when they are empty strings', () => {
    const users = [
      {
        firstName: '',
        lastName: 'Johnson',
        fullName: 'Dwayne Johnson',
      },
      {
        firstName: '',
        lastName: 'Taylor',
        fullName: 'Inna Taylor',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Dwayne',
        lastName: 'Johnson',
        fullName: 'Dwayne Johnson',
      },
      {
        firstName: 'Inna',
        lastName: 'Taylor',
        fullName: 'Inna Taylor',
      },
    ]);
  });

  it('should not modify existing first names', () => {
    const users = [
      {
        firstName: 'Dwayne',
        lastName: 'Johnson',
        fullName: 'Dwayne Johnson',
      },
      {
        firstName: 'Inna',
        lastName: 'Taylor',
        fullName: 'Inna Taylor',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Dwayne',
        lastName: 'Johnson',
        fullName: 'Dwayne Johnson',
      },
      {
        firstName: 'Inna',
        lastName: 'Taylor',
        fullName: 'Inna Taylor',
      },
    ]);
  });
});
