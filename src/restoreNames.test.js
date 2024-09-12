'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it(`should be declared`, () => {
    expect(restoreNames).toBeDefined();
  });

  it(`should return 'undefined'`, () => {
    const result = restoreNames([]);

    expect(result).toBe(undefined);
  });

  it(`should not change correct users`, () => {
    const data = [{
      firstName: 'Jack',
      lastName: 'Holy',
      fullName: 'Jack Holy',
    }];

    restoreNames(data);

    expect(data).toEqual([{
      firstName: 'Jack',
      lastName: 'Holy',
      fullName: 'Jack Holy',
    }]);
  });

  it(`should add firstName field where it is missing`, () => {
    const data = [{
      lastName: 'Holy',
      fullName: 'Jack Holy',
    }];

    restoreNames(data);

    expect(data).toEqual([{
      firstName: 'Jack',
      lastName: 'Holy',
      fullName: 'Jack Holy',
    }]);
  });

  it(`should add firstName field where it is value is 'undefined'`, () => {
    const data = [{
      lastName: 'Adams',
      fullName: 'Mike Adams',
    }];

    restoreNames(data);

    expect(data).toEqual([{
      firstName: 'Mike',
      lastName: 'Adams',
      fullName: 'Mike Adams',
    }]);
  });

  it(`should add firstName field where it is value is 'undefined'
      or missing multiple times`, () => {
    const data = [{
      lastName: 'Holy',
      fullName: 'Jack Holy',
    },
    {
      firstName: 'Mike',
      lastName: 'Adams',
      fullName: 'Mike Adams',
    },
    {
      firstName: undefined,
      lastName: 'Stark',
      fullName: 'Tony Stark',
    }];

    restoreNames(data);

    expect(data).toEqual([{
      firstName: 'Jack',
      lastName: 'Holy',
      fullName: 'Jack Holy',
    },
    {
      firstName: 'Mike',
      lastName: 'Adams',
      fullName: 'Mike Adams',
    },
    {
      firstName: 'Tony',
      lastName: 'Stark',
      fullName: 'Tony Stark',
    }]);
  });
});
