'use strict';

const { restoreNames } = require('./restoreNames');

describe('restoreNames', () => {
  it('should set firstName if it is missing', () => {
    const users = [
      { fullName: 'Anna Smith' },
      { fullName: 'Bill Johnson' },
      {
        lastName: 'Brown', fullName: 'Charlie Brown',
      },
      {
        lastName: 'Holy', fullName: 'Jack Holy',
      },
    ];

    restoreNames(users);

    const expected = [
      {
        firstName: 'Anna', fullName: 'Anna Smith',
      },
      {
        firstName: 'Bill', fullName: 'Bill Johnson',
      },
      {
        firstName: 'Charlie', lastName: 'Brown', fullName: 'Charlie Brown',
      },
      {
        firstName: 'Jack', lastName: 'Holy', fullName: 'Jack Holy',
      },
    ];

    expect(users).toEqual(expected);
  });

  it('should restore firstName when it is explicitly undefined', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);

    const expected = [
      {
        firstName: 'Mike',
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    expect(users).toEqual(expected);
  });
});
