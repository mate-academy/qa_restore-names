'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should restore firstName if it is undefined', () => {
    const users = [
      { firstName: undefined, lastName: 'Holy', fullName: 'Jack Holy' },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Jack');
  });

  it('should restore firstName if the field is missing', () => {
    const users = [{ lastName: 'Adams', fullName: 'Mike Adams' }];

    restoreNames(users);

    expect(users[0].firstName).toBe('Mike');
  });

  it('should not change firstName if it already exists', () => {
    const users = [
      { firstName: 'Johnny', lastName: 'Smith', fullName: 'John Smith' },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Johnny');
  });

  it('should not change lastName and fullName', () => {
    const users = [
      { firstName: undefined, lastName: 'Holy', fullName: 'Jack Holy' },
    ];

    restoreNames(users);

    expect(users[0].lastName).toBe('Holy');
    expect(users[0].fullName).toBe('Jack Holy');
  });

  it('should restore names only for users who need it', () => {
    const users = [
      { firstName: undefined, lastName: 'Holy', fullName: 'Jack Holy' },
      { firstName: 'Anna', lastName: 'Lee', fullName: 'Anna Lee' },
      { lastName: 'Adams', fullName: 'Mike Adams' },
    ];

    restoreNames(users);

    expect(users).toEqual([
      { firstName: 'Jack', lastName: 'Holy', fullName: 'Jack Holy' },
      { firstName: 'Anna', lastName: 'Lee', fullName: 'Anna Lee' },
      { firstName: 'Mike', lastName: 'Adams', fullName: 'Mike Adams' },
    ]);
  });

  it('should return undefined', () => {
    const users = [
      { firstName: undefined, lastName: 'Holy', fullName: 'Jack Holy' },
    ];

    expect(restoreNames(users)).toBeUndefined();
  });

  it('should modify the same array in place', () => {
    const users = [
      { firstName: undefined, lastName: 'Holy', fullName: 'Jack Holy' },
    ];
    const sameUsers = users;

    restoreNames(users);

    expect(sameUsers).toBe(users);
    expect(sameUsers[0].firstName).toBe('Jack');
  });

  it('should not throw for an empty array', () => {
    expect(() => restoreNames([])).not.toThrow();
  });
});
