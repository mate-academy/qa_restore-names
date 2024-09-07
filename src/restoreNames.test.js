'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should restore firstName from fullName if firstName is undefined', () => {
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

  it('should not change firstName if it already exists', () => {
    const users = [
      {
        firstName: 'Alice',
        lastName: 'Johnson',
        fullName: 'Alice Johnson',
      },
      {
        firstName: 'Bob',
        lastName: 'Smith',
        fullName: 'Bob Smith',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Alice',
        lastName: 'Johnson',
        fullName: 'Alice Johnson',
      },
      {
        firstName: 'Bob',
        lastName: 'Smith',
        fullName: 'Bob Smith',
      },
    ]);
  });

  it('should restore firstName if it is an empty string', () => {
    const users = [
      {
        firstName: '',
        lastName: 'Doe',
        fullName: 'John Doe',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'John',
        lastName: 'Doe',
        fullName: 'John Doe',
      },
    ]);
  });

  it('should do nothing if array is empty', () => {
    const users = [];

    restoreNames(users);

    expect(users).toEqual([]);
  });

  it('should handle a mix of users with and without firstName', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Taylor',
        fullName: 'James Taylor',
      },
      {
        firstName: 'Sara',
        lastName: 'Connor',
        fullName: 'Sara Connor',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'James',
        lastName: 'Taylor',
        fullName: 'James Taylor',
      },
      {
        firstName: 'Sara',
        lastName: 'Connor',
        fullName: 'Sara Connor',
      },
    ]);
  });
});
