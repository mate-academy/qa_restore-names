'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it(`should be declared`, () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it('should not return anything', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    expect(restoreNames(users)).toBeUndefined();
  });

  it('should restore firstName if it is undefined', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Jack',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ]);
  });

  it('should restore missing firstName if it is missing', () => {
    const users = [
      {
        fullName: 'Jack Holy',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Jack',
        fullName: 'Jack Holy',
      },
    ]);
  });

  it(
    `should restore only missing values,` +
      ` rather than overwriting existing ones`,
    () => {
      const users = [
        {
          firstName: 'Jack',
          fullName: 'Jack Holy',
        },
      ];

      restoreNames(users);

      expect(users).toEqual([
        {
          firstName: 'Jack',
          fullName: 'Jack Holy',
        },
      ]);
    },
  );

  it(
    `should restore firstName for users with missing values` +
      ` without changing existing ones`,
    () => {
      const users = [
        {
          firstName: undefined,
          lastName: 'Holy',
          fullName: 'Jack Holy',
        },
        {
          firstName: 'Mike',
          lastName: 'Adams',
          fullName: 'Mike Adams',
        },
        {
          lastName: 'Smith',
          fullName: 'John Smith',
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
        {
          firstName: 'John',
          lastName: 'Smith',
          fullName: 'John Smith',
        },
      ]);
    },
  );

  it('should restore firstName from the first value of fullName', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Smith',
        fullName: 'John Michael Smith',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'John',
        lastName: 'Smith',
        fullName: 'John Michael Smith',
      },
    ]);
  });
});
