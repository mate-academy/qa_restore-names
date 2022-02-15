'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should be declared', () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it(`should set firstname if undefined`, () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      }
    ];

    restoreNames(users);

    const expected = [
      {
        firstName: 'Jack',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      }
    ];

    expect(users).toEqual(expected);
  });

  it(`should set firstname if ommited`, () => {
    const users = [
      {
        lastName: 'Holy',
        fullName: 'Jack Holy',
      }
    ];

    restoreNames(users);

    const expected = [
      {
        firstName: 'Jack',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      }
    ];

    expect(users).toEqual(expected);
  });

  it(`shouldn't set firstname if existed`, () => {
    const users = [
      {
        firstName: 'Mike',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      }
    ];

    restoreNames(users);

    const expected = [
      {
        firstName: 'Mike',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      }
    ];

    expect(users).toEqual(expected);
  });

  it(`should work with empty array`, () => {
    const users = [];

    restoreNames(users);

    const expected = [];

    expect(users).toEqual(expected);
  });

  it(`should work with 2 elements`, () => {
    const users = [
      {
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
      {
        firstName: undefined,
        lastName: 'Adams',
        fullName: 'Mike Adams',
      }
    ];

    restoreNames(users);

    const expected = [
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

    expect(users).toEqual(expected);
  });


  // write tests here
});
