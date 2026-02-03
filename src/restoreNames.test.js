'use strict';

const restoreNames = require('./restoreNames');

test('restores firstName when it is undefined', () => {
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

test('restores firstName when it is missing', () => {
  const users = [
    {
      lastName: 'Adams',
      fullName: 'Mike Adams',
    },
  ];

  restoreNames(users);

  expect(users[0].firstName).toBe('Mike');
});

test('does not change users that already have firstName', () => {
  const users = [
    {
      firstName: 'Anna',
      lastName: 'Smith',
      fullName: 'Anna Smith',
    },
  ];

  restoreNames(users);

  expect(users[0].firstName).toBe('Anna');
});

test('restores firstName for multiple users in the array', () => {
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

  expect(users).toEqual([
    {
      firstName: 'Jack',
      lastName: 'Holy',
      fullName: 'Jack Holy',
    },
    {
      firstName: 'Mike',
      lastName: 'Adams',
      fullName: 'Mike Adams',
    },
  ]);
});

test('returns nothing', () => {
  const users = [
    {
      lastName: 'Doe',
      fullName: 'John Doe',
    },
  ];

  const result = restoreNames(users);

  expect(result).toBeUndefined();
});
