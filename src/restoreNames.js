"use strict";

/**
 * @typedef {Object} User
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} fullName
 *
 * @param {User[]} users
 */
function restoreNames(users) {
  for (const user of users) {
    // only restore when firstName is strictly undefined
    if (user.firstName === undefined) {
      const [first] = user.fullName.split(" ");

      user.firstName = first;
    }
  }
}

module.exports = { restoreNames };
