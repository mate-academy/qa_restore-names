'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should be declared', () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it('should fill in missing firstName from fullName', () => {
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
    ];

    const expectedUsers = [
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
    ];

    restoreNames(users);

    expect(users).toEqual(expectedUsers);
  });

  it('should add firstName when it is undefined using fullName', () => {
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

    const expectedUsers = [
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
    ];

    restoreNames(users);

    expect(users).toEqual(expectedUsers);
  });

  it('should use only the first word from fullName as firstName', () => {
    const users = [
      { fullName: 'Peter Benjamin Parker' },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe('Peter');
  });

  it('should handle fullName with only one word', () => {
    const users = [
      {
        lastName: 'Parker',
        fullName: 'Peter',
      },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe('Peter');
  });
});
