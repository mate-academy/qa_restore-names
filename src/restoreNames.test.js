'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should restore first name from full name if first name missing', () => {
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

    expect(users).toEqual([
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
    ]);
  });

  it('should not change first name if it is already set', () => {
    const users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        fullName: 'John Doe',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'John',
        lastName: 'Doe',
        fullName: 'John Doe',
      },
    ]);
  });

  it('should not return anything', () => {
    const users = [
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    const result = restoreNames(users);

    expect(result).toBeUndefined();
  });
});
