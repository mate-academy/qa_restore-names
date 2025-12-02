'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should fill users first names', () => {
    const users = [{
      firstName: undefined,
      lastName: 'Holy',
      fullName: 'Jack Holy',
    },
    {
      lastName: 'Adams',
      fullName: 'Mike Adams',
    }];

    restoreNames(users);

    expect(users).toEqual(
      [
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
      ]
    );
  });
});
