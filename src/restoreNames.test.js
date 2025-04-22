'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should be declared', () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it(
    'should restore firstName from fullName if firstName is undefined',
    () => {
      const users = [
        {
          firstName: undefined,
          lastName: 'Holy',
          fullName: 'Jack Holy',
        },
      ];

      restoreNames(users);

      expect(users[0].firstName).toBe('Jack');
    }
  );

  it('should restore firstName for multiple users if missing', () => {
    const users = [
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
      {
        firstName: undefined,
        lastName: 'Smith',
        fullName: 'Anna Smith',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Mike');
    expect(users[1].firstName).toBe('Anna');
  });

  it('should not change firstName if it is already set', () => {
    const users = [
      {
        firstName: 'Lily',
        lastName: 'Brown',
        fullName: 'Lily Brown',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Lily');
  });

  it('should do nothing if the array is empty', () => {
    const users = [];

    restoreNames(users);

    expect(users).toEqual([]);
  });

  it(
    'should handle users with missing fullName gracefully',
    () => {
      const users = [
        {
          lastName: 'Doe',
          firstName: undefined,
        },
        {
          fullName: null,
          firstName: undefined,
        },
        {
          fullName: '',
          firstName: undefined,
        },
      ];

      restoreNames(users);

      expect(users[0].firstName).toBeUndefined();
      expect(users[1].firstName).toBeUndefined();
      expect(users[2].firstName).toBe('');
    }
  );
});
