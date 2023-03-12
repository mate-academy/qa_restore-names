'use strict';

const { restoreNames } = require('./restoreNames');

describe('restoreNames', () => {
  // const { restoreNames } = require('./restoreNames');

  it('should be declared', () => {
    expect(restoreNames)
      .toBeInstanceOf(Function);
  });

  it(`should modify objects when field 'firstName' is undefined`, () => {
    const testUsers = [
      {
        firstName: undefined, lastName: 'Holy', fullName: 'Jack Holy',
      },
    ];

    restoreNames(testUsers);

    expect(testUsers[0])
      .toEqual({
        firstName: 'Jack', lastName: 'Holy', fullName: 'Jack Holy',
      });
  });

  it(`shouldn't modify objects when field 'firstName' isn't empty`, () => {
    const testUsers = [
      {
        firstName: 'Jack', lastName: 'Holy', fullName: 'Jack Holy',
      },
    ];

    restoreNames(testUsers);

    expect(testUsers[0])
      .toEqual({
        firstName: 'Jack', lastName: 'Holy', fullName: 'Jack Holy',
      });
  });

  it(`should work with an array of objects 
  when all 'firstName' fields are undefined`, () => {
    const testUsers = [
      {
        firstName: undefined, lastName: 'Holy', fullName: 'Jack Holy',
      },
      {
        firstName: undefined, lastName: 'Adams', fullName: 'Mike Adams',
      },
    ];

    restoreNames(testUsers);

    expect(testUsers)
      .toEqual([
        {
          firstName: 'Jack', lastName: 'Holy', fullName: 'Jack Holy',
        },
        {
          firstName: 'Mike', lastName: 'Adams', fullName: 'Mike Adams',
        },
      ]);
  });
});
