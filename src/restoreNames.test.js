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

  it('should be a function', () => {
    const result = restoreNames(users);

    expect(result).toBe(undefined);
  });

  it('should be a function', () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  restoreNames(users);

  users.forEach((item, index) => {
    it('firstName should be equl first part of fullName', () => {
      expect(item.firstName).toBe(item.fullName.split(' ')[0]);
    });
  });
});
