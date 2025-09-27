'use strict';

const { restoreNames } = require('./restoreNames');

describe('restoreNames', () => {
  it('restores firstName when it is undefined', () => {
    const users = [
      { firstName: undefined, lastName: 'Holy', fullName: 'Jack Holy' },
    ];

    const result = restoreNames(users);

    expect(result).toBeUndefined();
    expect(users).toEqual([
      { firstName: 'Jack', lastName: 'Holy', fullName: 'Jack Holy' },
    ]);
  });

  it('restores firstName when the field is missing', () => {
    const users = [
      { lastName: 'Adams', fullName: 'Mike Adams' },
    ];

    const result = restoreNames(users);

    expect(result).toBeUndefined();
    expect(users).toEqual([
      { firstName: 'Mike', lastName: 'Adams', fullName: 'Mike Adams' },
    ]);
  });

  it('does not overwrite an existing valid firstName', () => {
    const users = [
      { firstName: 'Sarah', lastName: 'Connor', fullName: 'Sarah Connor' },
    ];

    const result = restoreNames(users);

    expect(result).toBeUndefined();
    expect(users).toEqual([
      { firstName: 'Sarah', lastName: 'Connor', fullName: 'Sarah Connor' },
    ]);
  });

  it('handles multiple users with different cases', () => {
    const users = [
      { firstName: undefined, lastName: 'Holy', fullName: 'Jack Holy' },
      { lastName: 'Adams', fullName: 'Mike Adams' },
      { firstName: 'Sarah', lastName: 'Connor', fullName: 'Sarah Connor' },
    ];

    const result = restoreNames(users);

    expect(result).toBeUndefined();
    expect(users).toEqual([
      { firstName: 'Jack', lastName: 'Holy', fullName: 'Jack Holy' },
      { firstName: 'Mike', lastName: 'Adams', fullName: 'Mike Adams' },
      { firstName: 'Sarah', lastName: 'Connor', fullName: 'Sarah Connor' },
    ]);
  });

  it('handles single-word fullName (like "Madonna")', () => {
    const users = [
      { lastName: undefined, fullName: 'Madonna' },
    ];

    const result = restoreNames(users);

    expect(result).toBeUndefined();
    expect(users).toEqual([
      { firstName: 'Madonna', lastName: undefined, fullName: 'Madonna' },
    ]);
  });

  it('does nothing if users array is empty', () => {
    const users = [];

    const result = restoreNames(users);

    expect(result).toBeUndefined();
    expect(users).toEqual([]);
  });

  it('handles multi-word fullName with middle names', () => {
    const users = [
      { lastName: 'Doe', fullName: 'John Michael Doe' },
    ];

    const result = restoreNames(users);

    expect(result).toBeUndefined();
    expect(users).toEqual([
      { firstName: 'John', lastName: 'Doe', fullName: 'John Michael Doe' },
    ]);
  });

  it('mutates objects in place without replacing them', () => {
    const user = { firstName: undefined, lastName: 'Holy', fullName: 'Jack Holy' };
    const users = [user];

    const result = restoreNames(users);

    expect(result).toBeUndefined();
    expect(users[0]).toBe(user); // identity check
    expect(users[0].firstName).toBe('Jack');
  });
});
