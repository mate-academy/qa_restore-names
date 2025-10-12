'use strict';

const { restoreNames } = require('./restoreNames');

describe('restoreNames', () => {
  it('restores firstName when undefined', () => {
    const users = [{ firstName: undefined, lastName: 'Doe', fullName: 'John Doe' }];
    restoreNames(users);
    expect(users[0].firstName).toBe('John');
  });

  it('does not overwrite existing firstName', () => {
    const users = [{ firstName: '', lastName: 'Doe', fullName: 'John Doe' }];
    restoreNames(users);
    expect(users[0].firstName).toBe('');
  });

  it('handles missing or non-string fullName safely', () => {
    const users = [
      { firstName: undefined, lastName: 'Doe' },
      { firstName: undefined, lastName: 'Doe', fullName: null },
    ];
    expect(() => restoreNames(users)).not.toThrow();
    expect(users[0].firstName).toBeUndefined();
    expect(users[1].firstName).toBeUndefined();
  });

  it('mutates the array in place', () => {
    const users = [{ firstName: undefined, lastName: 'Doe', fullName: 'John Doe' }];
    const ref = users;
    restoreNames(users);
    expect(users).toBe(ref);
  });
});
