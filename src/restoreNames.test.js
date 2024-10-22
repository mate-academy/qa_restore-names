'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should restore name if it is undefined or field is absent at all', () => {
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
    const result = restoreNames(users);

    expect(result).toEqual([
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

  it('should not modify users that already have firstName defined', () => {
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
    const result = restoreNames(users);

    expect(result).toEqual([
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

  it('should not modify users when fullName is missing', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
      },
      {
        firstName: undefined,
        lastName: 'Adams',
      },
    ];
    const result = restoreNames(users);

    expect(result).toEqual([
      {
        firstName: undefined,
        lastName: 'Holy',
      },
      {
        firstName: undefined,
        lastName: 'Adams',
      },
    ]);
  });

  it('should handle cases where fullName has more than or fewer than two names',
    () => {
      const users = [
        {
          firstName: undefined,
          lastName: 'Doe',
          fullName: 'John A. Doe',
        },
        {
          firstName: undefined,
          lastName: 'Brown',
          fullName: 'Chris',
        },
      ];
      const result = restoreNames(users);

      expect(result).toEqual([
        {
          firstName: 'John',
          lastName: 'Doe',
          fullName: 'John A. Doe',
        },
        {
          firstName: 'Chris',
          lastName: 'Brown',
          fullName: 'Chris',
        },
      ]);
    });

  it('should return an empty array when input is empty', () => {
    const users = [];
    const result = restoreNames(users);

    expect(result).toEqual([]);
  });
});
