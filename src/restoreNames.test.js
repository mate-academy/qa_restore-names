'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should restore firstName when it is undefined', () => {
    const users = [
      {
        firstName: undefined, lastName: 'Holy', fullName: 'Jack Holy',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Jack');
  });

  it('should restore firstName when it is missing', () => {
    const users = [
      {
        lastName: 'Adams', fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Mike');
  });

  it('should restore firstName when it is null', () => {
    const users = [
      {
        firstName: null, lastName: 'Brown', fullName: 'Lara Brown',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Lara');
  });

  it('should not change firstName if it already exists', () => {
    const users = [
      {
        firstName: 'Anna', lastName: 'Smith', fullName: 'Anna Smith',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Anna');
  });

  it('should correctly handle multiple users at once', () => {
    const users = [
      {
        firstName: undefined, lastName: 'Holy', fullName: 'Jack Holy',
      },
      {
        lastName: 'Adams', fullName: 'Mike Adams',
      },
      {
        firstName: 'Sara', lastName: 'Connor', fullName: 'Sara Connor',
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
      {
        firstName: 'Sara', lastName: 'Connor', fullName: 'Sara Connor',
      },
    ]);
  });

  it('should do nothing if array is empty', () => {
    const users = [];

    restoreNames(users);

    expect(users).toEqual([]);
  });

  it('should return undefined', () => {
    const users = [{ fullName: 'John Doe' }];

    const result = restoreNames(users);

    expect(result).toBeUndefined();
  });
});
