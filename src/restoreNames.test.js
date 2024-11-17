'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should be declared', () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it(`should modify object where the'firstName' - 'undefined'`, () => {
    const testUser = [{
      firstName: undefined, lastName: 'Holy', fullName: 'Jack Holy',
    }];

    restoreNames(testUser);

    expect(testUser[0]).toEqual({
      firstName: 'Jack', lastName: 'Holy', fullName: 'Jack Holy',
    });
  });

  it(`should not modify object where the'firstName' not empty`, () => {
    const testUser = [{
      firstName: 'Jack', lastName: 'Holy', fullName: 'Jack Holy',
    }];

    restoreNames(testUser);

    expect(testUser[0]).toEqual({
      firstName: 'Jack', lastName: 'Holy', fullName: 'Jack Holy',
    });
  });

  it(`should work with an array of object where all 'firstName' - 'undefined'`,
    () => {
      const testUser = [
        {
          firstName: undefined, lastName: 'Holy', fullName: 'Jack Holy',
        },
        {
          firstName: undefined, lastName: 'Adams', fullName: 'Mike Adams',
        },
      ];

      restoreNames(testUser);

      expect(testUser).toEqual([
        {
          firstName: 'Jack', lastName: 'Holy', fullName: 'Jack Holy',
        },
        {
          firstName: 'Mike', lastName: 'Adams', fullName: 'Mike Adams',
        },
      ]);
    });

  it(`should work with an array of object where some 'firstName' - 'undefined'`,
    () => {
      const testUser = [
        {
          firstName: undefined, lastName: 'Holy', fullName: 'Jack Holy',
        },
        {
          firstName: 'Eric', lastName: 'Brown', fullName: 'Eric Brown',
        },
        {
          firstName: undefined, lastName: 'Adams', fullName: 'Mike Adams',
        },
      ];

      restoreNames(testUser);

      expect(testUser).toEqual([
        {
          firstName: 'Jack', lastName: 'Holy', fullName: 'Jack Holy',
        },
        {
          firstName: 'Eric', lastName: 'Brown', fullName: 'Eric Brown',
        },
        {
          firstName: 'Mike', lastName: 'Adams', fullName: 'Mike Adams',
        },
      ]);
    });
});
