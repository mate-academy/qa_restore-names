'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should be declared as a function', () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it('should restore firstName if it is undefined', () => {
    const users = [
      {
        firstName: undefined, lastName: 'Holy', fullName: 'Jack Holy',
      },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe('Jack');
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

  it('should not change firstName if it is already present', () => {
    const users = [
      {
        firstName: 'Alice', lastName: 'Smith', fullName: 'Alice Smith',
      },
    ];
    const original = { ...users[0] };

    restoreNames(users);
    expect(users[0].firstName).toBe(original.firstName);
  });

  it('should correctly restore multiple users', () => {
    const users = [
      {
        firstName: undefined, lastName: 'Holy', fullName: 'Jack Holy',
      },
      {
        lastName: 'Adams', fullName: 'Mike Adams',
      },
      {
        firstName: 'Ann', lastName: 'Lee', fullName: 'Ann Lee',
      },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe('Jack');
    expect(users[1].firstName).toBe('Mike');
    expect(users[2].firstName).toBe('Ann');
  });

  it('should not return anything (undefined)', () => {
    const users = [
      {
        lastName: 'Adams', fullName: 'Mike Adams',
      },
    ];
    const result = restoreNames(users);

    expect(result).toBeUndefined();
  });
});
