'use strict';

const { restoreNames } = require('./restoreNames');

describe('restoreNames', () => {
  it(`should modify objects where the 'firstName' field is undefined`, () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Doe',
        fullName: 'Alice Doe',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Alice',
        lastName: 'Doe',
        fullName: 'Alice Doe',
      },
    ]);
  });

  it(`restore the 'firstName' field if it is lost`, () => {
    const users = [
      {
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

  it(`shouldn't modify objects where the 'firstName'`
    + `field is not empty`, () => {
    const users = [
      {
        firstName: 'Eve',
        lastName: 'Black',
        fullName: 'Eve Black',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Eve',
        lastName: 'Black',
        fullName: 'Eve Black',
      },
    ]);
  });

  it(`should work with an array of objects where all 'firstName' fields`
    + `are undefined`, () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Brown',
        fullName: 'Michael Brown',
      },
      {
        firstName: undefined,
        lastName: 'Jones',
        fullName: 'Emily Jones',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Michael',
        lastName: 'Brown',
        fullName: 'Michael Brown',
      },
      {
        firstName: 'Emily',
        lastName: 'Jones',
        fullName: 'Emily Jones',
      },
    ]);
  });

  it(`should work with an array of objects where some 'firstName'`
    + `fields are undefined or completely lost`, () => {
    const testUsers = [
      {
        firstName: undefined,
        lastName: 'White',
        fullName: 'Laura White',
      },
      {
        firstName: undefined,
        lastName: 'Green',
        fullName: 'James Green',
      },
      {
        firstName: 'Robert',
        lastName: 'Adams',
        fullName: 'Robert Adams',
      },
      {
        lastName: 'Lee',
        fullName: 'Sophia Lee',
      },
    ];

    restoreNames(testUsers);

    expect(testUsers).toEqual([
      {
        firstName: 'Laura',
        lastName: 'White',
        fullName: 'Laura White',
      },
      {
        firstName: 'James',
        lastName: 'Green',
        fullName: 'James Green',
      },
      {
        firstName: 'Robert',
        lastName: 'Adams',
        fullName: 'Robert Adams',
      },
      {
        firstName: 'Sophia',
        lastName: 'Lee',
        fullName: 'Sophia Lee',
      },
    ]);
  });

  it(`should handle cases where 'firstName' is an empty string`, () => {
    const users = [
      {
        firstName: '',
        lastName: 'Doe',
        fullName: 'Alice Doe',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Alice',
        lastName: 'Doe',
        fullName: 'Alice Doe',
      },
    ]);
  });

  it(`should handle 'fullName' with three words`, () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Smith',
        fullName: 'John Michael Smith',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'John',
        lastName: 'Michael Smith',
        fullName: 'John Michael Smith',
      },
    ]);
  });

  it(`should handle 'fullName' with special characters`, () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Jr.',
        fullName: "O'Connor Jr.",
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: "O'Connor",
        lastName: 'Jr.',
        fullName: "O'Connor Jr.",
      },
    ]);
  });

  it(`should handle 'fullName' with only numbers`, () => {
    const users = [
      {
        firstName: undefined,
        lastName: '456',
        fullName: '123 456',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: '123',
        lastName: '456',
        fullName: '123 456',
      },
    ]);
  });

  it(`should handle 'fullName' in Cyrillic`, () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Васильович',
        fullName: 'Петро Васильович',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Петро',
        lastName: 'Васильович',
        fullName: 'Петро Васильович',
      },
    ]);
  });
});
