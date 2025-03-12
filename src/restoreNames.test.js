'use strict';

const { restoreNames } = require('./restoreNames');

describe('restoreNames', () => {
  it(`should restore firstName from fullName when
     firstName is undefined`, () => {
    const users = [
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

    restoreNames(users);

    expect(users[0].firstName).toBe('Jack');
    expect(users[0].lastName).toBe('Holy');
    expect(users[0].fullName).toBe('Jack Holy');

    expect(users[1].firstName).toBe('Mike');
    expect(users[1].lastName).toBe('Adams');
    expect(users[1].fullName).toBe('Mike Adams');
  });

  it('should restore firstName from fullName when firstName is missing', () => {
    const users = [
      {
        firstName: '',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
      {
        firstName: '',
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Jack');
    expect(users[0].lastName).toBe('Holy');
    expect(users[0].fullName).toBe('Jack Holy');

    expect(users[1].firstName).toBe('Mike');
    expect(users[1].lastName).toBe('Adams');
    expect(users[1].fullName).toBe('Mike Adams');
  });

  it('should not overwrite an existing firstName', () => {
    const users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        fullName: 'John Doe',
      },
      {
        firstName: 'Alice',
        lastName: 'Wonderland',
        fullName: 'Alice Wonderland',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('John');
    expect(users[0].lastName).toBe('Doe');
    expect(users[0].fullName).toBe('John Doe');

    expect(users[1].firstName).toBe('Alice');
    expect(users[1].lastName).toBe('Wonderland');
    expect(users[1].fullName).toBe('Alice Wonderland');
  });

  it(`should handle users with no firstName and 
    fullName with multiple words`, () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Johnson',
        fullName: 'Alice Marie Johnson',
      },
      {
        firstName: '',
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Alice');
    expect(users[0].fullName).toBe('Alice Marie Johnson');

    expect(users[1].firstName).toBe('Mike');
    expect(users[1].lastName).toBe('Adams');
    expect(users[1].fullName).toBe('Mike Adams');
  });

  it('should not modify users who already have a firstName', () => {
    const users = [
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
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Jack');
    expect(users[0].lastName).toBe('Holy');
    expect(users[0].fullName).toBe('Jack Holy');

    expect(users[1].firstName).toBe('Mike');
    expect(users[1].lastName).toBe('Adams');
    expect(users[1].fullName).toBe('Mike Adams');
  });

  it('should handle cases where fullName is empty or whitespace', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: '  ',
      },
      {
        firstName: '',
        lastName: 'Adams',
        fullName: '    ',
      },
    ];

    restoreNames(users);

    expect(users[0].lastName).toBe('Holy');
    expect(users[0].fullName).toBe('  ');

    expect(users[1].firstName).toBe('');
    expect(users[1].lastName).toBe('Adams');
    expect(users[1].fullName).toBe('    ');
  });
});
