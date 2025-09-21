'use strict';

const { restoreNames } = require('./restoreNames');

describe('restoreNames', () => {
  it('restores firstName when it is undefined', () => {
    const users = [{ firstName: undefined, lastName: 'Holy', fullName: 'Jack Holy' }];

    restoreNames(users);

    expect(users[0].firstName).toBe('Jack');
  });

  it('restores firstName when property is missing', () => {
    const users = [{ lastName: 'Adams', fullName: 'Mike Adams' }];

    restoreNames(users);

    expect(users[0].firstName).toBe('Mike');
  });

  it('does not change firstName if it already exists', () => {
    const users = [{ firstName: 'Sarah', lastName: 'Connor', fullName: 'Sarah Connor' }];

    restoreNames(users);

    expect(users[0].firstName).toBe('Sarah');
  });

  it('does not overwrite empty string or null firstName', () => {
    const users = [
      { firstName: '', lastName: 'Brown', fullName: 'Tom Brown' },
      { firstName: null, lastName: 'Black', fullName: 'Tim Black' },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('');      // pozostaje pusty string
    expect(users[1].firstName).toBeNull();    // pozostaje null
  });

  it('works correctly for multiple users', () => {
    const users = [
      { firstName: undefined, lastName: 'Holy', fullName: 'Jack Holy' },
      { lastName: 'Adams', fullName: 'Mike Adams' },
      { firstName: 'Anna', lastName: 'Smith', fullName: 'Anna Smith' },
    ];

    restoreNames(users);

    expect(users).toEqual([
      { firstName: 'Jack', lastName: 'Holy', fullName: 'Jack Holy' },
      { firstName: 'Mike', lastName: 'Adams', fullName: 'Mike Adams' },
      { firstName: 'Anna', lastName: 'Smith', fullName: 'Anna Smith' },
    ]);
  });

  it('handles an empty array and returns undefined', () => {
    const users = [];
    const result = restoreNames(users);

    expect(users).toEqual([]);      // tablica pozostaje pusta
    expect(result).toBeUndefined(); // funkcja nic nie zwraca
  });
});
