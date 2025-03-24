'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should restore user first name if it is null', () => {
    const user = {
      firstName: null,
      fullName: 'John Doe',
    };

    restoreNames([user]);
    expect(user.firstName).toBe('John');
  });

  it('should restore user first name if it is undefined', () => {
    const user = {
      firstName: undefined,
      fullName: 'John Doe',
    };

    restoreNames([user]);
    expect(user.firstName).toBe('John');
  });

  it('should restore user first name if there no firstName property', () => {
    const user = {
      fullName: 'John Doe',
    };

    restoreNames([user]);
    expect(user.firstName).toBe('John');
  });

  it('should restore user first name for several users', () => {
    const users = [
      {
        fullName: 'John Doe',
      },
      {
        fullName: 'Jane Doe',
      },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe('John');
    expect(users[1].firstName).toBe('Jane');
  });
});
