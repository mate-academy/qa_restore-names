'use strict';

const { restoreNames } = require('./restoreNames');

describe('restoreNames', () => {
  it('should restore firstName if it is undefined', () => {
    const users = [
      {
        firstName: undefined, lastName: 'Holy', fullName: 'Jack Holy',
      },
      {
        firstName: 'Anna', lastName: 'Smith', fullName: 'Anna Smith',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Jack');
    expect(users[1].firstName).toBe('Anna');
  });

  it('should restore firstName if it is missing', () => {
    const users = [
      {
        lastName: 'Adams', fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Mike');
  });

  it('should do nothing if firstName is already present', () => {
    const users = [
      {
        firstName: 'Mary', lastName: 'Johnson', fullName: 'Mary Johnson',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Mary');
  });

  it('should handle fullName with only one word', () => {
    const users = [
      {
        firstName: undefined, lastName: 'Unknown', fullName: 'Cher',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Cher');
  });

  it('should not change firstName if it is an empty string', () => {
    const users = [
      {
        firstName: '', lastName: 'Empty', fullName: 'Empty User',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Empty');
  });
});
