
'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should set correct firstName for users without firstName', () => {
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

  it('should not modify firstName for users with existing firstName', () => {
    const users = [
      {
        firstName: 'John', lastName: 'Doe', fullName: 'John Doe',
      },
      {
        firstName: 'Jane', lastName: 'Smith', fullName: 'Jane Smith',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('John');
    expect(users[1].firstName).toBe('Jane');
  });
});
