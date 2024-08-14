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

  restoreNames(users);

  it('should add first name when firstName === undefined', () => {
    users.forEach((user) => {
      if (user.firstName === undefined) {
        expect(user.firstName).toBeDefined();
        expect(typeof user.firstName).toBe('string');
      }
    });
  });

  it("should return 'undefined'", () => {
    expect(restoreNames(users)).toBe(undefined);
  });

  it('should return an empty array on empty input', () => {
    const users2 = [];

    restoreNames(users2);

    expect(users2).toEqual([]);
  });
});
