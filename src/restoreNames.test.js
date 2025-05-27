'use strict';

const { restoreNames } = require('./restoreNames');

describe('restoreNames', () => {
  it('should restore firstName from fullName if firstName is undefined', () => {
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

  it('should not change users who already have firstName', () => {
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

  it('should handle multiple users correctly', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Smith',
        fullName: 'Anna Smith',
      },
      {
        firstName: 'Brian',
        lastName: 'Fox',
        fullName: 'Brian Fox',
      },
      {
        lastName: 'Brown',
        fullName: 'Leo Brown',
      },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe('Anna');
    expect(users[1].firstName).toBe('Brian');
    expect(users[2].firstName).toBe('Leo');
  });

  it('should not throw if fullName is empty or malformed', () => {
    const users = [
      {
        lastName: 'Empty',
        fullName: '',
      },
      {
        lastName: 'OneWord',
        fullName: 'Single',
      },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe('');
    expect(users[1].firstName).toBe('Single');
  });
});
