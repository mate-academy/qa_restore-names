'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should restore a missing firstName', () => {
    const users = [{ lastName: 'Adams', fullName: 'Mike Adams' }];

    restoreNames(users);

    expect(users).toEqual([
      { firstName: 'Mike', lastName: 'Adams', fullName: 'Mike Adams' },
    ]);
  });

  it('should restore an undefined firstName', () => {
    const users = [
      { firstName: undefined, lastName: 'Holy', fullName: 'Jack Holy' },
    ];

    restoreNames(users);

    expect(users).toEqual([
      { firstName: 'Jack', lastName: 'Holy', fullName: 'Jack Holy' },
    ]);
  });

  it('should preserve an existing firstName even if fullName differs', () => {
    const users = [
      { firstName: 'John', lastName: 'Holy', fullName: 'Jack Holy' },
    ];

    restoreNames(users);

    expect(users).toEqual([
      { firstName: 'John', lastName: 'Holy', fullName: 'Jack Holy' },
    ]);
  });

  it('should restore all missing names in a mixed array', () => {
    const users = [
      { firstName: 'Anna', fullName: 'Anne Smith' },
      { fullName: 'Mike Adams' },
      { firstName: undefined, fullName: 'Jack Holy' },
      { fullName: 'Mary Brown' },
    ];

    restoreNames(users);

    expect(users).toEqual([
      { firstName: 'Anna', fullName: 'Anne Smith' },
      { firstName: 'Mike', fullName: 'Mike Adams' },
      { firstName: 'Jack', fullName: 'Jack Holy' },
      { firstName: 'Mary', fullName: 'Mary Brown' },
    ]);
  });

  it('should use only the first word of fullName', () => {
    const users = [{ fullName: 'Mary Jane Watson' }];

    restoreNames(users);

    expect(users[0].firstName).toBe('Mary');
  });

  it('should restore a name from a one-word fullName', () => {
    const users = [{ fullName: 'Jack' }];

    restoreNames(users);

    expect(users[0].firstName).toBe('Jack');
  });

  it('should update the original object and preserve other properties', () => {
    const user = { fullName: 'Mike Adams', lastName: 'Adams', id: 7 };
    const users = [user];

    restoreNames(users);

    expect(users[0]).toBe(user);

    expect(user).toEqual({
      fullName: 'Mike Adams',
      lastName: 'Adams',
      id: 7,
      firstName: 'Mike',
    });
  });

  it('should return undefined for a non-empty array', () => {
    expect(restoreNames([{ fullName: 'Jack Holy' }])).toBeUndefined();
  });

  it('should accept an empty array and return undefined', () => {
    const users = [];

    expect(restoreNames(users)).toBeUndefined();
    expect(users).toEqual([]);
  });
});
