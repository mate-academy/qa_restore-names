'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should be declared', () => {
    expect(typeof restoreNames).toBe('function');
  });

  it('should restore firstName from fullName when firstName is missing', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Jack');
  });

  it('should do nothing if fullName is missing', () => {
    const users = [
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
      }];

    restoreNames(users);
    expect(users[0].firstName).toBe('Mike');
  });
});
