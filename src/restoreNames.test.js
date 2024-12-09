"use strict";

describe("restoreNames", () => {
  const { restoreNames } = require("./restoreNames");

  it(`should restore firstName
      from fullName when firstName is undefined`, () => {
    const users = [
      {
        firstName: undefined,
        lastName: "Holy",
        fullName: "Jack Holy",
      },
      {
        lastName: "Adams",
        fullName: "Mike Adams",
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toEqual("Jack");
    expect(users[1].firstName).toEqual("Mike");
  });
});
