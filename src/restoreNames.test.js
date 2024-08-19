'use strict';

describe('restoreNames function', () => {
  const { restoreNames } = require('./restoreNames');

  it(`should write firstName for a single user`, () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([ {
      firstName: 'Jack',
      lastName: 'Holy',
      fullName: 'Jack Holy',
    }]);
  });

  it(`should write firstName when there is no firstName key property`, () => {
    const users = [
      {
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([ {
      firstName: 'Jack',
      lastName: 'Holy',
      fullName: 'Jack Holy',
    }]);
  });

  it(`should write firstName for multiple users`, () => {
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

    expect(users).toEqual([ {
      firstName: 'Jack',
      lastName: 'Holy',
      fullName: 'Jack Holy',
    },
    {
      firstName: 'Mike',
      lastName: 'Adams',
      fullName: 'Mike Adams',
    }]);
  });

  it(`should throw error when no fullName`, () => {
    const users = [
      {
        lastName: 'Holy',
      },
    ];

    expect(() => {
      restoreNames(users);
    }).toThrow();
  });
});
