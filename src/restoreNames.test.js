'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should restore firstName from fullName if it is undefined', () => {
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

  it('should not change firstName if it already exists', () => {
    const users = [
      {
        firstName: 'Anna',
        lastName: 'Smith',
        fullName: 'Anna Smith',
      },
    ];

    const originalFirstName = users[0].firstName;

    restoreNames(users);
    expect(users[0].firstName).toBe(originalFirstName);
  });

  it('should handle empty array', () => {
    const users = [];

    restoreNames(users);
    expect(users).toEqual([]);
  });

  it('should use only the first word from fullName as firstName', () => {
    const users = [
      {
        lastName: 'Doe',
        fullName: 'Johnathan Michael Doe',
      },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe('Johnathan');
  });

  it('should set firstName to empty string if fullName is empty string', () => {
    const users = [
      {
        lastName: 'Smith',
        fullName: '',
      },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe('');
  });

  it('should set firstName to fullName if fullName has no spaces', () => {
    const users = [
      {
        lastName: 'Solo',
        fullName: 'Han',
      },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe('Han');
  });
});
