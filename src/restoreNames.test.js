'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

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

  it('should be declared', () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it('should not return anything from the function', () => {
    expect(restoreNames(users)).toBe(undefined);
  });

  it('should add `firstName` property to each Object', () => {
    restoreNames(users);

    expect(users[1].hasOwnProperty('firstName')).toBe(true);
  });

  it('should change `undefined` value', () => {
    restoreNames(users);

    expect(users[0]['firstName']).not.toBe('undefined');
  });

  it('should set correct values of `firstName` property', () => {
    restoreNames(users);

    expect(users[0]['firstName']).toBe('Jack');
    expect(users[1]['firstName']).toBe('Mike');
  });
});
