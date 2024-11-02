'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should be declared', () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it(`should restore fist names,
    if they are not declared or are undefined`, () => {
    const users = [{
      firstName: undefined,
      lastName: 'Holy',
      fullName: 'Jack Holy',
    },
    {
      lastName: 'Adams',
      fullName: 'Mike Adams',
    }];

    restoreNames(users);

    expect(users[0].firstName).toEqual('Jack');
    expect(users[1].firstName).toEqual('Mike');
  });

  it('should throw an error if users are not an array', () => {
    expect(() => restoreNames({})).toThrow();
  });

  it(`should throw an error,
    if user is not an object or is an empty object`, () => {
    expect(() => restoreNames([false, [], {}, null])).toThrow();
  });

  it(`should restore fist names,
    if they are not strings`, () => {
    const users = [{
      firstName: 12,
      lastName: 'Holy',
      fullName: 'Jack Holy',
    },
    {
      firstName: [],
      lastName: 'Adams',
      fullName: 'Mike Adams',
    }];

    restoreNames(users);

    expect(users[0].firstName).toEqual('Jack');
    expect(users[1].firstName).toEqual('Mike');
  });
});
