'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should be declared', () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it('should add a firstName property to users that don\'t have it', () => {
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

    users.forEach(user => {
      expect(user).toHaveProperty('firstName');
    });
  });

  it('should change a firstName value if firstName is undefined', () => {
    const users = [
      {
        lastName: 'Holy',
        fullName: 'Jack Holy',
        firstName: undefined,
      },
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
        firstName: undefined,
      },
    ];

    const expectedResult = [
      {
        lastName: 'Holy',
        fullName: 'Jack Holy',
        firstName: 'Jack',
      },
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
        firstName: 'Mike',
      },
    ];

    restoreNames(users);

    expect(users).toEqual(expectedResult);
  });

  it('should do nothing if a firstName property exists', () => {
    const users = [
      {
        lastName: 'Holy',
        fullName: 'Jack Holy',
        firstName: 'Jack',
      },
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
        firstName: 'Mike',
      },
    ];

    const expectedResult = [
      {
        lastName: 'Holy',
        fullName: 'Jack Holy',
        firstName: 'Jack',
      },
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
        firstName: 'Mike',
      },
    ];

    restoreNames(users);

    expect(users).toEqual(expectedResult);
  });

  it('should add a correct firstName value if users don\'t have it', () => {
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

    const expectedResult = [
      {
        lastName: 'Holy',
        fullName: 'Jack Holy',
        firstName: 'Jack',
      },
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
        firstName: 'Mike',
      },
    ];

    restoreNames(users);

    expect(users).toEqual(expectedResult);
  });

  it('should work correctly for undefined, missed, and exist firstName', () => {
    const users = [
      {
        lastName: 'Holy',
        fullName: 'Jack Holy',
        firstName: undefined,
      },
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
      {
        lastName: 'Bulbuk',
        fullName: 'Andrii Bulbuk',
        firstName: 'Andrii',
      },
    ];

    const expectedResult = [
      {
        lastName: 'Holy',
        fullName: 'Jack Holy',
        firstName: 'Jack',
      },
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
        firstName: 'Mike',
      },
      {
        lastName: 'Bulbuk',
        fullName: 'Andrii Bulbuk',
        firstName: 'Andrii',
      },
    ];

    restoreNames(users);

    expect(users).toEqual(expectedResult);
  });
});
