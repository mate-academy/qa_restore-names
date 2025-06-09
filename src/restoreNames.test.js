'use strict';

describe('restoreNames', () => {
  const restoreNames = require('./restoreNames');

  it('Object in function', () => {
    expect(restoreNames)
      .toBeInstanceOf(Object);
  });

  it('should not change object', () => {
    const users = [{ firstName: 'Sarah' }];

    expect(users[0].firstName).toBe('Sarah');
  });

  it('should not change first name', () => {
    const users = [{
      firstName: 'Mike', fullName: 'Michael Johnson',
    }];

    expect(users[0].firstName).toBe('Mike');
  });

  it('should work if first name was missing', () => {
    const users = [{ }];

    expect(() => restoreNames(users)).toThrow();
  });
});
