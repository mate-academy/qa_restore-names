'use strict';

const { restoreNames } = require('./restoreNames');

describe('restoreNames', () => {
  it('should restore firstName and lastName from fullName', () => {
    const users = [
      {
        firstName: '', lastName: '', fullName: 'John',
      },
      {
        firstName: '', lastName: '', fullName: 'Jane Doe',
      },
      {
        firstName: '', lastName: '', fullName: 'Alice Marie Johnson',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('John');
    expect(users[0].lastName).toBe('');

    expect(users[1].firstName).toBe('Jane');
    expect(users[1].lastName).toBe('');

    expect(users[2].firstName).toBe('Alice');
    expect(users[2].lastName).toBe('');
  });

  it('should not overwrite an existing firstName', () => {
    const users = [
      {
        firstName: 'Existing', lastName: '', fullName: 'New Name',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Existing');
  });

  it('should handle empty fullName gracefully', () => {
    const users = [
      {
        firstName: '', lastName: '', fullName: '',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('');
    expect(users[0].lastName).toBe('');
  });
});
