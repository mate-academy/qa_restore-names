'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should be declared', () => {
    expect(restoreNames)
      .toBeInstanceOf(Function);
  });

  it(`should return an empty array`, () => {
    const users = [];

    restoreNames(users);

    expect(users)
      .toEqual([]);
  });

  it(`should add the firstName if it's empty`, () => {
    const users = [{
      firstName: '',
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

  it(`should add the firstName if it's undefined`, () => {
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

  it(`should return the object if the firstName exist`, () => {
    const users = [{
      firstName: 'Jack',
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
