'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should fill in firstName if it is explicitly set to undefined', () => {
    const users = [
      {
        firstName: undefined, lastName: 'Miller', fullName: 'Liam Miller',
      },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe('Liam');
  });

  it('sets firstName if the field is missing entirely', () => {
    const users = [
      {
        lastName: 'Green', fullName: 'Sophie Green',
      },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe('Sophie');
  });

  it('leaves firstName unchanged if it is already present', () => {
    const users = [
      {
        firstName: 'Nora', lastName: 'Williams', fullName: 'Nora Williams',
      },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe('Nora');
  });

  it('does not return any value from the function', () => {
    const users = [
      {
        lastName: 'Bennett', fullName: 'Henry Bennett',
      },
    ];
    const result = restoreNames(users);

    expect(result).toBeUndefined();
  });
});
