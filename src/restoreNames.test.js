'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should be declared', () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it('should add value to "firstName" field if it is undefined', () => {
    const user = {
      firstName: undefined,
      lastName: 'Holy',
      fullName: 'Jack Holy',
    };

    restoreNames([user]);

    expect(user.firstName).toBe('Jack');
  });

  it('should add value to "firstName" field if it is empty', () => {
    const user = {
      firstName: '',
      lastName: 'Holy',
      fullName: 'Jack Holy',
    };

    restoreNames([user]);

    expect(user.firstName).toBe('Jack');
  });

  it('should add "firstName" and its value if "firstName" is missing', () => {
    const user = {
      lastName: 'Holy',
      fullName: 'Jack Holy',
    };

    restoreNames([user]);

    expect(user).toEqual(
      {
        firstName: 'Jack',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      });
  });

  // eslint-disable-next-line max-len
  it('should not modify "user" if it has field "firstName" with correct name', () => {
    const user = {
      firstName: 'Jack',
      lastName: 'Holy',
      fullName: 'Jack Holy',
    };

    restoreNames([user]);

    expect(user).toBe(user);
  });
});
