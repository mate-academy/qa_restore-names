'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should be declared', () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it(`should restore when 'firstName' is 'undefined'`, () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Jack');
  });

  it(`should restore when 'firstName' is 'null'`, () => {
    const users = [
      {
        firstName: null,
        lastName: 'Evil',
        fullName: 'Bogdan Evil',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Bogdan');
  });

  it(`should restore when 'firstName' is an 'empty string'`, () => {
    const users = [
      {
        firstName: '',
        lastName: 'Ferrari',
        fullName: 'Iryna Ferrari',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Iryna');
  });

  it(`should restore when 'firstName' is missing`, () => {
    const users = [
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Mike');
  });
});
