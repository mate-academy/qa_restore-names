'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');
  const correctUsers = [
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

  it('should be declared', () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it('should change firstname if it undefined', () => {
    const usersWithUndefinedField = [
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

    restoreNames(usersWithUndefinedField);

    expect(usersWithUndefinedField).toEqual(correctUsers);
  });

  it('should add firstname if it doesnt exist', () => {
    const usersWithNoFirstName = [
      {
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(usersWithNoFirstName);

    expect(usersWithNoFirstName).toEqual(correctUsers);
  });
});
