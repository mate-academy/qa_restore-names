'use strict';

const { restoreNames } = require('./restoreNames');

describe('restoreNames', () => {
  it('restores firstName from fullName when firstName is undefined', () => {
    const users = [
      { firstName: undefined, lastName: 'Smith', fullName: 'John Smith' },
      { firstName: undefined, lastName: 'Doe', fullName: 'Jane Doe' },
    ];
    restoreNames(users);
    expect(users[0].firstName).toBe('John');
    expect(users[1].firstName).toBe('Jane');
  });

  it('restores firstName from fullName when firstName is missing', () => {
    const users = [
      { lastName: 'Brown', fullName: 'Sam Brown' },
      { lastName: 'Lee', fullName: 'Chris Lee' },
    ];
    restoreNames(users);
    expect(users[0].firstName).toBe('Sam');
    expect(users[1].firstName).toBe('Chris');
  });

  it('does not overwrite valid firstName', () => {
    const users = [
      { firstName: 'Alice', lastName: 'King', fullName: 'Alice King' },
      { firstName: 'Bob', lastName: 'Miller', fullName: 'Bob Miller' },
    ];
    restoreNames(users);
    expect(users[0].firstName).toBe('Alice');
    expect(users[1].firstName).toBe('Bob');
  });

  it('restores only missing firstNames, leaves others unchanged', () => {
    const users = [
      { firstName: 'Anna', lastName: 'Fox', fullName: 'Anna Fox' },
      { lastName: 'White', fullName: 'Tom White' },
      { firstName: undefined, lastName: 'Black', fullName: 'Eva Black' },
    ];
    restoreNames(users);
    expect(users[0].firstName).toBe('Anna');
    expect(users[1].firstName).toBe('Tom');
    expect(users[2].firstName).toBe('Eva');
  });

  it('does nothing if array is empty', () => {
    const users = [];
    restoreNames(users);
    expect(users).toEqual([]);
  });

  it('works if fullName has multiple words, uses only first word', () => {
    const users = [
      { lastName: 'Perez', fullName: 'Carlos Miguel Perez' },
      { firstName: undefined, lastName: 'Nguyen', fullName: 'Linh Thanh Nguyen' },
    ];
    restoreNames(users);
    expect(users[0].firstName).toBe('Carlos');
    expect(users[1].firstName).toBe('Linh');
  });
});
