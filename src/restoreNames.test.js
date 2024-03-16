'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should restore firstName for users with missing firstName', () => {
    const users = [
      {
        lastName: 'Doe',
        fullName: 'John Doe',
      },
      {
        lastName: 'Smith',
        fullName: 'Alice Smith',
      },
      {
        lastName: 'Johnson',
        fullName: 'Bob Johnson',
      },
      {
        lastName: 'Brown',
        fullName: 'Emma Brown',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'John',
        lastName: 'Doe',
        fullName: 'John Doe',
      },
      {
        firstName: 'Alice',
        lastName: 'Smith',
        fullName: 'Alice Smith',
      },
      {
        firstName: 'Bob',
        lastName: 'Johnson',
        fullName: 'Bob Johnson',
      },
      {
        firstName: 'Emma',
        lastName: 'Brown',
        fullName: 'Emma Brown',
      },
    ]);
  });

  it('should restore firstName for users with undefined firstName', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Doe',
        fullName: 'John Doe',
      },
      {
        firstName: undefined,
        lastName: 'Smith',
        fullName: 'Alice Smith',
      },
      {
        firstName: undefined,
        lastName: 'Johnson',
        fullName: 'Bob Johnson',
      },
      {
        firstName: undefined,
        lastName: 'Brown',
        fullName: 'Emma Brown',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'John',
        lastName: 'Doe',
        fullName: 'John Doe',
      },
      {
        firstName: 'Alice',
        lastName: 'Smith',
        fullName: 'Alice Smith',
      },
      {
        firstName: 'Bob',
        lastName: 'Johnson',
        fullName: 'Bob Johnson',
      },
      {
        firstName: 'Emma',
        lastName: 'Brown',
        fullName: 'Emma Brown',
      },
    ]);
  });

  it('should restore firstName for users with empty firstName', () => {
    const users = [
      {
        firstName: '',
        lastName: 'Doe',
        fullName: 'John Doe',
      },
      {
        firstName: '',
        lastName: 'Smith',
        fullName: 'Alice Smith',
      },
      {
        firstName: '',
        lastName: 'Johnson',
        fullName: 'Bob Johnson',
      },
      {
        firstName: '',
        lastName: 'Brown',
        fullName: 'Emma Brown',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'John',
        lastName: 'Doe',
        fullName: 'John Doe',
      },
      {
        firstName: 'Alice',
        lastName: 'Smith',
        fullName: 'Alice Smith',
      },
      {
        firstName: 'Bob',
        lastName: 'Johnson',
        fullName: 'Bob Johnson',
      },
      {
        firstName: 'Emma',
        lastName: 'Brown',
        fullName: 'Emma Brown',
      },
    ]);
  });

  it('should restore firstName for users with null firstName', () => {
    const users = [
      {
        firstName: null,
        lastName: 'Doe',
        fullName: 'John Doe',
      },
      {
        firstName: null,
        lastName: 'Smith',
        fullName: 'Alice Smith',
      },
      {
        firstName: null,
        lastName: 'Johnson',
        fullName: 'Bob Johnson',
      },
      {
        firstName: null,
        lastName: 'Brown',
        fullName: 'Emma Brown',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'John',
        lastName: 'Doe',
        fullName: 'John Doe',
      },
      {
        firstName: 'Alice',
        lastName: 'Smith',
        fullName: 'Alice Smith',
      },
      {
        firstName: 'Bob',
        lastName: 'Johnson',
        fullName: 'Bob Johnson',
      },
      {
        firstName: 'Emma',
        lastName: 'Brown',
        fullName: 'Emma Brown',
      },
    ]);
  });

  it(`should not modify firstName for users `
    + ` with defined firstName`, () => {
    const users = [
      {
        firstName: 'Joe',
        lastName: 'Doe',
        fullName: 'John Doe',
      },
      {
        firstName: 'Alice',
        lastName: 'Smith',
        fullName: 'Alice Smith',
      },
      {
        firstName: 'Johnson',
        lastName: 'Johnson',
        fullName: 'Bob Johnson',
      },
      {
        firstName: 'Emma',
        lastName: 'Brown',
        fullName: 'Emma Brown',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Joe',
        lastName: 'Doe',
        fullName: 'John Doe',
      },
      {
        firstName: 'Alice',
        lastName: 'Smith',
        fullName: 'Alice Smith',
      },
      {
        firstName: 'Johnson',
        lastName: 'Johnson',
        fullName: 'Bob Johnson',
      },
      {
        firstName: 'Emma',
        lastName: 'Brown',
        fullName: 'Emma Brown',
      },
    ]);
  });

  it('should handle an empty array', () => {
    const users = [];

    restoreNames(users);

    expect(users).toEqual([]);
  });
});
