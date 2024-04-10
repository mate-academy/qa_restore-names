'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should be a function', () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it('should restore firstName with fullName', () => {
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

    expect(users[0].firstName).toEqual('Jack');
    expect(users[1].firstName).toEqual('Mike');
  });

  it('should not change firstName if it is specified', () => {
    const users = [
      {
        firstName: 'Alex',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
      {
        firstName: 'Misha',
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toEqual('Alex');
    expect(users[1].firstName).toEqual('Misha');
  });

  it('should not change firstName if fullName not specified', () => {
    const users = [
      {
        lastName: 'Holy',
        fullName: '',
      },
      {
        lastName: 'Adams',
      },
      {
        firstName: undefined,
        lastName: 'Adams',
        fullName: undefined,
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBeUndefined();
    expect(users[1].firstName).toBeUndefined();
    expect(users[2].firstName).toBeUndefined();
  });
});
