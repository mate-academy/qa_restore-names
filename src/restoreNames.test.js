'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');
  const user1 = {
    firstName: undefined,
    lastName: 'Holy',
    fullName: 'Jack Holy',
  };
  const user2 = {
    lastName: 'Adams',
    fullName: 'Mike Adams',
  };
  const user3 = {
    firstName: 'John',
    lastName: 'Dou',
    fullName: 'John Dou',
  };

  it('should be a function', () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it('should not return anything', () => {
    expect(restoreNames([user1])).toBeUndefined();
  });

  it(`should add field 'firstName' if it was 'undefined'`, () => {
    const user = { ...user1 };

    restoreNames([user]);

    expect(user.firstName).toBeDefined();
  });

  it(`should add field 'firstName' if it wasn't exist`, () => {
    const user = { ...user2 };

    restoreNames([user]);

    expect(user.firstName).toBeDefined();
  });

  it(`should set value 'Jack' to field 'firstName'
    if it was 'undefined'`, () => {
    const user = { ...user1 };

    restoreNames([user]);

    expect(user.firstName).toBe('Jack');
  });

  it(`should set 'Mike' to field 'firstName' if it wasn't exist`, () => {
    const user = { ...user2 };

    restoreNames([user]);

    expect(user.firstName).toBe('Mike');
  });

  it(`should not change field 'firstName' if it defined`, () => {
    const user = { ...user3 };

    restoreNames([user]);

    expect(user.firstName).toEqual(user3.firstName);
  });
});
