'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should return nothing ', () => {
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

    const result = restoreNames(users);

    expect(result)
      .toBeUndefined();
  });

  it('firstName === undefined ', () => {
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

    expect(users[0].firstName)
      .toBe('Jack');
  });

  it('without firstName ', () => {
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

    expect(users[1].firstName)
      .toBe('Mike');
  });

  it('with firstName ', () => {
    const users = [
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

    const testedName = users[0].firstName;

    restoreNames(users);

    expect(users[0].firstName)
      .toBe(testedName);
  });
});
