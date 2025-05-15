'use strict';

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
    firstName: 'Olga',
    lastName: 'Vovna',
    fullName: 'Olga Vovna',
  },
];

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should have no return', () => {
    const testUsers = [...users];
    const result = restoreNames(testUsers);

    expect(result).toBeUndefined();
  });

  it('should ensure all users have "firstName"', () => {
    const testUsers = [...users];

    restoreNames(testUsers);

    testUsers.forEach((user) => {
      expect(user).toHaveProperty('firstName');
    });
  });

  it('all users should have correct "firstName"', () => {
    const testUsers = [...users];

    restoreNames(testUsers);

    testUsers.forEach(user => {
      expect(user.firstName).toBe(user.fullName.split(' ')[0]);
    });
  });

  it('should add firstName "property"', () => {
    const testUsers = [ {
      lastName: 'Adams',
      fullName: 'Mike Adams',
    }];

    restoreNames(testUsers);

    expect(testUsers[0]).toHaveProperty('firstName', 'Mike');
  });

  it('should fill empty "firstName"', () => {
    const testUsers = [{
      firstName: undefined,
      lastName: 'Holy',
      fullName: 'Jack Holy',
    }];

    restoreNames(testUsers);

    expect(testUsers[0]).toHaveProperty('firstName', 'Jack');
  });
});
