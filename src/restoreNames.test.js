'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('function not return anything', () => {
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

  expect(restoreNames(users)).toBe(undefined);
  });

  it('should restore firstname if it is undefined', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
      {
        firstName: undefined,
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

  it('should restore firstname if it is absent', () => {
    const users = [
      {
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

  it('should restore firstname if it is empty string', () => {
    const users = [
      {
        firstName: '',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
      {
        firstName: '',
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

  it('should not affect if firstname has a value', () => {
    const users = [
      {
        firstName: 'Misha',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
      {
        firstName: 'Misha',
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Misha',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
      {
        firstName: 'Misha',
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ]);
  });
});
