'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should nothing return', () => {
    expect(restoreNames([])).toBeUndefined();
  });

  it('should change firstName instead undefined value', () => {
    const user = {
      firstName: undefined,
      lastName: 'Holy',
      fullName: 'Jack Holy',
    }

    restoreNames([user]);

    expect(user.firstName).toBe('Jack')
  });

  it('should add not existed firstName property', () => {
    const user = {
      lastName: 'Adams',
      fullName: 'Mike Adams',
    }

    restoreNames([user]);

    expect(user).toHaveProperty('firstName', 'Mike');
  });

  it('should add firstName instead undefined and not exist value', () => {
    const users = [{
      firstName: undefined,
      lastName: 'Holy',
      fullName: 'Jack Holy',
    },
    {
      lastName: 'Adams',
      fullName: 'Mike Adams',
      }]
    
    restoreNames(users);

    expect(users[0].firstName).toBe('Jack');
    expect(users[1]).toHaveProperty('firstName', 'Mike')
  });
});
