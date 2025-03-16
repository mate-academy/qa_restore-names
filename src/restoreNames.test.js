'use strict';

describe('restoreNames', () => {
  function restoreNames(users) {
    users.forEach(user => {
      if (!user.firstName && user.fullName) {
        user.firstName = user.fullName.split(' ')[0];
      }
    });
  }

  it ('should restore firstName from fullName when firstName is undefined', () => {
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

  it ('should not modify firstName if it is already present', () => {
    const users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        fullName: 'John Doe',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('John');
  });

  it ('should not modify firstName if fullName is not present', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Adams',
        fullName: undefined,
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBeUndefined();
  });

  test('should handle an empty array', () => {
    const users = [];

    restoreNames(users);

    expect(users.length).toBe(0); // No change to the array
  });

  it ('should restore firstName from fullName for multiple users', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
      {
        firstName: undefined,
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Jack');
    expect(users[1].firstName).toBe('Mike');
  });
});

