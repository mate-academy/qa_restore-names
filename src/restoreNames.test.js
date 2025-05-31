'use strict';

const { restoreNames } = require('./restoreNames');

describe('restoreNames', () => {
  it('should restore missing firstName from fullName', () => {
    const users = [
      {
        firstName: undefined, lastName: 'Holy', fullName: 'Jack Holy',
      },
      {
        lastName: 'Adams', fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Jack', lastName: 'Holy', fullName: 'Jack Holy',
      },
      {
        firstName: 'Mike', lastName: 'Adams', fullName: 'Mike Adams',
      },
    ]);
  });

  it('should not change users with existing firstName', () => {
    const users = [
      {
        firstName: 'Anna', lastName: 'Smith', fullName: 'Anna Smith',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Anna', lastName: 'Smith', fullName: 'Anna Smith',
      },
    ]);
  });
});
