'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should be declared', () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it('should work with empty firstName', () => {
    const users = [
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toEqual('Mike');
  });

  it('should work with undefined firstName', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toEqual('Jack');
  });

  it('should work with empty string firstName', () => {
    const users = [
      {
        firstName: '',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toEqual('Jack');
  });

  it('should work with null firstName', () => {
    const users = [
      {
        firstName: null,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toEqual('Jack');
  });

  it('should not make changes with valid firstName', () => {
    const users = [
      {
        firstName: 'Jack',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toEqual('Jack');
  });

});
