'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it(`should restore 'firstName' if is equal ''`, () => {
    const users = [
      {
        firstName: '',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Jack');
  });

  it(`should restore 'firstName' if it is equal 'undefined'`, () => {
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

    expect(users[0].firstName).toBe('Jack');
  });

  it(`should restore 'firstName' to users who do not have it`, () => {
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

    expect(users[1].firstName).toBe('Mike');
  });

  it(`should restore 'firstName' in multiple objects`, () => {
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

    expect(users[0].firstName).toBe('Jack');
    expect(users[1].firstName).toBe('Mike');
  });

  it(`should throw an error if the user does not have a 'fullName'`, () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
      },
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    expect(() => {
      restoreNames(users);
    })
      .toThrow();
  });

  it(`should return an empty array`, () => {
    const users = [];

    restoreNames(users);

    expect(users).toEqual([]);
  });
});
