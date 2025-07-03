'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should restore firstName from fullName when firstName is undefined',
    () => {
      const users = [
        {
          firstName: undefined, lastName: 'Holy', fullName: 'Jack Holy',
        },
        {
          firstName: undefined, lastName: 'Adams', fullName: 'Mike Adams',
        },
      ];

      restoreNames(users);

      expect(users).toEqual([
        {
          firstName: 'Jack', lastName: 'Holy', fullName: 'Jack Holy',
        },
        {
          firstName: 'Mike', lastName: 'Adams', fullName: 'Mike Adams',
        },
      ]);
    });

  it('should restore firstName from fullName when firstName is null', () => {
    const users = [
      {
        firstName: null, lastName: 'Brown', fullName: 'Sara Brown',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Sara', lastName: 'Brown', fullName: 'Sara Brown',
      },
    ]);
  });

  it('should restore firstName from fullName when firstName is an empty string',
    () => {
      const users = [
        {
          firstName: '', lastName: 'Stone', fullName: 'Lily Stone',
        },
      ];

      restoreNames(users);

      expect(users).toEqual([
        {
          firstName: 'Lily', lastName: 'Stone', fullName: 'Lily Stone',
        },
      ]);
    });

  it('should not change firstName if it already exists', () => {
    const users = [
      {
        firstName: 'Anna', lastName: 'Lee', fullName: 'Anna Lee',
      },
      {
        firstName: 'John', lastName: 'Smith', fullName: 'John Smith',
      },
    ];

    const original = JSON.parse(JSON.stringify(users));

    restoreNames(users);

    expect(users).toEqual(original);
  });
});
