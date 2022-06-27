'use strict';

describe('restoreNames', () => {
   const { restoreNames } = require('./restoreNames');

   it(`should be declared`, () => {
    expect(restoreNames)
      .toBeInstanceOf(Function);
  });

  it(`should modify objects where field 'firstName' is undefined`, () => {
    const testUsers = [
      { firstName: undefined, lastName: 'House', fullName: 'Gregory House' },
    ];

    restoreNames(testUsers);

    expect(testUsers[0])
      .toEqual({ firstName: 'Gregory', lastName: 'House', fullName: 'Gregory House' });
  });

  it(`should not modify objects where field 'firstName' isn't empty`, () => {
    const testUsers = [
      { firstName: 'Loly', lastName: 'S.Oliva', fullName: 'Loly S.Oliva' },
    ];

    restoreNames(testUsers);

    expect(testUsers[0])
      .toEqual({ firstName: 'Loly', lastName: 'S.Oliva', fullName: 'Loly S.Oliva' });
  });

  it(`should work with an array of objects where all 'firstName' fields are undefined`, () => {
    const testUsers = [
      { firstName: undefined, lastName: 'House', fullName: 'Gregory House' },
      { firstName: undefined, lastName: 'Clarkson', fullName: 'Jeremy Clarkson' },
    ];

    restoreNames(testUsers);

    expect(testUsers)
      .toEqual([
        { firstName: 'Gregory', lastName: 'House', fullName: 'Gregory House' },
        { firstName: 'Jeremy', lastName: 'Clarkson', fullName: 'Jeremy Clarkson' },
      ]);
  });

  it(`should work with an array of objects where some 'firstName' fields are undefined`, () => {
    const testUsers = [
      { firstName: undefined, lastName: 'House', fullName: 'Gregory House' },
      { firstName: undefined, lastName: 'Clarkson', fullName: 'Jeremy Clarkson' },
      { firstName: 'Loly', lastName: 'S.Oliva', fullName: 'Loly S.Oliva' },
      { firstName: undefined, lastName: 'Sunderland', fullName: 'Robert Sunderland' },
    ];

    restoreNames(testUsers);

    expect(testUsers)
      .toEqual([
        { firstName: 'Gregory', lastName: 'House', fullName: 'Gregory House' },
        { firstName: 'Jeremy', lastName: 'Clarkson', fullName: 'Jeremy Clarkson' },
        { firstName: 'Loly', lastName: 'S.Oliva', fullName: 'Loly S.Oliva' },
        { firstName: 'Robert', lastName: 'Sunderland', fullName: 'Robert Sunderland' },
      ]);
  });

  // write tests here it ( `should return 'Jack Holy' if name is undefined` () => {});
});



  

  

