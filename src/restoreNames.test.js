'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should be a function', () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it('should not return anything', () => {
    expect(restoreNames([])).toBeUndefined();
  });

  it('should set right firstname for all users in array', () => {
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

    const result = [
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
    expect(users).toEqual(result);
  });

  it('should set right firstname if firstname is undefined', () => {
    const users = [{
      firstName: undefined,
      lastName: 'Holy',
      fullName: 'Jack Holy',
    }];

    const result = [{
      firstName: 'Jack',
      lastName: 'Holy',
      fullName: 'Jack Holy',
    }];

    restoreNames(users);
    expect(users).toEqual(result);
  });

  it('should set right firstname if user dont have firstname', () => {
    const users = [
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];
    const result = [
      {
        firstName: 'Mike',
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);
    expect(users).toEqual(result);
  });
});
