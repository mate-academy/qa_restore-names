'use strict';

describe('restoreNames', () => {
  it('should restore firstName if it is undefined', () => {
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

  it('should restore firstName if it is missing', () => {
    const users = [
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Mike');
  });

  it('should not change firstName if it already exists', () => {
    const users = [
      {
        firstName: 'Lily',
        lastName: 'Smith',
        fullName: 'Lily Smith',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Lily');
  });

  it('should handle multiple users correctly', () => {
    const users = [
      {
        lastName: 'Brown',
        fullName: 'Tom Brown',
      },
      {
        firstName: 'Alice',
        lastName: 'Green',
        fullName: 'Alice Green',
      },
      {
        firstName: undefined,
        lastName: 'White',
        fullName: 'Jane White',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Tom');
    expect(users[1].firstName).toBe('Alice');
    expect(users[2].firstName).toBe('Jane');
  });

  it('should do nothing if users array is empty', () => {
    const users = [];

    restoreNames(users);

    expect(users.length).toBe(0);
  });
});
