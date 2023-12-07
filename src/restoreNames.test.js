'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should restore firstName if it does not exist or undefined', () => {
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

    expect(users[0].firstName).toEqual('Jack');
    expect(users[1].firstName).toEqual('Mike');
  });

  it('should not modify firstName for users with defined firstName', () => {
    const users = [
      {
        firstName: 'Leo',
        lastName: 'Messi',
        fullName: 'Leo Messi',
      },
      {
        firstName: 'Antonella',
        lastName: 'Roccuzzo',
        fullName: 'Antonella Roccuzzo',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toEqual('Leo');
    expect(users[1].firstName).toEqual('Antonella');
  });
});
