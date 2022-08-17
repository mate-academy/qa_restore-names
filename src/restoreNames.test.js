'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should be declared', () => {
    expect(restoreNames)
      .toBeInstanceOf(Function);
  });

  it(`should return nothing`, () => {
    expect(restoreNames([
      {
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ]));
  });

  it(`should add the firstName if it's missed`, () => {
    const users = [{
      lastName: 'Holy',
      fullName: 'Jack Holy',
    }];

    restoreNames(users);

    const expected = [{
      firstName: 'Jack',
      lastName: 'Holy',
      fullName: 'Jack Holy',
    }];

    expect(users)
      .toEqual(expected);
  });

  it(`should add the firstName if t's undefined`, () => {
    const users = [{
      firstName: undefined,
      lastName: 'Holy',
      fullName: 'Jack Holy',
    }];

    restoreNames(users);

    const expected = [{
      firstName: 'Jack',
      lastName: 'Holy',
      fullName: 'Jack Holy',
    }];

    expect(users)
      .toEqual(expected);
  });
});
