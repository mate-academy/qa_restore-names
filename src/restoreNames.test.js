'use strict';

const { restoreNames } = require("./restoreNames");

describe('restoreNames', () => {
  // const { restoreNames } = require('./restoreNames');



it(`should restore name`, () => {
  const users = [{
    firstName: undefined,
    lastName: 'Holy',
    fullName: 'Jack Holy'
  }];
  
  restoreNames(users);
  
  expect(users[0].firstName).toBe('Jack');
});
it(`should restore name`, () => {
  const users = [{
    firstName: null ,
    lastName: 'Holy',
    fullName: 'Jack Holy'
  }];
  
  restoreNames(users);
  
  expect(users[0].firstName).toBe('Jack');
});
it(`should restore name`, () => {
  const users = [{
    firstName: 'Jack',
    lastName: 'Holy',
    fullName: 'Jack Holy'
  }];
  
  restoreNames(users);
  
  expect(users[0].firstName).toBe('Jack');
});

});
