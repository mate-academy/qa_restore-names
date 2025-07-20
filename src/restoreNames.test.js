'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should be declared', () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it('should add firstName if not exist', () => {
    const wrongUserArr = [{
      firstName: undefined,
      lastName: 'Smith',
      fullName: 'John Smith',
    }];

    restoreNames(wrongUserArr);

    expect(wrongUserArr[0].firstName).toBe('John');
  });

  it('should change nothing if firstName exist', () => {
    const rightUserArr = [{
      firstName: 'John',
      lastName: 'Smith',
      fullName: 'John Smith',
    }];

    restoreNames(rightUserArr);

    expect(rightUserArr[0].firstName).toBe('John');
    expect(rightUserArr[0].lastName).toBe('Smith');
    expect(rightUserArr[0].fullName).toBe('John Smith');
  });

  it('should work with two and more users', () => {
    const wrongUserArr = [{
      firstName: undefined,
      lastName: 'Smith',
      fullName: 'John Smith',
    },
    {
      firstName: undefined,
      lastName: 'Smith',
      fullName: 'Sara Smith',
    },
    {
      firstName: undefined,
      lastName: 'Smith',
      fullName: 'Adam Smith',
    }];

    restoreNames(wrongUserArr);

    expect(wrongUserArr[0].firstName).toBe('John');
    expect(wrongUserArr[1].firstName).toBe('Sara');
    expect(wrongUserArr[2].firstName).toBe('Adam');
  });
});
