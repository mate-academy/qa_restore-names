'use strict';

const { restoreNames } = require('./restoreNames');

describe('restoreNames', () => {
  it('should restore firstName if it is undefined', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
      {
        firstName: undefined,
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

  it('should restore firstName if it is missing from the object', () => {
    const users = [
      {
        lastName: 'Smith',
        fullName: 'John Smith',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'John',
        lastName: 'Smith',
        fullName: 'John Smith',
      },
    ]);
  });

  it('should not change users who already have a firstName', () => {
    const users = [
      {
        firstName: 'Alice',
        lastName: 'Johnson',
        fullName: 'Alice Johnson',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Alice',
        lastName: 'Johnson',
        fullName: 'Alice Johnson',
      },
    ]);
  });

  it('should correctly handle cases with extra spaces in fullName', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Brown',
        fullName: '  Emily Brown  ',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Emily',
        lastName: 'Brown',
        fullName: '  Emily Brown  ',
      },
    ]);
  });

  it(
    'should correctly restore firstName when fullName has more than 2 parts',
    () => {
      const users = [
        {
          firstName: undefined,
          lastName: 'Doe',
          fullName: 'Jane Mary Doe',
        },
      ];

      restoreNames(users);

      expect(users).toEqual([
        {
          firstName: 'Jane',
          lastName: 'Doe',
          fullName: 'Jane Mary Doe',
        },
      ]);
    }
  );

  it('should not modify an empty array', () => {
    const users = [];

    restoreNames(users);

    expect(users).toEqual([]);
  });

  it('should handle cases where fullName is missing or empty', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Smith',
        fullName: '',
      },
      {
        firstName: undefined,
        lastName: 'Doe',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: undefined,
        lastName: 'Smith',
        fullName: '',
      },
      {
        firstName: undefined,
        lastName: 'Doe',
      },
    ]);
  });
});
