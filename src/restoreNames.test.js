'use strict';

const { restoreNames } = require('./restoreNames');

describe('restoreNames', () => {
  it(`'restoreNames should update firstName`
    + ` from undefined to the correct value'`, () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Jack');
  });

  it(`'restoreNames should create firstName`
    + ` key with "Name" as a value`, () => {
    const users = [
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Mike');
  });

  it(`'restoreNames should not change`
    + ` firstName if it has value`, () => {
    const users = [
      {
        firstName: 'Andrei',
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Andrei');
  });

  it(`'restoreNames should not change`
    + ` firstName if there is no fullName`, () => {
    const users = [
      {
        firstName: 'Andrei',
        lastName: 'Adams',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Andrei');
  });

  it(`'restoreNames should change`
    + ` firstName if there is fullName has three words`, () => {
    const users = [
      {
        lastName: 'Adams',
        fullName: 'Mike Simon Adams',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Mike');
  });

  it(`'restoreNames should handle empty user array`, () => {
    const users = [];

    restoreNames(users);

    expect(users).toEqual([]);
  });
});
