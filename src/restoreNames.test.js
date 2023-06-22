'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should restore first names based on full names', () => {
    const users = [
      {
        firstName: '',
        lastName: 'Doe',
        fullName: 'John Doe',
      },
      {
        firstName: '',
        lastName: 'Smith',
        fullName: 'Alice Smith',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('John');
    expect(users[1].firstName).toBe('Alice');
  });

  it('should handle full names with uppercase and lowercase letters', () => {
    const users = [
      {
        firstName: '',
        lastName: 'Doe',
        fullName: 'jOHN dOE',
      },
      {
        firstName: '',
        lastName: 'Smith',
        fullName: 'aLICE sMITH',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('jOHN');
    expect(users[1].firstName).toBe('aLICE');
  });

  it('should handle full names with special characters', () => {
    const users = [
      {
        firstName: '',
        lastName: 'Doe',
        fullName: 'John@Doe',
      },
      {
        firstName: '',
        lastName: 'Smith',
        fullName: 'Alice-Smith',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('John@Doe');
    expect(users[1].firstName).toBe('Alice-Smith');
  });
});
