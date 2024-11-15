'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it(`should be declared`, () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it(`should set firstName if firstName is undefined`, () => {
    const user = {
      firstName: undefined,
      lastName: 'Holy',
      fullName: 'Jack Holy',
    };

    restoreNames([user]);

    expect(user.firstName).toBe('Jack');
  });

  it(`should set firstName if firstName is not present`, () => {
    const user = {
      lastName: 'Adams',
      fullName: 'Mike Adams',
    };

    restoreNames([user]);

    expect(user.firstName).toBe('Mike');
  });

  it(`should not set value from fullName if firstName is present`, () => {
    const user = {
      firstName: 'Tom',
      lastName: 'Adams',
      fullName: 'Mike Adams',
    };

    restoreNames([user]);

    expect(user.firstName).toBe('Tom');
  });

  it(`should not set firstName if firstName is present
   and not underfined`, () => {
    const user = {
      firstName: 'Mike',
      lastName: 'Adams',
      fullName: 'Mike Adams',
    };

    restoreNames([user]);

    expect(user.firstName).toBe('Mike');
  });
});
