'use strict';

const { restoreNames } = require('./restoreNames');

describe('restoreNames', () => {
  it('should restore firstName from fullName when firstName is '
    + 'undefined', () => {
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

  it('should not modify firstName if it is already defined', () => {
    const users = [
      {
        firstName: 'Anna',
        lastName: 'Smith',
        fullName: 'Anna Smith',
      },
      {
        firstName: 'John',
        lastName: 'Doe',
        fullName: 'John Doe',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Anna',
        lastName: 'Smith',
        fullName: 'Anna Smith',
      },
      {
        firstName: 'John',
        lastName: 'Doe',
        fullName: 'John Doe',
      },
    ]);
  });

  it('should handle cases where fullName is missing', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Doe',
        fullName: undefined,
      },
      {
        lastName: 'Smith',
        fullName: 'Jane Smith',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: undefined,
        lastName: 'Doe',
        fullName: undefined,
      },
      {
        firstName: 'Jane',
        lastName: 'Smith',
        fullName: 'Jane Smith',
      },
    ]);
  });
});
