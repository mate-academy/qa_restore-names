'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should restore firstName from fullName when it is undefined', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Jack');

    expect(users[0]).toEqual({
      firstName: 'Jack',
      lastName: 'Holy',
      fullName: 'Jack Holy',
    });
  });

  it('should restore firstName for multiple users missing it', () => {
    const users = [
      {
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
      {
        firstName: undefined,
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Jack',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
      {
        firstName: 'Mike',
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ]);
  });

  it('should not change users that already have firstName', () => {
    const users = [
      {
        firstName: 'Anna',
        lastName: 'Smith',
        fullName: 'Anna Smith',
      },
      {
        firstName: 'John',
        lastName: 'Brown',
        fullName: 'John Brown',
      },
    ];

    const copyBefore = JSON.parse(JSON.stringify(users));

    restoreNames(users);

    expect(users).toEqual(copyBefore);
  });

  it('should handle an empty users array without errors', () => {
    const users = [];

    expect(() => restoreNames(users)).not.toThrow();
    expect(users).toEqual([]);
  });

  it(`should split only by the first space in fullName 
    (ignore middle names)`, () => {
    const users = [
      {
        lastName: 'Doe',
        fullName: 'John Michael Doe',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('John');
  });

  it('should handle users with single-word fullName correctly', () => {
    const users = [
      {
        firstName: undefined,
        lastName: undefined,
        fullName: 'Cher',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Cher');

    expect(users[0]).toEqual({
      firstName: 'Cher',
      lastName: undefined,
      fullName: 'Cher',
    });
  });
});
