'use strict';

const Users = [
  {
    firstName: undefined, lastName: 'A', fullName: 'A A',
  },
  {
    firstName: '', lastName: 'B', fullName: 'B B',
  },
  {
    firstName: 'C', lastName: 'C', fullName: 'C C',
  },
  {
    firstName: 'Ї', lastName: 'Ї', fullName: 'Ї Ї',
  },
  {
    firstName: '1', lastName: '1', fullName: '1 1',
  },
];

const UndefinedUser = [
  {
    firstName: undefined,
    lastName: 'Harris',
    fullName: 'Jack Harris',
  },
];

const EmptyUser = [
  {
    firstName: '',
    lastName: 'Harris',
    fullName: 'Jack Harris',
  },
];

const CyrillicUser = [
  {
    firstName: undefined,
    lastName: 'Харіс',
    fullName: 'Джек Харіс',
  },
];

const NumberUser = [
  {
    firstName: undefined,
    lastName: '2',
    fullName: '1 2',
  },
];

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should restore when name is undefined', () => {
    const tmp = UndefinedUser;

    restoreNames(tmp);
    expect(tmp[0].firstName).toEqual('Jack');
  });

  it('should restore when name is emplty', () => {
    const tmp = EmptyUser;

    restoreNames(tmp);
    expect(tmp[0].firstName).toEqual('Jack');
  });

  it('should restore when name is in cyrillic', () => {
    const tmp = CyrillicUser;

    restoreNames(tmp);
    expect(tmp[0].firstName).toEqual('Джек');
  });

  it('should restore when name is numbers', () => {
    const tmp = NumberUser;

    restoreNames(tmp);
    expect(tmp[0].firstName).toEqual('1');
  });

  it('name should the same as in fullname', () => {
    const tmp = Users;

    restoreNames(tmp);

    tmp.forEach(element => {
      expect(element.firstName)
        .toEqual(element.fullName.split(' ')[0]);
    });
  });
});
