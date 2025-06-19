'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should ', () => {

  });

  test('restores firstName if it is undefined', () => {
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

  test('does not overwrite firstName if it already exists', () => {
    const users = [
      {
        firstName: 'Existing',
        lastName: 'Name',
        fullName: 'Should Not Override',
      },
      {
        firstName: 'Present',
        lastName: 'User',
        fullName: 'Present User',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Existing');
    expect(users[1].firstName).toBe('Present');
  });

  test('restores firstName if it is null or empty string', () => {
    const users = [
      {
        firstName: null,
        lastName: 'NullLast',
        fullName: 'Null User',
      },
      {
        firstName: '',
        lastName: 'EmptyLast',
        fullName: 'Empty User',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Null');
    expect(users[1].firstName).toBe('Empty');
  });

  test('handles users array being empty gracefully', () => {
    const users = [];

    expect(() => restoreNames(users)).not.toThrow();
    expect(users).toEqual([]);
  });

  test('restores firstName from fullName with multiple spaces', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Smith',
        fullName: 'Anna Maria Smith',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Anna');
  });
});
