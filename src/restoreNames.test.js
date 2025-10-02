'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it(`should declared`, () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it('should restore firstName from fullName', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Doe',
        fullName: 'John Doe',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toEqual('John');
  });

  it('should not override existing firstName', () => {
    const users = [
      {
        firstName: 'Jane',
        lastName: 'Doe',
        fullName: 'John Doe',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toEqual('Jane');
  });

  it('should handle multiple users', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Doe',
        fullName: 'John Doe',
      },
      {
        firstName: undefined,
        lastName: 'Smith',
        fullName: 'Jane Smith',
      },
    ];

    restoreNames(users);

    expect([users[0].firstName, users[1].firstName]).toEqual(['John', 'Jane']);
  });

  it('should handle fullName with one word', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Doe',
        fullName: 'John',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toEqual('John');
  });

  it('should leave array unchanged if all have firstName', () => {
    const users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        fullName: 'John Doe',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toEqual('John');
  });

  it('should restore firstName when property is missing', () => {
    const users = [
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toEqual('Mike');
  });

  it('should return undefined and mutate in place', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Doe',
        fullName: 'John Doe',
      },
    ];
    const result = restoreNames(users);

    expect(result).toBeUndefined();
    expect(users[0].firstName).toEqual('John');
  });

  it('mutates the same array instance', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Doe',
        fullName: 'John Doe',
      },
    ];
    const originalRef = users;

    restoreNames(users);
    expect(users).toBe(originalRef);
  });
});
