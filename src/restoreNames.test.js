'use strict';

const { restoreNames } = require('./restoreNames');

describe('restoreNames', () => {
  it('should restore firstName for users with "undefined" firstName', () => {
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

  it('should not change firstName if it is already exsist', () => {
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

  test('Handle mixed cases with and without firstName', () => {
    const users = [
      {
        firstName: 'Emily',
        lastName: 'Blunt',
        fullName: 'Emily Blunt',
      },
      {
        firstName: undefined,
        lastName: 'Johnson',
        fullName: 'Dwayne Johnson',
      },
      {
        lastName: 'Brown',
        fullName: 'Chris Brown',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Emily',
        lastName: 'Blunt',
        fullName: 'Emily Blunt',
      },
      {
        firstName: 'Dwayne',
        lastName: 'Johnson',
        fullName: 'Dwayne Johnson',
      },
      {
        firstName: 'Chris',
        lastName: 'Brown',
        fullName: 'Chris Brown',
      },
    ]);
  });

  test('should handle cases where fullName has more than two parts', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Doe',
        fullName: 'John Michael Doe',
      },
      {
        firstName: undefined,
        lastName: 'Smith',
        fullName: 'Jane Marie Smith',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'John',
        lastName: 'Doe',
        fullName: 'John Michael Doe',
      },
      {
        firstName: 'Jane',
        lastName: 'Smith',
        fullName: 'Jane Marie Smith',
      },
    ]);
  });

  test('should handle cases where fullName has only one part', () => {
    const users = [
      {
        firstName: undefined,
        lastName: undefined,
        fullName: 'Cher',
      },
      {
        firstName: undefined,
        lastName: undefined,
        fullName: 'Madonna',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Cher',
        lastName: undefined,
        fullName: 'Cher',
      },
      {
        firstName: 'Madonna',
        lastName: undefined,
        fullName: 'Madonna',
      },
    ]);
  });
});
