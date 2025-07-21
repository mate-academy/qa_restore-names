'use strict';
class UserToTest {
  constructor(firstName, lastName, fullName, disableFirstParameter = false) {
    this['firstName'] = firstName;
    this['lastName'] = lastName;
    this['fullName'] = fullName;

    if (disableFirstParameter) {
      delete this.firstName;
    }
  }
}

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it(`should create "firstName" parameter when user `
    + `object doesn't have`, () => {
    const value = [
      new UserToTest('', 'Komorowski', 'Jan Komorowski', true),
      new UserToTest('', 'Wilkowicz', 'Marzena Wilkowicz', true),
      new UserToTest('', 'Cięcioł', 'Janusz Cięcioł', true),
    ];

    restoreNames(value);

    value.forEach((user, i) => {
      expect(user)
        .toHaveProperty('firstName');
    });
  });

  it(`should create "firstName" parameter equal name `
    + `from "fullName" parameter`, () => {
    const value = [
      new UserToTest('', 'Komorowski', 'Jan Komorowski', true),
      new UserToTest('', 'Wilkowicz', 'Marzena Wilkowicz', true),
      new UserToTest('', 'Cięcioł', 'Janusz Cięcioł', true),
    ];
    const names = ['Jan', 'Marzena', 'Janusz'];

    restoreNames(value);

    value.forEach((user, i) => {
      expect(user)
        .toHaveProperty('firstName', names[i]);
    });
  });

  it(`should return object with only 3 parameter`, () => {
    const value = [
      new UserToTest('', 'Komorowski', 'Jan Komorowski', true),
      new UserToTest('', 'Wilkowicz', 'Marzena Wilkowicz', true),
      new UserToTest('', 'Cięcioł', 'Janusz Cięcioł', true),
    ];

    restoreNames(value);

    value.forEach((user, i) => {
      const returnedAmountOfProperties = Object.keys(user).length;

      expect(returnedAmountOfProperties)
        .toBe(3);
    });
  });

  it(`should change the value of the "firstName" parameter from `
    + `undefined to name (extracted from "fullName" parameter)`, () => {
    const value = [
      new UserToTest(undefined, 'Komorowski', 'Jan Komorowski', true),
      new UserToTest(undefined, 'Wilkowicz', 'Marzena Wilkowicz', true),
      new UserToTest(undefined, 'Cięcioł', 'Janusz Cięcioł', true),
    ];
    const names = ['Jan', 'Marzena', 'Janusz'];

    restoreNames(value);

    value.forEach((user, i) => {
      expect(user)
        .toHaveProperty('firstName', names[i]);
    });
  });

  it(`shouldn't change any of user parameters`
    + `except "firstName"`, () => {
    const value = [
      new UserToTest('Jan', 'Komorowski', 'Jan Komorowski'),
      new UserToTest('Marzena', 'Wilkowicz', 'Marzena Wilkowicz'),
      new UserToTest('Janusz', 'Cięcioł', 'Janusz Cięcioł'),
    ];
    const valueReadOnly = [
      ['Komorowski', 'Jan Komorowski'],
      ['Wilkowicz', 'Marzena Wilkowicz'],
      ['Cięcioł', 'Janusz Cięcioł'],
    ];

    restoreNames(value);

    value.forEach((user, i) => {
      expect(user).toHaveProperty('firstName');
      expect(user).toHaveProperty('lastName', valueReadOnly[i][0]);
      expect(user).toHaveProperty('fullName', valueReadOnly[i][1]);
    });
  });

  it(`should return object with this property order `
    + `firstName -> lastName -> fullName `, () => {
    const value = [
      new UserToTest('Jan', 'Komorowski', 'Jan Komorowski'),
      new UserToTest('Marzena', 'Wilkowicz', 'Marzena Wilkowicz'),
      new UserToTest('Janusz', 'Cięcioł', 'Janusz Cięcioł'),
    ];

    restoreNames(value);

    value.forEach((user, i) => {
      const keys = Object.keys(user);

      expect(keys[0]).toBe('firstName');
      expect(keys[1]).toBe('lastName');
      expect(keys[2]).toBe('fullName');
    });
  });

  it(`function shouldn't return any value`, () => {
    const value = [
      new UserToTest('Jan', 'Komorowski', 'Jan Komorowski'),
      new UserToTest('Marzena', 'Wilkowicz', 'Marzena Wilkowicz'),
      new UserToTest('Janusz', 'Cięcioł', 'Janusz Cięcioł'),
    ];
    const returnedValue = restoreNames(value);

    expect(returnedValue).toBe(undefined);
  });

  it(`shouldn't change the type of 'users' argument`, () => {
    const value = [
      new UserToTest('Jan', 'Komorowski', 'Jan Komorowski'),
      new UserToTest('Marzena', 'Wilkowicz', 'Marzena Wilkowicz'),
      new UserToTest('Janusz', 'Cięcioł', 'Janusz Cięcioł'),
    ];

    restoreNames(value);

    value.forEach((user, i) => {
      expect(user).toBeInstanceOf(Object);
    });
  });
});
