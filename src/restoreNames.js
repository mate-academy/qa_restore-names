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
  for (const user of users) {
    // Przywracamy firstName tylko jeśli jest undefined
    if (user.firstName === undefined && typeof user.fullName === 'string') {
      // Pobieramy pierwszy wyraz z fullName
      const firstName = user.fullName.split(/\s+/)[0];
      user.firstName = firstName;
    }
  }
}

module.exports = { restoreNames };


