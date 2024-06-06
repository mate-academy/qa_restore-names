'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');


  it(`The function should return 'firstName' from the fullName'`, () => {
    const users = [
      {
        firstName: '',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];
    restoreNames(users);
    expect(users[0].firstName).toBe('Jack');
  });

  it(`if 'firstName' has undefined`, () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];
    restoreNames(users);
    expect(users[0].firstName).toBe('Jack');
  }); 

  it(`if 'firstName' field was deleted`, () => {
    const users = [
      {
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];
    restoreNames(users);
    expect(users).toEqual([
      {
        firstName: 'Jack',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ]);
  });

  it(`function should work with multiple arrays`, () => {
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
  
  // it(`should check if the 'FirstName' had two words`, () => {
  //   const users = [
  //     {
  //       firstName: '',
  //       lastName: 'Holy',
  //       fullName: 'Muhamed Aly Boxer',
  //     },
  //   ];
  //   restoreNames(users);
  //   expect(users[0].firstName).toBe('Muhamed Aly');
  // });

  // it(`should return error message if the 'fullName' is empty`, () => {
  //   const users = [
  //     {
  //       firstName: '',
  //       lastName: 'Holy',
  //       fullName: '',
  //     },
  //   ];
  //   restoreNames(users);
  //   expect(users).toThrow('fullName is empty');
  // });
});