'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it(`should be declared`, () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it(`should not return anything`, () => {
    const users = [
      { fullName: 'Jack Holy', firstName: undefined, lastName: 'Holy' },
      { fullName: 'Jane Smith', firstName: '', lastName: 'Smith' },
    ];

    expect(restoreNames(users)).toBeUndefined();
  });

  it('should set correct firstName if it is missing', () => {
    const users = [
      { fullName: 'John Doe', firstName: '', lastName: 'Doe' },
      { fullName: 'Jane Smith', firstName: '', lastName: 'Smith' },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('John');
    expect(users[1].firstName).toBe('Jane');
  });

  it('should set correct firstName if it is undefined', () => {
    const users = [
      { fullName: 'Jack Holy', firstName: undefined, lastName: 'Holy' },
      { fullName: 'Jane Smith', firstName: '', lastName: 'Smith' },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Jack');
    expect(users[1].firstName).toBe('Jane');
  });
});
