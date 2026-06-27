'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should be declared', () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it('restores firstName if it is undefined', () => {
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

  it('restores firstName if the property is missing entirely', () => {
    const users = [
      {
        lastName: 'Stark',
        fullName: 'Tony Stark',
      },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe('Tony');
  });

  it('does not modify an existing firstName', () => {
    const users = [
      {
        firstName: 'Mike',
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe('Mike');
  });

  it('modifies the array in place and returns nothing', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    const result = restoreNames(users);

    expect(result).toBeUndefined();
  });

  it('correctly processes multiple users in the array', () => {
    const users = [
      { firstName: undefined, lastName: 'Holy', fullName: 'Jack Holy' },
      { firstName: 'Mike', lastName: 'Adams', fullName: 'Mike Adams' },
      { lastName: 'Stark', fullName: 'Tony Stark' },
    ];

    restoreNames(users);

    expect(users).toEqual([
      { firstName: 'Jack', lastName: 'Holy', fullName: 'Jack Holy' },
      { firstName: 'Mike', lastName: 'Adams', fullName: 'Mike Adams' },
      { firstName: 'Tony', lastName: 'Stark', fullName: 'Tony Stark' },
    ]);
  });
});
