'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should be declared', () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it('return Artem and Mike', () => {
    const users = [
      {
        firstName: 'Jack',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
      {
        lastName: 'Zakharchuk',
        fullName: 'Artem Zakharchuk',
      },
    ];

    restoreNames(users);

    expect(users[1].firstName).toBe('Mike');
    expect(users[2].firstName).toBe('Artem');
  });

  it('should do nothing if users are ok', () => {
    const users = [
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
      {
        firstName: 'Artem',
        lastName: 'Zakharchuk',
        fullName: 'Artem Zakharchuk',
      },
    ];

    restoreNames(users);

    expect(users).toEqual(users);
  });

  it('should not return anything', () => {
    const users = [
      {
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
      {
        firstName: 'Mike',
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
      {
        lastName: 'Zakharchuk',
        fullName: 'Artem Zakharchuk',
      },
    ];

    expect(restoreNames(users)).toBe(undefined);
  });
});
