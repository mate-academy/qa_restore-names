'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('adds firstName when missing or undefined', () => {
    const users = [

      {
        firstName: undefined, lastName: 'Holy', fullName: 'Jack Holy',
      },
      {
        lastName: 'Adams', fullName: 'Mike Adams',
      },
    ];

    const firstRef = users[0];
    const secondRef = users[1];

    const lastNamesBefore = users.map(u => u.lastName);
    const fullNamesBefore = users.map(u => u.fullName);

    const result = restoreNames(users);

    expect(result).toBeUndefined();

    expect(users[0]).toBe(firstRef);
    expect(users[1]).toBe(secondRef);

    expect(firstRef.firstName).toBe('Jack');
    expect(secondRef.firstName).toBe('Mike');

    expect(users.map(u => u.lastName)).toEqual(lastNamesBefore);
    expect(users.map(u => u.fullName)).toEqual(fullNamesBefore);
  });

  it('does not change existing firstName', () => {
    const users = [
      {
        firstName: 'Existing',
        lastName: 'Smith',
        fullName: 'Existing Smith',
      },
    ];

    const firstRef = users[0];

    restoreNames(users);

    expect(firstRef.firstName).toBe('Existing');
  });
});
