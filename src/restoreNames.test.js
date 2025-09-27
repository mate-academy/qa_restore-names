'use strict';

const { restoreNames } = require('./restoreNames');

describe('restoreNames', () => {
  it('restores firstName when it is undefined', () => {
    const users = [
      { firstName: undefined, lastName: 'Holy', fullName: 'Jack Holy' },
    ];

    restoreNames(users);

    expect(users).toEqual([
      { firstName: 'Jack', lastName: 'Holy', fullName: 'Jack Holy' },
    ]);
  });

  it('restores firstName when the field is missing', () => {
    const users = [
      { lastName: 'Adams', fullName: 'Mike Adams' },
    ];

    restoreNames(users);

    expect(users).toEqual([
      { firstName: 'Mike', lastName: 'Adams', fullName: 'Mike Adams' },
    ]);
  });

  it('does not overwrite an existing valid firstName', () => {
    const users = [
      { firstName: 'Sarah', lastName: 'Connor', fullName: 'Sarah Connor' },
    ];

    restoreNames(users);

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

    restoreNames(users);

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

    restoreNames(users);

    expect(users).toEqual([
      { firstName: 'Madonna', lastName: undefined, fullName: 'Madonna' },
    ]);
  });

  it('does nothing if users array is empty', () => {
    const users = [];

    restoreNames(users);

    expect(users).toEqual([]);
  });
});

