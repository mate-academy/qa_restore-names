'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should restore firstName from fullName when it is missing', () => {
    const users = [
      {
        firstName: undefined, lastName: 'Smith', fullName: 'Alice Smith',
      },
      {
        lastName: 'Brown', fullName: 'Bob Brown',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Alice', lastName: 'Smith', fullName: 'Alice Smith',
      },
      {
        firstName: 'Bob', lastName: 'Brown', fullName: 'Bob Brown',
      },
    ]);
  });

  // eslint-disable-next-line max-len
  it('should restore fullName from firstName and lastName when it is missing', () => {
    const users = [
      {
        firstName: 'Alice', lastName: 'Smith', fullName: 'Alice Smith',
      },
      {
        lastName: 'Brown', fullName: 'Bob Brown',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Alice', lastName: 'Smith', fullName: 'Alice Smith',
      },
      {
        firstName: 'Bob', lastName: 'Brown', fullName: 'Bob Brown',
      },
    ]);
  });
});
