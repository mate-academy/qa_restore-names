'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should restore firstName frome fullName if firstName is missing', () => {
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

    expect(users[0].firstName).toBe('Jack');
    expect(users[1].firstName).toBe('Mike');
  });

  it('should not change firstName if it already exists', () => {
    const users = [
      {
        firstName: 'Jack',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Jack');
  });

  it('should return anything', () => {
    const users = [
      {
        firstName: 'Jack',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    const result = restoreNames(users);

    expect(result).toBeUndefined();
  });
});
