'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should restore firstName correctly when it is undefined', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Jack');
    expect(users[1].firstName).toBe('Mike');
  });

  it('should not change firstName when it is already defined', () => {
    const users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        fullName: 'John Doe',
      },
      {
        firstName: 'Jane',
        lastName: 'Smith',
        fullName: 'Jane Smith',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('John');
    expect(users[1].firstName).toBe('Jane');
  });

  it("shouldn't return anything", () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    const result = restoreNames(users);

    expect(result).toBeUndefined();
  });

  it('should handle empty fullName', () => {
    const users = [{
      fullName: '', firstName: undefined, lastName: 'Doe',
    }];

    restoreNames(users);
    expect(users[0].firstName).toBe('');
  });

  it('should handle fullName without space', () => {
    const users = [{
      fullName: 'John', firstName: undefined, lastName: 'Doe',
    }];

    restoreNames(users);
    expect(users[0].firstName).toBe('John');
  });

  it('should handle fullName with multiple spaces', () => {
    const users = [
      {
        fullName: 'John Middle Doe', firstName: undefined, lastName: 'Doe',
      },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe('John');
  });
});
