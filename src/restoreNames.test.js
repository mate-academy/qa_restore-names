'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should be declared as a function', () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it('should restore firstName if it is undefined', () => {
    const users = [
      {
        firstName: undefined, lastName: 'Smith', fullName: 'Anna Smith',
      },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe('Anna');
  });

  it('should restore firstName if it is missing', () => {
    const users = [
      {
        lastName: 'Brown', fullName: 'Lisa Brown',
      },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe('Lisa');
  });

  it('should restore firstName for multiple users correctly', () => {
    const users = [
      {
        firstName: undefined, lastName: 'Wayne', fullName: 'Bruce Wayne',
      },
      {
        lastName: 'Parker', fullName: 'Peter Parker',
      },
      {
        firstName: 'Clark', lastName: 'Kent', fullName: 'Clark Kent',
      },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe('Bruce');
    expect(users[1].firstName).toBe('Peter');
    expect(users[2].firstName).toBe('Clark');
  });

  it('should not return anything', () => {
    const users = [
      {
        lastName: 'Bond', fullName: 'James Bond',
      },
    ];
    const result = restoreNames(users);

    expect(result).toBeUndefined();
  });
});
