'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  const arr = [
    {
      firstName: undefined,
      lastName: 'Holy',
      fullName: 'Jack Holy',
    },
    {
      lastName: 'Adams',
      fullName: 'Mike Adams',
    },
  ];

  const resultingArr = [
    {
      firstName: 'Jack',
      lastName: 'Holy',
      fullName: 'Jack Holy',
    },
    {
      firstName: 'Mike',
      lastName: 'Adams',
      fullName: 'Mike Adams',
    },
  ];

  it('modifies the original array', () => {
    restoreNames(arr);

    expect(arr).toEqual(resultingArr);
  });

  it('returns nothing', () => {
    const result = restoreNames(arr);

    expect(result).toEqual(undefined);
  });

  it('throws an error if the argument is not an array', () => {
    expect(() => {
      restoreNames('');
    }).toThrow('The provided argument is not an array');
  });
});
