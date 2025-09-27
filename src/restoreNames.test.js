'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it(`adds 'firstName if it is undefined`, () => {
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

    restoreNames(users);

    const allFirstNamesAdded = users.map(user => user.firstName);

    expect(allFirstNamesAdded).toEqual(['Jack', 'Mike']);
  });
});
