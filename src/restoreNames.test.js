'use strict';

const { restoreNames } = require('./restoreNames');

describe('restoreNames', () => {
  it('should return the full name if given both first and last names', () => {
    const firstName = 'John';
    const lastName = 'Doe';
    const result = restoreNames([{
      firstName, lastName, fullName: `${firstName} ${lastName}`,
    }]);

    expect(result).toEqual([{
      firstName, lastName, fullName: 'John Doe',
    }]);
  });

  // write tests here
});
