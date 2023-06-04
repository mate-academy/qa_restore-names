'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should replace undefined with real firstName', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];    

    restoreNames(users);

    expect(users).toStrictEqual([
      {
        firstName: 'Jack',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ])
  });

  it('should add the firstName if it is missing', () => {
    const users = [
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];    

    restoreNames(users);

    expect(users).toStrictEqual([
      {
        firstName: 'Mike',
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ])
  });
});
