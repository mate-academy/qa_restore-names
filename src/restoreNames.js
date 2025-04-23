'use strict';

/**
 * @typedef {Object} User
 * @property {string} [firstName]
 * @property {string} [lastName]
 * @property {string} fullName
 *
 * @param {User[]} users
 */
function restoreNames(users) {
  for (const user of users) {
    const parts = user.fullName.split(' ');

    if (!user.firstName) {
      user.firstName = parts[0];
    }

    if (!user.lastName) {
      user.lastName = parts.slice(1).join(' ');
    }
  }
}

module.exports = { restoreNames };
