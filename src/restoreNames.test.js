'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  describe('restoreNames', () => {
    it('should restore firstName for users with undefined', () => {
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
      ];

      restoreNames(users);

      expect(users).toEqual([
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

    it('should not modify firstName for users with existing firstName', () => {
      const users = [
        {
          firstName: 'John',
          lastName: 'Doe',
          fullName: 'John Doe',
        },
        {
          firstName: 'Jane',
          lastName: 'Smith',
          fullName: 'Jane Smith',
        },
      ];

      restoreNames(users);

      expect(users).toEqual([
        {
          firstName: 'John',
          lastName: 'Doe',
          fullName: 'John Doe',
        },
        {
          firstName: 'Jane',
          lastName: 'Smith',
          fullName: 'Jane Smith',
        },
      ]);
    });
  });
});
