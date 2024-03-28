'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should be declared', () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it('should add first name, if it does not exist', () => {
    const users = [{
      lastName: 'Holy',
      fullName: 'Jack Holy',
    }];

    restoreNames(users);

    const results = [{
      firstName: 'Jack',
      lastName: 'Holy',
      fullName: 'Jack Holy',
    }];

    expect(users).toEqual(results);
  });

  it(`should fill first name, if it is '' or undefined`, () => {
    const usersA = [{
      firstName: undefined,
      lastName: 'Adams',
      fullName: 'Mike Adams',
    }];

    const usersB = [{
      firstName: '',
      lastName: 'Adams',
      fullName: 'Mike Adams',
    }];

    restoreNames(usersA);
    restoreNames(usersB);

    const results = [{
      firstName: 'Mike',
      lastName: 'Adams',
      fullName: 'Mike Adams',
    }];

    expect(usersA).toEqual(results);
    expect(usersB).toEqual(results);
  });

  it('should work with many users', () => {
    const users = [{
      lastName: 'Adams',
      fullName: 'Mike Adams',
    }, {
      firstName: '',
      lastName: 'Holy',
      fullName: 'Jack Holy',
    }, {
      firstName: 'Artem',
      lastName: 'Holy',
      fullName: 'Artem Holy',
    }, {
      firstName: undefined,
      lastName: 'Adams',
      fullName: 'Nata Adams',
    }];

    restoreNames(users);

    const results = [{
      firstName: 'Mike',
      lastName: 'Adams',
      fullName: 'Mike Adams',
    }, {
      firstName: 'Jack',
      lastName: 'Holy',
      fullName: 'Jack Holy',
    }, {
      firstName: 'Artem',
      lastName: 'Holy',
      fullName: 'Artem Holy',
    }, {
      firstName: 'Nata',
      lastName: 'Adams',
      fullName: 'Nata Adams',
    }];

    expect(users).toEqual(results);
  });
});
