/* eslint-disable */
'use strict';

const { restoreNames } = require('./restoreNames');

describe('restoreNames', () => {
  it('should restore missing firstName from fullName', () => {
    const users = [
      { lastName: 'Adams', fullName: 'Mike Adams' },
      { firstName: undefined, lastName: 'Holy', fullName: 'Jack Holy' },
    ];

    const result = restoreNames(users);

    expect(result).toBeUndefined();
    expect(users).toEqual([
      { firstName: 'Mike', lastName: 'Adams', fullName: 'Mike Adams' },
      { firstName: 'Jack', lastName: 'Holy', fullName: 'Jack Holy' },
    ]);
  });

  it('should keep existing firstName values intact', () => {
    const users = [
      { firstName: 'Anna', lastName: 'Smith', fullName: 'Anna Smith' },
      { firstName: undefined, lastName: 'Jones', fullName: 'Tom Jones' },
    ];

    restoreNames(users);

    expect(users).toEqual([
      { firstName: 'Anna', lastName: 'Smith', fullName: 'Anna Smith' },
      { firstName: 'Tom', lastName: 'Jones', fullName: 'Tom Jones' },
    ]);
  });
});
