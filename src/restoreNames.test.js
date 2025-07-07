'use strict';

const { restoreNames } = require('./restoreNames');

describe('restoreNames', () => {
  it('should be declared as a function', () => {
    expect(typeof restoreNames).toBe('function');
  });

  it('should set firstName when it is undefined', () => {
    const users = [
      {
        firstName: undefined, lastName: 'Holy', fullName: 'Jack Holy',
      },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe('Jack');
  });

  it('should set firstName when it is missing completely', () => {
    const users = [
      {
        lastName: 'Adams', fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe('Mike');
  });

  it('should not change firstName if it is already set', () => {
    const users = [
      {
        firstName: 'Emily', lastName: 'Clark', fullName: 'Emily Clark',
      },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe('Emily');
  });

  it('should handle multiple users with mixed cases', () => {
    const users = [
      {
        firstName: undefined, lastName: 'Holy', fullName: 'Jack Holy',
      },
      {
        lastName: 'Adams', fullName: 'Mike Adams',
      },
      {
        firstName: 'Anna', lastName: 'Smith', fullName: 'Anna Smith',
      },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe('Jack');
    expect(users[1].firstName).toBe('Mike');
    expect(users[2].firstName).toBe('Anna');
  });

  it('should not fail when users array is empty', () => {
    const users = [];

    restoreNames(users);
    expect(users).toEqual([]);
  });

  it('should handle users with fullName having only one word', () => {
    const users = [
      {
        lastName: 'Solo', fullName: 'Han',
      },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe('Han');
  });
});
