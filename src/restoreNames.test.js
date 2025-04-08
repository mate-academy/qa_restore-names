'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it(`should be declared`, () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it('відновлює firstName, якщо він undefined', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Smith',
        fullName: 'John Smith',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('John');
  });

  it('відновлює firstName, якщо він відсутній зовсім', () => {
    const users = [
      {
        lastName: 'Brown',
        fullName: 'Emily Brown',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Emily');
  });

  it('не змінює користувачів, у яких вже є firstName', () => {
    const users = [
      {
        firstName: 'Liam',
        lastName: 'Jones',
        fullName: 'Liam Jones',
      },
    ];

    const original = { ...users[0] };

    restoreNames(users);

    expect(users[0]).toEqual(original);
  });

  it('коректно обробляє кілька користувачів з різними ситуаціями', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Black',
        fullName: 'Tom Black',
      },
      {
        lastName: 'Taylor',
        fullName: 'Sophia Taylor',
      },
      {
        firstName: 'Noah',
        lastName: 'White',
        fullName: 'Noah White',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Tom',
        lastName: 'Black',
        fullName: 'Tom Black',
      },
      {
        firstName: 'Sophia',
        lastName: 'Taylor',
        fullName: 'Sophia Taylor',
      },
      {
        firstName: 'Noah',
        lastName: 'White',
        fullName: 'Noah White',
      },
    ]);
  });

  it('не викликає помилки при порожньому масиві', () => {
    const users = [];

    expect(() => restoreNames(users)).not.toThrow();
    expect(users).toEqual([]);
  });
});
