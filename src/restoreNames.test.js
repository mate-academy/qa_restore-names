'use strict';

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

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  beforeEach(() => {
    restoreNames(users);
  });

  it('should be declared', () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it(`should set the correct firstName for user `
    + `whose firstName is equal to undefined`, () => {
    expect(users[0].firstName).toBe('Jack');
  });

  it('should set the correct firstName for user who do not have it', () => {
    expect(users[1].firstName).toBe('Mike');
  });
});
