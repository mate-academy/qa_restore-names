'use strict';

const { restoreNames } = require('./restoreNames');

describe('restoreNames', () => {
  it('should restore firstName for users with undefined firstName', () => {
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

  it('should not modify users with already defined firstName', () => {
    const users = [
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

  it('should throw an error when fullName is missing or invalid', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: undefined,
      },
      {
        firstName: undefined,
        lastName: 'Adams',
        fullName: 'InvalidFullName',
      },
    ];

    expect(() => restoreNames(users)).toThrow(TypeError);

    expect(users).toEqual([
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: undefined,
      },
      {
        firstName: undefined,
        lastName: 'Adams',
        fullName: 'InvalidFullName',
      },
    ]);
  });

  it('should not modify users array if it is empty', () => {
    const users = [];

    restoreNames(users);

    expect(users).toEqual([]);
  });

  it('should handle case where fullName contains more than two names', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Michael Holy',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Jack',
        lastName: 'Holy',
        fullName: 'Jack Michael Holy',
      },
    ]);
  });
});

module.exports = { restoreNames };
