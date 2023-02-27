'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should be declared', () => {
    expect(restoreNames)
      .toBeInstanceOf(Function);
  });

  it('shouldn\'t do anything if first name isn\'t empty', () => {
    const users = [{
      firstName: 'Jack',
      lastName: 'Holy',
      fullName: 'Jack Holy',
    }];

    restoreNames(users);

    expect(users)
      .toEqual([{
        firstName: 'Jack',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      }]);
  });

  it('should restore firstName if it\'s an empty string', () => {
    const users = [{
      firstName: '',
      lastName: 'Holy',
      fullName: 'Jack Holy',
    }];

    restoreNames(users);

    expect(users)
      .toEqual([{
        firstName: 'Jack',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      }]);
  });

  it('should restore firstName if it\'s undefined', () => {
    const users = [{
      firstName: undefined,
      lastName: 'Holy',
      fullName: 'Jack Holy',
    }];

    restoreNames(users);

    expect(users)
      .toEqual([{
        firstName: 'Jack',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      }]);
  });

  it('should restore firstName if it\'s doesn\'t exist', () => {
    const users = [{
      lastName: 'Holy',
      fullName: 'Jack Holy',
    }];

    restoreNames(users);

    expect(users)
      .toEqual([{
        firstName: 'Jack',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      }]);
  });

  it('should work with 2+ objects', () => {
    const users = [{
      lastName: 'Holy',
      fullName: 'Jack Holy',
    }, {
      firstName: undefined,
      lastName: 'Adams',
      fullName: 'Mike Adams',
    }, {
      firstName: '',
      lastName: 'Adams',
      fullName: 'Jack Adams',
    }];

    restoreNames(users);

    expect(users)
      .toEqual([{
        firstName: 'Jack',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      }, {
        firstName: 'Mike',
        lastName: 'Adams',
        fullName: 'Mike Adams',
      }, {
        firstName: 'Jack',
        lastName: 'Adams',
        fullName: 'Jack Adams',
      }]);
  });
});
