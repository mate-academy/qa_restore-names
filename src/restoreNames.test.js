'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should restore firstName when it is undefined', () => {
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

  it('should restore firstName when it is null', () => {
    const users = [
      {
        firstName: null,
        lastName: 'Smith',
        fullName: 'Jane Smith',
      },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe('Jane');
  });

  it('should restore firstName when it is an empty string', () => {
    const users = [
      {
        firstName: '',
        lastName: 'Doe',
        fullName: 'John Doe',
      },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe('John');
  });

  it('should restore firstName for multiple users', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
      {
        firstName: '',
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
      {
        firstName: null,
        lastName: 'Brown',
        fullName: 'Emily Brown',
      },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe('Jack');
    expect(users[1].firstName).toBe('Mike');
    expect(users[2].firstName).toBe('Emily');
  });

  it('should not modify firstName if it already exists', () => {
    const users = [
      {
        firstName: 'Existing',
        lastName: 'User',
        fullName: 'New User',
      },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe('Existing');
  });

  it('should handle fullNames with multiple spaces', () => {
    const users = [{
      firstName: undefined,
      lastName: 'Last',
      fullName: 'First Middle Last',
    }];

    restoreNames(users);
    expect(users[0].firstName).toBe('First');
  });

  it('should handle empty user array', () => {
    const users = [];

    restoreNames(users);
    expect(users).toEqual([]);
  });

  it('should handle fullName with only one name', () => {
    const users = [{
      firstName: undefined,
      lastName: 'Name',
      fullName: 'SingleName',
    }];

    restoreNames(users);
    expect(users[0].firstName).toBe('SingleName');
  });

  it('should handle fullName with leading and trailing spaces', () => {
    const users = [{
      firstName: undefined,
      lastName: 'Last',
      fullName: '  First Last  ',
    }];

    restoreNames(users);
    expect(users[0].firstName).toBe('First');
  });
});
