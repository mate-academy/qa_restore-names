'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should be declared', () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it('should be not undefined with firstName', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Newton',
        fullName: 'Isaac Newton',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).not.toBe(undefined);
  });

  it('should be restored firstName', () => {
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

  it('should be restored firstName', () => {
    const users = [
      {
        fullName: 'Johnny Silverhand',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toEqual('Johnny');
  });

  it('should be restored firstName', () => {
    const users = [
      {
        lastName: 'Musk',
        fullName: 'Elon Mask',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toEqual('Elon');
    expect(users[0].lastName).toEqual('Musk');
  });
});
