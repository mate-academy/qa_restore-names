'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should be declared', () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it('restores firstName when it is undefined', () => {
    const users = [ {
      firstName: undefined, lastName: 'Holy', fullName: 'Jack Holy',
    } ];

    restoreNames(users); expect(users[0].firstName).toBe('Jack');
  });

  it('restores firstName when the field is missing', () => {
    const users = [ {
      lastName: 'Adams', fullName: 'Mike Adams',
    } ];

    restoreNames(users); expect(users[0].firstName).toBe('Mike');
  });

  it('does not overwrite existing firstName', () => {
    const users = [ {
      firstName: 'Sarah', lastName: 'Connor', fullName: 'Sarah Connor',
    } ];

    restoreNames(users); expect(users[0].firstName).toBe('Sarah');
  });

  it('restores firstName for multiple users', () => {
    const users = [ {
      firstName: undefined, lastName: 'Holy', fullName: 'Jack Holy',
    }, {
      lastName: 'Adams', fullName: 'Mike Adams',
    } ];

    restoreNames(users);

    expect(users).toEqual([ {
      firstName: 'Jack', lastName: 'Holy', fullName: 'Jack Holy',
    }, {
      firstName: 'Mike', lastName: 'Adams', fullName: 'Mike Adams',
    } ]);
  });

  it('returns undefined (function mutates array in place)', () => {
    const users = [{ fullName: 'John Doe' }];
    const result = restoreNames(users);

    expect(result).toBeUndefined();
  });
});
