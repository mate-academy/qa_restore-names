'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should be a function', () => {
    expect(typeof restoreNames).toBe('function');
  });

  it('should restore firstName for users with undefined firstName', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe('Jack');
  });

  it('should restore firstName for users missing firstName field', () => {
    const users = [
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe('Mike');
  });

  it('should not modify users who already have a firstName', () => {
    const users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        fullName: 'John Doe',
      },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe('John');
  });

  it('should handle an empty array of users', () => {
    const users = [];

    restoreNames(users);
    expect(users).toEqual([]);
  });

  it(
    'should handle, some with missing' + 'first names and some with existing',
    () => {
      const users = [
        {
          firstName: undefined,
          lastName: 'Holy',
          fullName: 'Jack Holy',
        },
        {
          firstName: 'Jane',
          lastName: 'Doe',
          fullName: 'Jane Doe',
        },
        {
          firstName: undefined,
          lastName: 'Adams',
          fullName: 'Mike Adams',
        },
      ];

      restoreNames(users);
      expect(users[0].firstName).toBe('Jack');
      expect(users[1].firstName).toBe('Jane');
      expect(users[2].firstName).toBe('Mike');
    }
  );
});
