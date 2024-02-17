'use strict';

describe('restoreNames should restore "firstName field"', () => {
  const { restoreNames } = require('./restoreNames');

  it('user.firstName has undefined value', () => {
    const userToRestoring = [{
      firstName: undefined,
      lastName: 'Holy',
      fullName: 'Jack Holy',
    }];

    const userAfterRestoring = [{
      firstName: 'Jack',
      lastName: 'Holy',
      fullName: 'Jack Holy',
    }];

    restoreNames(userToRestoring);

    expect(userToRestoring).toEqual(userAfterRestoring);
  });

  it('user.firstName.length === 0', () => {
    const userToRestoring = [{
      lastName: 'Uzumaki',
      fullName: 'Naruto Uzumaki',
    }];

    const userAfterRestoring = [{
      firstName: 'Naruto',
      lastName: 'Uzumaki',
      fullName: 'Naruto Uzumaki',
    }];

    restoreNames(userToRestoring);

    expect(userToRestoring).toEqual(userAfterRestoring);
  });

  it('user doesn\'t have the firstName property', () => {
    const userToRestoring = [{
      firstName: '',
      lastName: 'Adams',
      fullName: 'Mike Adams',
    }];

    const userAfterRestoring = [{
      firstName: 'Mike',
      lastName: 'Adams',
      fullName: 'Mike Adams',
    }];

    restoreNames(userToRestoring);

    expect(userToRestoring).toEqual(userAfterRestoring);
  });
});
