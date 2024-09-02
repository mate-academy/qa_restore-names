'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should function be initiated', () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  // write tests here
  it('should restore firstName if it isn\'t declared', () => {
    const prev = [
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
      {
        lastName: 'Smith',
        fullName: 'Adam Smith',
      },
    ];

    const shouldBe = [
      {
        firstName: 'Mike',
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
      {
        firstName: 'Adam',
        lastName: 'Smith',
        fullName: 'Adam Smith',
      },
    ];

    restoreNames(prev);

    expect(prev).toEqual(shouldBe);
  });

  it('should restore firstName if it\'s undefined', () => {
    const prev = [
      {
        firstName: undefined,
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
      {
        firstName: undefined,
        lastName: 'Smith',
        fullName: 'Adam Smith',
      },
    ];

    const shouldBe = [
      {
        firstName: 'Mike',
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
      {
        firstName: 'Adam',
        lastName: 'Smith',
        fullName: 'Adam Smith',
      },
    ];

    restoreNames(prev);

    expect(prev).toEqual(shouldBe);
  });

  it('should throw an error if not array was sen\'t', () => {
    expect(() => restoreNames({})).toThrow();
  });

  it('should return undefined for an empty array', () => {
    const result = restoreNames([]);

    expect(result).toEqual(undefined);
  });
});
