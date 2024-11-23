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

  it('should be declared', () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it('for "Jack Holy" should restore firstName "Jack"', () => {
    restoreNames(users);

    expect(users[0].firstName).toBe('Jack');
  });

  it('for "Mike Adams" should restore firstName "Mike"', () => {
    restoreNames(users);

    expect(users[1].firstName).toBe('Mike');
  });
});
