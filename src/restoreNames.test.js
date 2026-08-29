'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should restore the firstName, when firstName is undefined', () => {
    const users = [
      {
        firstName: undefined,
        fullName: 'Jack Holy',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toEqual('Jack');
  });

  it('should restore the firstName, when firstName is absent', () => {
    const users = [
      {
        fullName: 'Jack Holy',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toEqual('Jack');
  });

  it(`shouldn't restore the firstName, when firstName is correctly present`, () => {
    const users = [
      {
        firstName: 'Jack',
        fullName: 'Jack Holy',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toEqual('Jack');
  });

  it('should restore the firstName with multiple users', () => {
    const users = [
      {
        firstName: undefined,
        fullName: 'Jack Holy',
      },
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toEqual('Jack');
    expect(users[1].firstName).toEqual('Mike');
  });

  it('should restore the firstName, when fullName has only one word', () => {
    const users = [
      {
        firstName: undefined,
        fullName: 'Holy',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toEqual('Holy');
  });
});
