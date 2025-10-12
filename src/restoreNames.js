'use strict';

/**
 * @typedef {Object} User
 * @property {string|undefined} firstName
 * @property {string} lastName
 * @property {string} fullName
 *
 * @param {User[]} users
 */
function restoreNames(users) {
  for (const user of users) {
    // Przywracamy firstName tylko jeśli jest undefined
    if (user.firstName === undefined && typeof user.fullName === 'string') {
      const firstName = user.fullName.split(/\s+/)[0];
      if (firstName) user.firstName = firstName; // nie przypisujemy pustych wartości
    }
  }
}

module.exports = { restoreNames };



