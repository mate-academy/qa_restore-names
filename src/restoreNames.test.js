'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should be declareted', () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it(`should be '[]' when array is empty`, () => {
    const users = [];

    restoreNames(users);

    expect(users).toEqual([]);
  });

  it(`should filled 'firstName' if it is underfined`, () => {
    const users = [
      { firstName: undefined, lastName: 'Holy', fullName: 'Jack Holy' }
    ];

    restoreNames(users);

    expect(users).toEqual([
      { firstName: 'Jack', lastName: 'Holy', fullName: 'Jack Holy' },
    ]);
  });

  it(`should filled 'firstName' if this key is upset`, () => {
    const users = [
      { lastName: 'Adams', fullName: 'Mike Adams' },
    ];

    restoreNames(users);

    expect(users).toEqual([
      { lastName: 'Adams', fullName: 'Mike Adams', firstName: 'Mike' }
    ]);
  });
  

  it(`should skip array if key 'firstname' is filled`, () => {
    const users = [
      { lastName: 'Adams', fullName: 'Mike Adams', firstName: 'Mike' }
    ];

    restoreNames(users);

    expect(users).toEqual([
      { lastName: 'Adams', fullName: 'Mike Adams', firstName: 'Mike' }
    ]);
  });
});