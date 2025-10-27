'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should be declared', () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it(`should set 'firstName' who don't have it`, () => {
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

    expect(users[0]).toHaveProperty('firstName', 'Jack');
    expect(users[1]).toHaveProperty('firstName', 'Mike');
  });

  it(`should set 'firstName' whern it is equal to undefined`, () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
      {
        firstName: undefined,
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    expect(users[0].firstName).toBeUndefined();
    expect(users[1].firstName).toBeUndefined();

    restoreNames(users);

    expect(users[0]).toHaveProperty('firstName', 'Jack');
    expect(users[1]).toHaveProperty('firstName', 'Mike');
  });

  it(`should set 'firstName' when has a unvalid firstName`, () => {
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

    expect(users[0].firstName).toBeUndefined();
    expect(users[1]).not.toHaveProperty('firstName');

    restoreNames(users);

    expect(users[0]).toHaveProperty('firstName', 'Jack');
    expect(users[1]).toHaveProperty('firstName', 'Mike');
  });

  it(`should does not modify when has a valid firstName`, () => {
    const users = [
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

    expect(users[0]).toHaveProperty('firstName', 'Jack');
    expect(users[1]).toHaveProperty('firstName', 'Mike');

    restoreNames(users);

    expect(users[0]).toHaveProperty('firstName', 'Jack');
    expect(users[1]).toHaveProperty('firstName', 'Mike');
  });

  it(`should not return anything from the function`, () => {
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

    expect(restoreNames(users)).toBeUndefined();
  });
});
