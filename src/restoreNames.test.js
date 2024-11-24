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

  const result = restoreNames(users);

  it('should be declared', () => expect(restoreNames).toBeDefined());

  it('should not return anything', () => expect(result).toBeUndefined());

  it('should have first name', () => {
    users.forEach((user) => expect(user.firstName).toBeTruthy());
  });

  it(`should restore firstName if it is 'undefined'`, () => {
    expect(users[0].firstName).toBe('Jack');
  });

  it(`should restore firstName if it doesn't have this property`, () => {
    expect(users[1].firstName).toBe('Mike');
  });
});
