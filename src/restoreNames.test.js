'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should be declared', () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it('should restore first names from fullName when missing', () => {
    const data = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
      {
        firstName: undefined,
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(data);

    expect(data).toEqual([
      {
        firstName: 'Jack',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
      {
        firstName: 'Mike',
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ]);
  });

  it('should return undefined', () => {
    const data = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    const result = restoreNames(data);

    expect(result).toBeUndefined();
  });

  it('should not change objects with an existing firstName', () => {
    const data = [
      {
        firstName: 'Jane',
        lastName: 'Doe',
        fullName: 'Jane Doe',
      },
      {
        firstName: 'John',
        lastName: 'Smith',
        fullName: 'John Smith',
      },
    ];

    const initialData = JSON.parse(JSON.stringify(data));

    restoreNames(data);

    expect(data).toEqual(initialData);
  });
});
