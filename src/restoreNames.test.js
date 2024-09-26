'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should be declared', () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it('should not return anything', () => {
    expect(typeof restoreNames([])).toEqual('undefined');
  });

  it(`should set correct 'firstName' to users who do not have it`, () => {
    const users = [
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);

    expect(users[0]).toEqual({
      firstName: 'Mike',
      lastName: 'Adams',
      fullName: 'Mike Adams',
    });
  });

  it(`should set correct 'firstName'`
    + `to users with 'firstName' equal to 'undefined'`, () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);

    expect(users[0]).toEqual({
      firstName: 'Mike',
      lastName: 'Adams',
      fullName: 'Mike Adams',
    });
  });

  it(`should correct all 'firstName' fields that are 'undefined'`, () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
      {
        firstName: undefined,
        lastName: 'Smith',
        fullName: 'Andy Smith',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Mike',
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
      {
        firstName: 'Andy',
        lastName: 'Smith',
        fullName: 'Andy Smith',
      },
    ]);
  });

  it(`should not modify user`
    + `if 'firstName' of user exist or not equal to 'undefined'`, () => {
    const users = [
      {
        firstName: 'Mike',
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
      {
        firstName: 'Andy',
        lastName: 'Smith',
        fullName: 'Andy Smith',
      },
    ];

    restoreNames(users);

    expect(users[0]).toEqual({
      firstName: 'Mike',
      lastName: 'Adams',
      fullName: 'Mike Adams',
    });
  });
});
