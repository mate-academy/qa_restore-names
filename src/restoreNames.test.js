'use strict';

const { restoreNames } = require('./restoreNames');

describe('restoreNames', () => {
  it('should be declared as a function', () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it('should correctly restore first names from fullName', () => {
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

  it('should not modify users that already have firstName', () => {
    const users = [
      {
        firstName: 'Jane',
        lastName: 'Doe',
        fullName: 'Jane Doe',
      },
      {
        firstName: 'Alice',
        lastName: 'Smith',
        fullName: 'Alice Smith',
      },
    ];

    // Deep copy to check immutability
    const originalUsers = JSON.parse(
      JSON.stringify(users)
    );

    restoreNames(users);

    expect(users).toEqual(originalUsers);
  });

  it('should handle an empty array without errors', () => {
    const users = [];

    restoreNames(users);

    expect(users).toEqual([]); // Should remain unchanged
  });

  it('should handle users with a single name in fullName', () => {
    const users = [
      {
        firstName: undefined,
        lastName: '',
        fullName: 'Charlie',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Charlie',
        lastName: '',
        fullName: 'Charlie',
      },
    ]);
  });

  it('should correctly process mixed cases with missing firstNames', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Johnson',
        fullName: 'Sara Johnson',
      },
      {
        firstName: undefined,
        lastName: 'Brown',
        fullName: 'Tom Brown',
      },
      {
        firstName: 'Anna',
        lastName: 'Taylor',
        fullName: 'Anna Taylor',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Sara',
        lastName: 'Johnson',
        fullName: 'Sara Johnson',
      },
      {
        firstName: 'Tom',
        lastName: 'Brown',
        fullName: 'Tom Brown',
      },
      {
        firstName: 'Anna',
        lastName: 'Taylor',
        fullName: 'Anna Taylor',
      }, // Should remain unchanged
    ]);
  });
});
