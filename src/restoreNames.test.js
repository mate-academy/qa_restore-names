'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should be declared', () => {
    expect(restoreNames)
      .toBeInstanceOf(Function);
  });

  it('should not return anything', () => {
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

    expect(restoreNames(users))
      .toBeUndefined();
  });

  it('should not modified user if it has firstName propertie', () => {
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

    restoreNames(users);

    expect(users)
      .toEqual(users);
  });

  it('should work if firstName equal to undefined', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    restoreNames(users);

    expect(users)
      .toEqual([
        {
          firstName: 'Jack',
          lastName: 'Holy',
          fullName: 'Jack Holy',
        },
      ]);
  });

  it('should work if there is no firstName propertie in user object', () => {
    const users = [
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);

    expect(users)
      .toEqual([
        {
          firstName: 'Mike',
          lastName: 'Adams',
          fullName: 'Mike Adams',
        },
      ]);
  });

  it('should work with different scenarious', () => {
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
      {
        firstName: 'Barry',
        lastName: 'Allen',
        fullName: 'Barry Allen',
      },
      {
        firstName: undefined,
        lastName: 'Statham',
        fullName: 'Jason Statham',
      },
      {
        lastName: 'Mostavchuk',
        fullName: 'Petro Mostavchuk',
      },
    ];

    restoreNames(users);

    expect(users)
      .toEqual([
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
        {
          firstName: 'Barry',
          lastName: 'Allen',
          fullName: 'Barry Allen',
        },
        {
          firstName: 'Jason',
          lastName: 'Statham',
          fullName: 'Jason Statham',
        },
        {
          firstName: 'Petro',
          lastName: 'Mostavchuk',
          fullName: 'Petro Mostavchuk',
        },
      ]);
  });
});
