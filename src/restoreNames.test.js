'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should ', () => {});

  // write tests here

  it('check if we haven`t user except return undefiend ', () => {
    const users = [
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

    expect(restoreNames(users)).toBeUndefined();
  });
});
