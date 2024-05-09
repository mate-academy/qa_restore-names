'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  let usersToRestore = [
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

  const restoredUsers = [
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

  it('should restore first names if missing', () => {
    restoreNames(usersToRestore);
    expect(usersToRestore).toEqual(restoredUsers);
  });

  it('should not modify first names if already present', () => {
    usersToRestore = [
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

    const expectedUsers = [
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

    restoreNames(usersToRestore);
    expect(usersToRestore).toEqual(expectedUsers);
  });

  it('should handle empty input array', () => {
    usersToRestore = [];

    restoreNames(usersToRestore);
    expect(usersToRestore).toEqual([]);
  });

  it('should handle empty full name', () => {
    usersToRestore = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: '',
      },
    ];

    const expectedUsers = [
      {
        firstName: '',
        lastName: 'Holy',
        fullName: '',
      },
    ];

    restoreNames(usersToRestore);
    expect(usersToRestore).toEqual(expectedUsers);
  });
});
