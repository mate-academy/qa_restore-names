'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  const correctUser = [{
    firstName: 'Mike',
    lastName: 'Adams',
    fullName: 'Mike Adams',
  }];

  it('should be declared', () => {
    expect(restoreNames)
      .toBeInstanceOf(Function);
  });

  it('should add first name if it doesnot exist', () => {
    const user = [{
      lastName: 'Adams',
      fullName: 'Mike Adams',
    }];

    restoreNames(user);

    expect(user)
      .toEqual(correctUser);
  });

  it('should add first name if it is empty', () => {
    const user = [{
      firstName: '',
      lastName: 'Adams',
      fullName: 'Mike Adams',
    }];

    restoreNames(user);

    expect(user)
      .toEqual(correctUser);
  });

  it('should add first name if it is null', () => {
    const user = [{
      firstName: null,
      lastName: 'Adams',
      fullName: 'Mike Adams',
    }];

    restoreNames(user);

    expect(user)
      .toEqual(correctUser);
  });

  it('should add first name if it is undefined', () => {
    const user = [{
      firstName: undefined,
      lastName: 'Adams',
      fullName: 'Mike Adams',
    }];

    restoreNames(user);

    expect(user)
      .toEqual(correctUser);
  });
});
