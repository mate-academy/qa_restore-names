"use strict";

const { restoreNames } = require("./restoreNames");

describe("restoreNames", () => {
  it("should restore firstName when it is undefined", () => {
    const users = [
      { firstName: undefined, lastName: "Holy", fullName: "Jack Holy" },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe("Jack");
  });

  it("should restore firstName when it is missing", () => {
    const users = [{ lastName: "Adams", fullName: "Mike Adams" }];

    restoreNames(users);

    expect(users[0].firstName).toBe("Mike");
  });

  it("should not change firstName if it already exists", () => {
    const users = [
      { firstName: "Sarah", lastName: "Connor", fullName: "Sarah Connor" },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe("Sarah");
  });

  it("should work for multiple users in array", () => {
    const users = [
      { firstName: undefined, lastName: "Holy", fullName: "Jack Holy" },
      { lastName: "Adams", fullName: "Mike Adams" },
      { firstName: "Anna", lastName: "Smith", fullName: "Anna Smith" },
    ];

    restoreNames(users);

    expect(users).toEqual([
      { firstName: "Jack", lastName: "Holy", fullName: "Jack Holy" },
      { firstName: "Mike", lastName: "Adams", fullName: "Mike Adams" },
      { firstName: "Anna", lastName: "Smith", fullName: "Anna Smith" },
    ]);
  });

  it("should not change lastName or fullName", () => {
    const users = [
      { firstName: undefined, lastName: "Brown", fullName: "Tom Brown" },
    ];

    restoreNames(users);

    expect(users[0].lastName).toBe("Brown");
    expect(users[0].fullName).toBe("Tom Brown");
  });
});
