'use strict';

const { restoreNames } = require('./restoreNames');

describe('restoreNames', () => {
  it('not change firstName if it already exists', () => {
    const users = [
      { firstName: 'John', lastName: 'Doe', fullName: 'John Doe' },
    ];

    expect(restoreNames(users)).toBeUndefined();
    expect(users[0].firstName).toBe('John');
  });

  it('restore firstName from fullName when it is undefined', () => {
    const users = [
      { firstName: undefined, lastName: 'Holy', fullName: 'Jack Holy' },
    ];

    expect(restoreNames(users)).toBeUndefined();
    expect(users[0].firstName).toBe('Jack');
  });

  it('restore firstName when the property is missing entirely', () => {
    const users = [
      { lastName: 'Adams', fullName: 'Mike Adams' },
    ];

    expect(restoreNames(users)).toBeUndefined();
    expect(users[0].firstName).toBe('Mike');
  });

  it('should handle multiple users correctly', () => {
    const users = [
      { firstName: undefined, lastName: 'Holy', fullName: 'Jack Holy' },
      { firstName: 'Jane', lastName: 'Doe', fullName: 'Jane Doe' },
      { firstName: undefined, lastName: 'Smith', fullName: 'Will Smith' },
    ];

    expect(restoreNames(users)).toBeUndefined();
    expect(users[0].firstName).toBe('Jack');
    expect(users[1].firstName).toBe('Jane');
    expect(users[2].firstName).toBe('Will');
  });

  it('should mutate array in place and preserve other fields', () => {
    const users = [
      { firstName: undefined, lastName: 'Holy', fullName: 'Jack Holy' },
      { lastName: 'Adams', fullName: 'Mike Adams' },
      { firstName: 'Alice', lastName: 'Smith', fullName: 'Alice Smith' },
    ];

    const ref = users;

    expect(restoreNames(users)).toBeUndefined();

    expect(users[0].firstName).toBe('Jack');
    expect(users[1].firstName).toBe('Mike');
    expect(users[2].firstName).toBe('Alice');

    expect(users[0].lastName).toBe('Holy');
    expect(users[0].fullName).toBe('Jack Holy');
    expect(users[1].lastName).toBe('Adams');
    expect(users[1].fullName).toBe('Mike Adams');
    expect(users[2].lastName).toBe('Smith');
    expect(users[2].fullName).toBe('Alice Smith');

    expect(users).toBe(ref);
  });

  it('should handle empty user list without errors', () => {
    const users = [];

    expect(restoreNames(users)).toBeUndefined();
    expect(users).toEqual([]);
  });
});
