"use strict";

describe("restoreNames", () => {
  const { restoreNames } = require("./restoreNames");

  it("should ", () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it(`should restore name if it is undefined`, () => {
    const users = [
      {
        firstName: undefined,
        lastName: "Holy",
        fullName: "Jack Holy",
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe("Jack");
  });

  it(`should restore firstname when firstname field is missing`, () => {
    const users = [
      {
        lastName: "Adams",
        fullName: "Mike Adams",
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe("Mike");
  });
});
