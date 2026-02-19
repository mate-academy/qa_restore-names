'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');
  let users;

  beforeEach(() => {
    users = [
      {
        firstName: undefined, lastName: 'Holy', fullName: 'Jack Holy',
      },

      {
        lastName: 'Adams', fullName: 'Mike Adams',
      },
      {
        firstName: 'Existing', lastName: 'Smith', fullName: 'Existing Smith',
      },
      {
        firstName: undefined, lastName: 'Solo', fullName: 'Han',
      },
    ];
  });

  it('restores firstName when undefined or missing', () => {
    const ret = restoreNames(users);

    expect(ret).toBeUndefined();
    expect(users[0].firstName).toBe('Jack');
    expect(users[1].firstName).toBe('Mike');
  });

  it('does not change existing firstName', () => {
    restoreNames(users);
    expect(users[2].firstName).toBe('Existing');
  });

  it('handles single-word fullName', () => {
    restoreNames(users);
    expect(users[3].firstName).toBe('Han');
  });
});
