'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should be a function', () => {
    expect(restoreNames)
      .toBeInstanceOf(Function);
  });

  it('should add firstname if its undefined', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];
    const expectedResult = [
      {
        firstName: 'Jack',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    restoreNames(users);

    expect(users)
      .toEqual(expectedResult);
  });

  it('should add firstname if its empty string', () => {
    const users = [
      {
        firstName: '',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];
    const expectedResult = [
      {
        firstName: 'Jack',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    restoreNames(users);

    expect(users)
      .toEqual(expectedResult);
  });

  it('should add firstname if its absent', () => {
    const users = [
      {
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];
    const expectedResult = [
      {
        firstName: 'Jack',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    restoreNames(users);

    expect(users)
      .toEqual(expectedResult);
  });

  it('should add firstname to all users', () => {
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

    const expectedResult = [
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

    expect(users)
      .toEqual(expectedResult);
  });
});
