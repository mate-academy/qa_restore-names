'use strict';

const { restoreNames } = require('./restoreNames');

/**
 * @typedef {Object} User
 * @property {string} [firstName]
 * @property {string} lastName
 * @property {string} fullName
 */
describe('restoreNames', () => {
  it('should restore firstName when it is undefined', () => {
    const users = [{
      firstName: undefined,
      lastName: 'Holy',
      fullName: 'Jack Holy',
    } ];
    const expectedUsers = [{
      firstName: 'Jack',
      lastName: 'Holy',
      fullName: 'Jack Holy',
    } ];

    restoreNames(users);
    expect(users).toEqual(expectedUsers);
  });

  it('should restore firstName when it is missing (not present)', () => {
    const users = [{
      lastName: 'Adams',
      fullName: 'Mike Adams',
    } ];
    const expectedUsers = [{
      firstName: 'Mike',
      lastName: 'Adams',
      fullName: 'Mike Adams',
    } ];

    restoreNames(users);
    expect(users).toEqual(expectedUsers);
  });

  it('should restore firstName when it is an empty string', () => {
    const users = [{
      firstName: '',
      lastName: 'Smith',
      fullName: 'John Smith',
    } ];
    const expectedUsers = [{
      firstName: 'John',
      lastName: 'Smith',
      fullName: 'John Smith',
    } ];

    restoreNames(users);
    expect(users).toEqual(expectedUsers);
  });

  it('should restore firstName for multiple users with mixed states', () => {
    const users = [{
      firstName: undefined,
      lastName: 'Holy',
      fullName: 'Jack Holy',
    }, {
      lastName: 'Adams',
      fullName: 'Mike Adams',
    }, {
      firstName: 'Jane',
      lastName: 'Doe',
      fullName: 'Jane Doe',
    }, {
      firstName: '',
      lastName: 'Smith',
      fullName: 'John Smith',
    }, {
      firstName: null,
      lastName: 'Brown',
      fullName: 'Alice Brown',
    }];

    const expectedUsers = [{
      firstName: 'Jack',
      lastName: 'Holy',
      fullName: 'Jack Holy',
    }, {
      firstName: 'Mike',
      lastName: 'Adams',
      fullName: 'Mike Adams',
    }, {
      firstName: 'Jane',
      lastName: 'Doe',
      fullName: 'Jane Doe',
    }, {
      firstName: 'John',
      lastName: 'Smith',
      fullName: 'John Smith',
    }, {
      firstName: 'Alice',
      lastName: 'Brown',
      fullName: 'Alice Brown',
    } ];

    restoreNames(users);
    expect(users).toEqual(expectedUsers);
  });

  it('should not modify firstName if it already exists and is correct', () => {
    const users = [{
      firstName: 'Correct',
      lastName: 'Name',
      fullName: 'Correct Name',
    } ];

    const initialUsersCopy = JSON.parse(JSON.stringify(users));

    restoreNames(users);
    expect(users).toEqual(initialUsersCopy);
  });

  it('should handle an empty array gracefully', () => {
    const users = [];
    const expectedUsers = [];

    restoreNames(users);
    expect(users).toEqual(expectedUsers);
  });

  it('should handle users with multi-word first names (only first word taken)',
    () => {
      const users = [{
        firstName: undefined,
        lastName: 'Jones',
        fullName: 'Sarah Jane Jones',
      } ];
      const expectedUsers = [{
        firstName: 'Sarah',
        lastName: 'Jones',
        fullName: 'Sarah Jane Jones',
      } ];

      restoreNames(users);
      expect(users).toEqual(expectedUsers);
    });

  it('should handle full name with only one word (e.g., just a first name)',
    () => {
      const users = [{
        firstName: undefined,
        lastName: '',
        fullName: 'Madonna',
      } ];
      const expectedUsers = [{
        firstName: 'Madonna',
        lastName: '',
        fullName: 'Madonna',
      } ];

      restoreNames(users);
      expect(users).toEqual(expectedUsers);
    });

  it('should handle full name being an empty string',
    () => {
      const users = [{
        firstName: undefined,
        lastName: 'User',
        fullName: '',
      } ];
      const expectedUsers = [{
        firstName: '',
        lastName: 'User',
        fullName: '',
      } ];

      restoreNames(users);
      expect(users).toEqual(expectedUsers);
    });
});
