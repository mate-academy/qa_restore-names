'use strict';

const { restoreNames } = require('./restoreNames');

describe('restoreNames', () => {
  // const { restoreNames } = require('./restoreNames');

  it('should restore firstName from fullName if firstName is undefined', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Jack',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ]);
  });

  it('should restore missing firstName from fullName', () => {
    const users = [
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Mike',
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ]);
  });

  it('should not change firstName if it is already defined', () => {
    const users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        fullName: 'John Doe',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'John',
        lastName: 'Doe',
        fullName: 'John Doe',
      },
    ]);
  });

  it('should handle cases where firstName is null', () => {
    const users = [
      {
        firstName: null,
        lastName: 'Smith',
        fullName: 'John Smith',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'John',
        lastName: 'Smith',
        fullName: 'John Smith',
      },
    ]);
  });

  it('should handle edge cases where fullName is empty or invalid', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Brown',
        fullName: '',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: '',
        lastName: 'Brown',
        fullName: '',
      },
    ]);
  });

  it('should handle cases where fullName contains multiple words', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Brown',
        fullName: 'Charlie Calvin Brown',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Charlie',
        lastName: 'Brown',
        fullName: 'Charlie Calvin Brown',
      },
    ]);
  });
});
