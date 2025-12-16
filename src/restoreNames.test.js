'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');
  let people;

  beforeEach(() => {
    people = [
      { firstName: undefined, lastName: 'Holy', fullName: 'Jack Holy' },
      { lastName: 'Adams', fullName: 'Mike Adams' },
    ];

    restoreNames(people);
  });

  it('should be declared', () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it('should set firstName as a string, first word of fullName', () => {
    expect(people[0].firstName).toBe('Jack');
    expect(people[1].firstName).toBe('Mike');
  });

  it('should not set firstName if it already exists', () => {
    const customPeople = [
      { firstName: 'Custom', lastName: 'User', fullName: 'Jack Holy' }
    ];
    restoreNames(customPeople);
    expect(customPeople[0].firstName).toBe('Custom'); // не перезаписує
  });

  it('all users should have firstName defined', () => {
    people.forEach(person => {
      expect(person).toHaveProperty('firstName');
      expect(typeof person.firstName).toBe('string');
    });
  });
});
