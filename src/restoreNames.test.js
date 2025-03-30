'use strict';

// Import the function from the source file
const { restoreNames } = require('./restoreNames');

describe('restoreNames', () => {
  it('should restore firstName from fullName when firstName is missing', () => {
    const users = [
      {
        firstName: '',
        lastName: 'Smith',
        fullName: 'John Smith',
      },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe('John');
  });

  it('should not modify firstName if it already exists', () => {
    const users = [
      {
        firstName: 'Jane',
        lastName: 'Doe',
        fullName: 'Jane Doe',
      },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe('Jane');
  });

  it('should handle multiple users', () => {
    const users = [
      {
        firstName: '',
        lastName: 'Smith',
        fullName: 'John Smith',
      },
      {
        firstName: 'Jane',
        lastName: 'Doe',
        fullName: 'Jane Doe',
      },
      {
        firstName: null,
        lastName: 'Brown',
        fullName: 'Bob Brown',
      },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe('John');
    expect(users[1].firstName).toBe('Jane');
    expect(users[2].firstName).toBe('Bob');
  });

  it('should handle undefined firstName', () => {
    const users = [
      {
        lastName: 'Johnson',
        fullName: 'Mike Johnson',
      },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe('Mike');
  });

  it('should do nothing with empty array', () => {
    const users = [];

    restoreNames(users);
    expect(users.length).toBe(0);
  });
});
