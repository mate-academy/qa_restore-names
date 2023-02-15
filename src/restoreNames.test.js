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

  it('should restore first name of the first user ', () => {
    expect(users[0].firstName).toBe('Jack');
  });

  it('should create first name of the second user ', () => {
    expect(users[1].firstName).toBe('Mike');
  });
});
