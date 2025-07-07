'use strict';

const { restoreNames } = require('./restoreNames'); // раскоментуй і поправ шлях, якщо потрібно

describe('restoreNames', () => {
  it('should add firstName from fullName if firstName is empty string, null or undefined', () => {
    const users = [
      { firstName: '', lastName: 'Smith', fullName: 'John Smith' },
      { firstName: null, lastName: 'Doe', fullName: 'Jane Doe' },
      { firstName: undefined, lastName: 'Brown', fullName: 'Charlie Brown' },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('John');
    expect(users[1].firstName).toBe('Jane');
    expect(users[2].firstName).toBe('Charlie');
  });

  it('should not change firstName if it already exists', () => {
    const users = [
      { firstName: 'Alice', lastName: 'Smith', fullName: 'Alice Smith' },
      { firstName: 'Bob', lastName: 'Brown', fullName: 'Bob Brown' },
    ];

    const usersCopy = JSON.parse(JSON.stringify(users));

    restoreNames(users);

    expect(users).toEqual(usersCopy);
  });

  it('should work with empty array', () => {
    const users = [];

    restoreNames(users);

    expect(users).toEqual([]);
  });

  it('should take the first word of fullName as firstName when fullName has multiple words', () => {
    const users = [
      { firstName: '', lastName: 'Johnson', fullName: 'Michael Andrew Johnson' },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Michael');
  });

  it('should set firstName to fullName if fullName has no spaces or is empty', () => {
    const users = [
      { firstName: '', lastName: 'X', fullName: 'SingleName' },
      { firstName: '', lastName: 'Y', fullName: '' },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('SingleName');
    expect(users[1].firstName).toBe('');
  });
});