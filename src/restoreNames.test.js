'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should correctly set firstName when it is undefined', () => {
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

  it('should not change firstName if it is already set', () => {
    const users = [
      {
        firstName: 'Emma',
        lastName: 'Watson',
        fullName: 'Emma Watson',
      },
      {
        firstName: 'Chris',
        lastName: 'Evans',
        fullName: 'Chris Evans',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Emma',
        lastName: 'Watson',
        fullName: 'Emma Watson',
      },
      {
        firstName: 'Chris',
        lastName: 'Evans',
        fullName: 'Chris Evans',
      },
    ]);
  });

  it('should handle empty array gracefully', () => {
    const users = [];

    restoreNames(users);

    expect(users).toEqual([]);
  });

  it('should work with mixed cases', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Doe',
        fullName: 'John Doe',
      },
      {
        firstName: 'Jane',
        lastName: 'Doe',
        fullName: 'Jane Doe',
      },
      {
        lastName: 'Smith',
        fullName: 'Will Smith',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'John',
        lastName: 'Doe',
        fullName: 'John Doe',
      },
      {
        firstName: 'Jane',
        lastName: 'Doe',
        fullName: 'Jane Doe',
      },
      {
        firstName: 'Will',
        lastName: 'Smith',
        fullName: 'Will Smith',
      },
    ]);
  });
});
