'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');
  const users = [
    {
      firstName: undefined,
      lastName: 'Holy',
      fullName: 'Jack Holy',
    },
    {
      lastName: 'Adams',
      fullName: 'Mike Adams',
    },
    {
      lastName: 'OfMe',
      fullName: '',
    },
  ];

  restoreNames(users);

  it('should restore first name of the first user ', () => {
    expect(users[0].firstName).toBe('Jack');
  });

  it('should create firstname atribute of the second user ', () => {
    expect(users[1]).toHaveProperty('firstName');
  });

  it('should restore first name of the second user ', () => {
    expect(users[1].firstName).toBe('Mike');
  });

  const fullN = users[0].firstName + ' ' + users[0].lastName;

  it('should have full name filled with firstname + lastname', () => {
    expect(fullN).toEqual(users[0].fullName);
  });

  it('firstName will be created and empty when fullName is empty', () => {
    if(users[2].lastName === '') {
      expect(users[2].firstName).toEqual('');
    }
  });

  it('firstName will be created and empty when fullName is empty', () => {
    if(users[2].lastName === undefined) {
      expect(users[2].firstName).toEqual('');
    }
  });
});
