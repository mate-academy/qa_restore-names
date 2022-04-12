'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should be declared', () => {
    expect(restoreNames)
      .toBeInstanceOf(Function);
  });

  it(`should add firstName of user who does not have it`, () => {
    const users = [
      {
        lastName: 'Smith',
        fullName: 'John Smith',
      }];

    restoreNames(users);

    expect(users)
      .toEqual([{
        firstName: 'John',
        lastName: 'Smith',
        fullName: 'John Smith',
      }]);
  });

  it(`should add firstName for user if firstName is undefined`, () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Smith',
        fullName: 'John Smith',
      }];

    restoreNames(users);

    expect(users)
      .toEqual([{
        firstName: 'John',
        lastName: 'Smith',
        fullName: 'John Smith',
      }]);
  });

  it(`should add firstName for users who don't have it `
    + `based on their fullNames`, () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Smith',
        fullName: 'John Smith',
      },
      {
        firstName: undefined,
        lastName: 'Wind',
        fullName: 'Ann Wind',
      }];

    restoreNames(users);

    expect(users)
      .toEqual([
        {
          firstName: 'John',
          lastName: 'Smith',
          fullName: 'John Smith',
        },
        {
          firstName: 'Ann',
          lastName: 'Wind',
          fullName: 'Ann Wind',
        }]);
  });

  it(`should not change firstName if user already has it`, () => {
    const users = [{
      firstName: 'Johnnie',
      lastName: 'Smith',
      fullName: 'John Smith',
    }];

    restoreNames(users);

    expect(users)
      .toEqual([{
        firstName: 'Johnnie',
        lastName: 'Smith',
        fullName: 'John Smith',
      }]);
  });

  it(`should work with names that contains symbols, e.g O'Neil`, () => {
    const users = [{
      lastName: 'Wind',
      fullName: `O'Neil Wind`,
    }];

    restoreNames(users);

    expect(users)
      .toEqual([{
        firstName: `O'Neil`,
        lastName: 'Wind',
        fullName: `O'Neil Wind`,
      }]);
  });

  it(`'users' should contain at least one user`, () => {
    const users = [{}];

    expect(() => {
      restoreNames(users);
    })
      .toThrow();
  });

  it(`should write only first name of user, if user has middle name`, () => {
    const users = [{
      lastName: 'Potter',
      fullName: `Albus Severus Potter`,
    }];

    restoreNames(users);

    expect(users)
      .toEqual([{
        firstName: `Albus`,
        lastName: 'Potter',
        fullName: `Albus Severus Potter`,
      }]);
  });
});
