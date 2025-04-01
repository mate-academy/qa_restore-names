'use strict';

const { restoreNames } = require('./restoreNames');

describe('restoreNames', () => {
  it('should restore firstName from fullName when firstName is undefined',
    () => {
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

      expect(users[0].firstName).toBe('Jack');
      expect(users[1].firstName).toBe('Mike');
    });

  it('should restore firstName from fullName when firstName is missing', () => {
    const users = [
      {
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Jack');
    expect(users[1].firstName).toBe('Mike');
  });

  it('should not modify firstName if it is already set', () => {
    const users = [
      {
        firstName: 'John',
        lastName: 'Holy',
        fullName: 'John Holy',
      },
      {
        firstName: 'Mike',
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('John');
    expect(users[1].firstName).toBe('Mike');
  });

  it('should handle an empty array of users without errors', () => {
    const users = [];

    restoreNames(users);

    expect(users).toEqual([]);
  });

  it('should not alter lastName or fullName fields', () => {
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

    expect(users[0].lastName).toBe('Holy');
    expect(users[0].fullName).toBe('Jack Holy');
    expect(users[1].lastName).toBe('Adams');
    expect(users[1].fullName).toBe('Mike Adams');
  });
});
