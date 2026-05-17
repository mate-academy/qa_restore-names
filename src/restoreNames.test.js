'use strict';

const { restoreNames } = require('./restoreNames');

describe('restoreNames', () => {
  it('restores firstName when undefined', () => {
    const users = [{ firstName: undefined, lastName: 'Holy', fullName: 'Jack Holy' }];

    restoreNames(users);

    expect(users[0].firstName).toBe('Jack');
  });

  it('restores firstName when missing', () => {
    const users = [{ lastName: 'Adams', fullName: 'Mike Adams' }];

    restoreNames(users);

    expect(users[0].firstName).toBe('Mike');
  });

  it('does not change existing firstName', () => {
    const users = [{ firstName: 'Tom', lastName: 'Smith', fullName: 'Tom Smith' }];

    restoreNames(users);

    expect(users[0].firstName).toBe('Tom');
  });

  it('handles mixed array', () => {
    const users = [
      { firstName: undefined, lastName: 'Holy', fullName: 'Jack Holy' },
      { lastName: 'Adams', fullName: 'Mike Adams' },
      { firstName: 'Ann', lastName: 'Lee', fullName: 'Ann Lee' },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Jack');
    expect(users[1].firstName).toBe('Mike');
    expect(users[2].firstName).toBe('Ann');
  });

  it('returns nothing', () => {
    const result = restoreNames([]);

    expect(result).toBeUndefined();
  });

  it('mutates original array objects', () => {
    const user = { firstName: undefined, lastName: 'X', fullName: 'Z X' };
    const users = [user];

    restoreNames(users);

    expect(user.firstName).toBe('Z');
  });
});
