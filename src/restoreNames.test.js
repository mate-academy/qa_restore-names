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
    {
      firstName: 'John',
      lastName: 'Doe',
      fullName: 'John Doe',
    },
  ];

  it('should not return a value', () => {
    const result = restoreNames(users);

    expect(result).toBeUndefined();
  });

  it('should create correct firstName for 1st failed object', () => {
    restoreNames(users);

    expect(users[0].fullName)
      .toEqual(users[0].firstName + ' ' + users[0].lastName);
  });

  it('should create correct firstName for 2d failed object', () => {
    restoreNames(users);

    expect(users[1].firstName).toEqual('Mike');
  });

  it('should not modify existing firstName if present', () => {
    restoreNames(users);

    expect(users[2].firstName).toBe('John');
  });
});
