'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');
  let users;

  beforeEach(() => {
    users = [
      {
        firstName: 'Jack',
        lastName: 'Gray',
        fullName: 'Jack Gray',
      },
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Alex Holy',
      },
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];
  });

  it('should be a declared function', () => {
    expect(restoreNames).toBeDefined();
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it("should don't change anything if no users", () => {
    users = [];

    restoreNames(users);

    expect(users).toHaveLength(0);
  });

  it("should don't modify user if firstName exists", () => {
    const JackCopy = { ...users[0] };

    restoreNames(users);
    expect(users[0]).toEqual(JackCopy);
  });

  it("should don't change object link", () => {
    const Jack = users[0];

    expect(users[0]).toBe(Jack);
  });

  it('should restore first name if it is undefined', () => {
    const Alex = {
      ...users[1],
      firstName: 'Alex',
    };

    restoreNames(users);
    expect(users[1]).toEqual(Alex);
  });

  it('should restore first name if it is not exist', () => {
    const Mike = {
      ...users[2],
      firstName: 'Mike',
    };

    restoreNames(users);
    expect(users[2]).toEqual(Mike);
  });
});
