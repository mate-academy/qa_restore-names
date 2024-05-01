'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should be declared', () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it(`should define correct first name when 'firstName' is undefined`, () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Adams',
        fullName: 'Mike Adams'
      }
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Mike');
  });
  
  it(`should define correct first name when 'firstName' is ommitted`, () => {
    const users = [
      {
        lastName: 'Adams',
        fullName: 'Mike Adams'
      }
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Mike');
  });
  
  it(`should not change first name if 'firstName' is present`, () => {
    const users = [
      {
        firstName: 'Mike',
        lastName: 'Adams',
        fullName: 'Jack Adams'
      }
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Mike');
  });
  
  it(`should work with empty array`, () => {
    const users = [];

    restoreNames(users);

    expect(users.length).toBe(0);
  });
});
