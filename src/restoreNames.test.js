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

  it('should not return anything', () => {
    expect(restoreNames(users)).toBeUndefined();
  });

  it('returns user with restored name', () => {
    restoreNames(users);
    expect(users).toEqual(expectedUsers);
  });

  it('does not modify user with existing name', () => {
    const user = {
      firstName: 'Jack',
      lastName: 'Holy',
      fullName: 'Jack Holy',
    };

    restoreNames([user]);

    expect({
      firstName: 'Jack',
      lastName: 'Holy',
      fullName: 'Jack Holy',
    }).toEqual(user);
  });
});
