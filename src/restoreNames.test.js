"use strict";

const testData = [
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

describe("restoreNames", () => {
  const { restoreNames } = require("./restoreNames");

  it("should throw an error ", () => {
    expect(restoreNames).toThrow();
  });

  it("should restore name from fullName", () => {
    restoreNames(testData);
    expect(testData[0].firstName).toBe("Jack");
  });

  it("sould create `fullName` key of object with restored name", () => {
    restoreNames(testData);

    expect(testData[1].firstName).toBe("Mike");
  });

  // write tests here
});
