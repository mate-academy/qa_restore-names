'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should restore firstName when it is undefined', () => {
    const users = [
      { firstName: undefined, lastName: 'Holy', fullName: 'Jack Holy' },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe('Jack');
  });

  it('should restore firstName when it is missing', () => {
    const users = [{ lastName: 'Adams', fullName: 'Mike Adams' }];

    restoreNames(users);
    expect(users[0].firstName).toBe('Mike');
  });

  it('should not change existing firstName', () => {
    const users = [
      { firstName: 'John', lastName: 'Doe', fullName: 'John Doe' },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe('John');
  });

  it('should handle multiple users', () => {
    const users = [
      { firstName: undefined, lastName: 'Holy', fullName: 'Jack Holy' },
      { lastName: 'Adams', fullName: 'Mike Adams' },
      { firstName: 'Existing', lastName: 'Name', fullName: 'Existing Name' },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe('Jack');
    expect(users[1].firstName).toBe('Mike');
    expect(users[2].firstName).toBe('Existing');
  });

  it('should not return anything', () => {
    const users = [{ lastName: 'Test', fullName: 'Test User' }];

    expect(restoreNames(users)).toBeUndefined();
  });
});
