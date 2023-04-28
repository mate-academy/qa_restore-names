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

  it('should extract name from full name', () => {
    restoreNames(users);

    expect(users[0].firstName).toBe('Jack');
  });

  it('should add firstName field if it is missing', () => {
    restoreNames(users);

    expect(users[1].firstName).toBe('Mike');
  });
});
