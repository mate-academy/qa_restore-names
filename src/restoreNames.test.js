'use strict';

const assert = require('assert');
const { restoreNames } = require('./restoreNames');

describe('restoreNames', () => {
  it('restores firstName if undefined', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    restoreNames(users);

    assert.strictEqual(users[0].firstName, 'Jack');
  });

  it('restores firstName if field is missing', () => {
    const users = [
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);

    assert.strictEqual(users[0].firstName, 'Mike');
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

    assert.strictEqual(users[0].firstName, 'John');
  });

  it('should work with multiple users', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Black',
        fullName: 'Susan Black',
      },
      {
        lastName: 'Smith',
        fullName: 'Alex Smith',
      },
      {
        firstName: 'Emily',
        lastName: 'White',
        fullName: 'Emily White',
      },
    ];

    restoreNames(users);

    assert.deepStrictEqual(users, [
      {
        firstName: 'Susan',
        lastName: 'Black',
        fullName: 'Susan Black',
      },
      {
        firstName: 'Alex',
        lastName: 'Smith',
        fullName: 'Alex Smith',
      },
      {
        firstName: 'Emily',
        lastName: 'White',
        fullName: 'Emily White',
      },
    ]);
  });

  it('should do nothing if the array is empty', () => {
    const users = [];

    restoreNames(users);

    assert.deepStrictEqual(users, []);
  });

  it('should not throw if fullName is an empty string', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Ghost',
        fullName: '',
      },
    ];

    restoreNames(users);

    assert.strictEqual(users[0].firstName, '');
  });

  it('should handle fullName with only one word', () => {
    const users = [
      {
        firstName: undefined,
        lastName: '',
        fullName: 'Prince',
      },
    ];

    restoreNames(users);

    assert.strictEqual(users[0].firstName, 'Prince');
  });

  it('should take only the first word from fullName', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Doe',
        fullName: 'John Michael Doe',
      },
    ];

    restoreNames(users);

    assert.strictEqual(users[0].firstName, 'John');
  });
});
