'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should be declared', () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it('should set firstName for users with firstName undefined', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    restoreNames(users);

    const restoreUsers = [
      {
        firstName: 'Jack',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    expect(users).toEqual(restoreUsers);
  });

  it('should set firstName for users with missing firstName', () => {
    const users = [
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);

    const restoreUsers = [
      {
        firstName: 'Mike',
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    expect(users).toEqual(restoreUsers);
  });

  it('should set firstName, when firstName is undefined or missing', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'White',
        fullName: 'Iden White',
      },
      {
        lastName: 'Black',
        fullName: 'Danny Black',
      },
    ];

    restoreNames(users);

    const restoreUsers = [
      {
        firstName: 'Iden',
        lastName: 'White',
        fullName: 'Iden White',
      },
      {
        firstName: 'Danny',
        lastName: 'Black',
        fullName: 'Danny Black',
      },
    ];

    expect(users).toEqual(restoreUsers);
  });

  it('should set firstName, '
  + 'when firstName is not defined in one of the multiple users', () => {
    const users = [
      {
        firstName: 'Nikol',
        lastName: 'Skaskiv',
        fullName: 'Nikol Skaskiv',
      },
      {
        firstName: undefined,
        lastName: 'Brown',
        fullName: 'Stephan Brown',
      },
      {
        firstName: 'Shaun',
        lastName: 'Murphy',
        fullName: 'Shaun Murphy',
      },
    ];

    restoreNames(users);

    const restoreUsers = [
      {
        firstName: 'Nikol',
        lastName: 'Skaskiv',
        fullName: 'Nikol Skaskiv',
      },
      {
        firstName: 'Stephan',
        lastName: 'Brown',
        fullName: 'Stephan Brown',
      },
      {
        firstName: 'Shaun',
        lastName: 'Murphy',
        fullName: 'Shaun Murphy',
      },
    ];

    expect(users).toEqual(restoreUsers);
  });

  it('should set firstName, '
  + 'when firstName is missing in one of the multiple users', () => {
    const users = [
      {
        firstName: 'Nikol',
        lastName: 'Skaskiv',
        fullName: 'Nikol Skaskiv',
      },
      {
        lastName: 'Brown',
        fullName: 'Stephan Brown',
      },
      {
        firstName: 'Shaun',
        lastName: 'Murphy',
        fullName: 'Shaun Murphy',
      },
    ];

    restoreNames(users);

    const restoreUsers = [
      {
        firstName: 'Nikol',
        lastName: 'Skaskiv',
        fullName: 'Nikol Skaskiv',
      },
      {
        firstName: 'Stephan',
        lastName: 'Brown',
        fullName: 'Stephan Brown',
      },
      {
        firstName: 'Shaun',
        lastName: 'Murphy',
        fullName: 'Shaun Murphy',
      },
    ];

    expect(users).toEqual(restoreUsers);
  });
});
