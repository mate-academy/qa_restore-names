'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should be a function ', () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it(`should restore name if it is undefined`, () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Jack');
  });

  it(`should restore firstname when firstname field is missing`, () => {
    const users = [
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Mike');
  });

  it(`function should not return anything`, () => {
    const users = [
      {
        fullName: 'Sarrah Grinch',
      },
    ];

    const result = restoreNames(users);

    expect(result).toBeUndefined();
  });

  it(`should not modigy existing names`, () => {
    const users = [
      {
        firstName: 'Tom',
        lastName: 'Jerry',
        fullName: 'Tom Jerry',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Tom');
    expect(users[0].lastName).toBe('Jerry');
  });

  it(`should handle multiple users`, () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Brown',
        fullName: 'John Brown',
      },
      {
        firstName: undefined,
        lastName: 'White',
        fullName: 'Chris White',
      },
      {
        firstName: 'Emily',
        lastName: 'Davis',
        fullName: 'Emily Davis',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'John',
        lastName: 'Brown',
        fullName: 'John Brown',
      },
      {
        firstName: 'Chris',
        lastName: 'White',
        fullName: 'Chris White',
      },
      {
        firstName: 'Emily',
        lastName: 'Davis',
        fullName: 'Emily Davis',
      },
    ]);
  });
});
