'use strict';

/**
 * @typedef {Object} User
 * @property {string} [firstName]
 * @property {string} [lastName]
 * @property {string} fullName
 *
 * Mutates users in-place, restoring missing/undefined firstName from fullName.
 *
 * @param {User[]} users
 * @returns {void}
 */
function restoreNames(users) {
  for (const user of users) {
    if (user.firstName === undefined) {
      const [firstName] = user.fullName.split(' ');
      user.firstName = firstName;
    }
  }
}

module.exports = { restoreNames };
