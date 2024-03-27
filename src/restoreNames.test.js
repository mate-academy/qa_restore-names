'use strict';

const { restoreNames } = require('./restoreNames');

describe('restoreNames', () => {
  it('should be a function', () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it('should return an empty array on empty input', () => {
    const users = [];

    restoreNames(users);

    expect(users).toEqual([]);
  });

  it('should restore first names if they do not exist', () => {
    const users = [
      {
        lastName: 'Astley',
        fullName: 'Rick Astley',
      },
      {
        lastName: 'Grey',
        fullName: 'Sasha Grey',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Rick',
        lastName: 'Astley',
        fullName: 'Rick Astley',
      },
      {
        firstName: 'Sasha',
        lastName: 'Grey',
        fullName: 'Sasha Grey',
      },
    ]);
  });

  it('should restore first names when they are undefined', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Astley',
        fullName: 'Rick Astley',
      },
      {
        firstName: undefined,
        lastName: 'Grey',
        fullName: 'Sasha Grey',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Rick',
        lastName: 'Astley',
        fullName: 'Rick Astley',
      },
      {
        firstName: 'Sasha',
        lastName: 'Grey',
        fullName: 'Sasha Grey',
      },
    ]);
  });

  it('should restor first names when they are empty strings', () => {
    const users = [
      {
        firstName: '',
        lastName: 'Astley',
        fullName: 'Rick Astley',
      },
      {
        firstName: '',
        lastName: 'Grey',
        fullName: 'Sasha Grey',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Rick',
        lastName: 'Astley',
        fullName: 'Rick Astley',
      },
      {
        firstName: 'Sasha',
        lastName: 'Grey',
        fullName: 'Sasha Grey',
      },
    ]);
  });

  it('should not modify existing first names', () => {
    const users = [
      {
        firstName: 'Rick',
        lastName: 'Astley',
        fullName: 'Rick Astley',
      },
      {
        firstName: 'Sasha',
        lastName: 'Grey',
        fullName: 'Sasha Grey',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Rick',
        lastName: 'Astley',
        fullName: 'Rick Astley',
      },
      {
        firstName: 'Sasha',
        lastName: 'Grey',
        fullName: 'Sasha Grey',
      },
    ]);
  });
});
