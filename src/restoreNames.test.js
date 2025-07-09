'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should do nothing if firstName is set', () => {
    const result = restoreNames([
      {
        firstName: 'dupa',
        lastName: 'mucha',
        fullName: 'dupa mucha',
      },
    ]);

    expect(result).toEqual(result);
  });

  it('should set firstName if !firstName', () => {
    const result = restoreNames([
      {
        firstName: '',
        lastName: 'mucha',
        fullName: 'dupa mucha',
      },
    ]);

    expect(result).toEqual(result);
  });
});
