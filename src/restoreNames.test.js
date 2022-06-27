'use strict';

describe('restoreNames', () => {
   const { restoreNames } = require('./restoreNames');

   it(`should be declared`, () => {
    expect(restoreNames)
      .toBeInstanceOf(Function);
  });

  it(`should modify objects where field 'firstName' is undefined`, () => {
    const testUsers = [
      { firstName: undefined, lastName: 'Holy', fullName: 'Jack Holy' },
    ];

    restoreNames(testUsers);

    expect(testUsers[0])
      .toEqual({ firstName: 'Jack', lastName: 'Holy', fullName: 'Jack Holy' });
  });

  it(`should not modify objects where field 'firstName' isn't empty`, () => {
    const testUsers = [
      { firstName: 'Jack', lastName: 'Holy', fullName: 'Jack Holy' },
    ];

    restoreNames(testUsers);

    expect(testUsers[0])
      .toEqual({ firstName: 'Jack', lastName: 'Holy', fullName: 'Jack Holy' });
  });

  it(`should work with an array of objects where all 'firstName' fields are undefined`, () => {
    const testUsers = [
      { firstName: undefined, lastName: 'Holy', fullName: 'Jack Holy' },
      { firstName: undefined, lastName: 'Holy', fullName: 'Jack Holy' },
    ];

    restoreNames(testUsers);

    expect(testUsers)
      .toEqual([
        { firstName: 'Jack', lastName: 'Holy', fullName: 'Jack Holy' },
        { firstName: 'Jack', lastName: 'Holy', fullName: 'Jack Holy' },
      ]);
  });

  it(`should work with an array of objects where some 'firstName' fields are undefined`, () => {
    const testUsers = [
      { firstName: undefined, lastName: 'Holy', fullName: 'Jack Holy' },
      { firstName: 'Jack', lastName: 'Holy', fullName: 'Jack Holy' },
    ];

    restoreNames(testUsers);

    expect(testUsers)
      .toEqual([
        { firstName: 'Jack', lastName: 'Holy', fullName: 'Jack Holy' },
        { firstName: 'Jack', lastName: 'Holy', fullName: 'Jack Holy' },
    ]);
  });

  // write tests here it ( `should return 'Jack Holy' if name is undefined` () => {});
});



  

  

