'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it(`'firstName' is 'undefined'`, () => {
    const user = {
      firstName: undefined,
      lastName: 'Holy',
      fullName: 'Jack Holy',
    };

    restoreNames([user]);

    expect(user).toMatchObject({
      firstName: 'Jack',
      lastName: 'Holy',
      fullName: 'Jack Holy',
    });
  });

  it(`'firstName' was deleted`, () => {
    const user = {
      lastName: 'Adams',
      fullName: 'Mike Adams',
    };

    restoreNames([user]);

    expect(user).toMatchObject({
      firstName: 'Mike',
      lastName: 'Adams',
      fullName: 'Mike Adams',
    });
  });

  it(`valid user`, () => {
    const user = {
      firstName: 'Mike',
      lastName: 'Adams',
      fullName: 'Mike Adams',
    };

    restoreNames([user]);

    expect(user).toMatchObject({
      firstName: 'Mike',
      lastName: 'Adams',
      fullName: 'Mike Adams',
    });
  });

  it(`should return 'undefined'`, () => {
    const user = {
      firstName: 'Mike',
      lastName: 'Adams',
      fullName: 'Mike Adams',
    };

    expect(restoreNames([user])).toBeUndefined();
  });
});
