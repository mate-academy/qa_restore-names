'use strict';

/**
 * @typedef {Object} User
 * @property {string} [firstName]
 * @property {string} lastName
 * @property {string} [fullName]
 *
 * @param {User[]} users
 */
function restoreNames(users) {
  for (const user of users) {
    if (!user.firstName && typeof user.fullName === 'string') {
      [user.firstName] = user.fullName.split(' ');
    }
  }
}

module.exports = { restoreNames };
