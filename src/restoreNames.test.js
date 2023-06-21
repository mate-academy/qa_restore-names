'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should set firstName if it is omitted', () => {
    const users = [
      {
        lastName: 'Doe', fullName: 'John Doe',
      },
      {
        firstName: 'Jane', lastName: 'Smith', fullName: 'Jane Smith',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('John');
  });

  it('should set firstName if it is empty and first name exists', () => {
    const users = [
      {
        firstName: '', lastName: 'Doe', fullName: 'John Doe',
      },
      {
        firstName: undefined, lastName: 'Smith', fullName: 'Jane Smith',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('John');
    expect(users[1].firstName).toBe('Jane');
  });

  it('should work with 2 elements and should set firstName if it is omitted',
    () => {
      const users = [
        {
          lastName: 'Doe', fullName: 'John Doe',
        },
        {
          lastName: 'Smith', fullName: 'Jane Smith',
        },
      ];

      restoreNames(users);

      expect(users[0].firstName).toBe('John');
      expect(users[1].firstName).toBe('Jane');
    });
});
