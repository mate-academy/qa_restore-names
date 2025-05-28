'use strict';

const assert = require('assert');
const restoreNames = require('./restoreNames');

describe('restoreNames', () => {
  it('відновлює firstName з fullName, якщо firstName undefined', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);

    assert.strictEqual(users[0].firstName, 'Jack');
    assert.strictEqual(users[1].firstName, 'Mike');
  });

  it('не змінює вже існуючий firstName', () => {
    const users = [
      {
        firstName: 'Lisa',
        lastName: 'Stone',
        fullName: 'Lisa Stone',
      },
    ];

    restoreNames(users);

    assert.strictEqual(users[0].firstName, 'Lisa');
  });

  it('працює з кількома undefined firstName', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Fox',
        fullName: 'Nick Fox',
      },
      {
        firstName: undefined,
        lastName: 'Snow',
        fullName: 'Jon Snow',
      },
    ];

    restoreNames(users);

    assert.strictEqual(users[0].firstName, 'Nick');
    assert.strictEqual(users[1].firstName, 'Jon');
  });
});
