'use strict';

/**
 * @typedef {Object} User
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} fullName
 *
 * @param {User[]} users
 */

function restoreNames(users) {
  if (!Array.isArray(users)) {
    throw new Error('The provided argument is not an array');
  }

  for (const user of users) {
    if (!user.firstName) {
      [user.firstName] = user.fullName.split(' ');
    }
  }
}

module.exports = { restoreNames };
