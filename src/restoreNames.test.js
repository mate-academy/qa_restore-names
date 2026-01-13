'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should update firstname field', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Jack',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ]);
  });

  it('should add firstname field if not exist', () => {
    const users = [
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Mike',
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ]);
  });

  it('should handle an empty array without errors', () => {
    const users = [];

    restoreNames(users);

    expect(users).toEqual([]);
  });

  it(`should not update if firstname isn't empty`, () => {
    const users = [
      {
        firstName: 'Mike',
        lastName: 'Adams',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Mike',
        lastName: 'Adams',
      },
    ]);
  });

  it(`should return undefined`, () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    expect(restoreNames(users)).toBe(undefined);
  });
});
