'use strict';

const { restoreNames } = require('./restoreNames');

describe('restoreNames', () => {
  it('should handle an empty array without errors', () => {
    const users = [];

    restoreNames(users);

    expect(users).toHaveLength(0);
  });

  it('should not modify firstName if it is already set', () => {
    const users = [
      { firstName: 'John', lastName: 'Doe', fullName: 'John Doe' },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('John');
  });

  it('should restore firstName from fullName when firstName is missing', () => {
    const users = [{ lastName: 'Doe', fullName: 'John Doe' }];

    restoreNames(users);

    expect(users[0].firstName).toBe('John');
  });

  it('should restore firstName when firstName is an empty string', () => {
    const users = [{ firstName: '', lastName: 'Doe', fullName: 'John Doe' }];

    restoreNames(users);

    expect(users[0].firstName).toBe('John');
  });

  it('should take only the first word from fullName as firstName', () => {
    const users = [{ fullName: 'Mary Jane Watson' }];

    restoreNames(users);

    expect(users[0].firstName).toBe('Mary');
  });

  it('should handle fullName with a single word', () => {
    const users = [{ fullName: 'Madonna' }];

    restoreNames(users);

    expect(users[0].firstName).toBe('Madonna');
  });

  it('should restore firstName for multiple users without firstName', () => {
    const users = [
      { lastName: 'Doe', fullName: 'John Doe' },
      { lastName: 'Smith', fullName: 'Jane Smith' },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('John');
    expect(users[1].firstName).toBe('Jane');
  });

  it('should only restore firstName for users missing it', () => {
    const users = [
      { firstName: 'John', lastName: 'Doe', fullName: 'John Doe' },
      { lastName: 'Smith', fullName: 'Jane Smith' },
      { firstName: 'Bob', lastName: 'Brown', fullName: 'Bob Brown' },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('John');
    expect(users[1].firstName).toBe('Jane');
    expect(users[2].firstName).toBe('Bob');
  });
});
