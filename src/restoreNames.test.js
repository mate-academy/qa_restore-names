'use strict';

const { restoreNames } = require('./restoreNames');

describe('restoreNames', () => {
  it('should update firstName based on fullName if it is undefined', () => {
    const user = [
      {
        fullName: 'Jan Kowalski', firstName: undefined, lastName: 'Kowalski',
      },
    ];

    restoreNames(user);
    expect(user[0].firstName).toBe('Jan');
  });

  it('should return undefined for lastName if it is not provided or defined', () => {
    const user = [
      {
        fullName: 'Arnold Frycz', firstName: 'Arnold', lastName: undefined,
      },
    ];

    restoreNames(user);
    expect(user[0].lastName).toBeUndefined();
  });

  it('should generate fullName if firstName and lastName are defined but fullName is not', () => {
    const user = [
      {
        fullName: undefined, firstName: 'Michael', lastName: 'Jackson',
      },
    ];

    restoreNames(user);
    expect(user[0].fullName).toBe('Michael Jackson');
  });

  it('should populate firstName from fullName if it is not present', () => {
    const user = [
      {
        fullName: 'Santa Claus', lastName: 'Claus',
      },
    ];

    restoreNames(user);
    expect(user[0].firstName).toBe('Santa');
  });

  it('should not modify firstName if it is already correct', () => {
    const user = [
      {
        fullName: 'John Lennon', firstName: 'John', lastName: 'Lennon',
      },
    ];

    restoreNames(user);
    expect(user[0].firstName).toBe('John');
  });

  it('should keep firstName empty if it cannot be determined', () => {
    const user = [
      {
        fullName: 'Mitch', firstName: '', lastName: 'Mitch',
      },
    ];

    restoreNames(user);
    expect(user[0].firstName).toBe('');
  });
});

describe('Future tests', () => {
  it('should remove extra spaces in fullName and other fields', () => {
    const user = [
      {
        fullName: 'D on Cor le one', firstName: 'Do n', lastName: 'Corl eon e',
      },
    ];

    restoreNames(user);

    const expectedUser = [
      {
        fullName: 'Don Corleone', firstName: 'Don', lastName: 'Corleone',
      },
    ];

    expect(user).toEqual(expectedUser);
  });

});