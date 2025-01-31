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
    if (!user.firstName && user.fullName) {
      const nameParts = user.fullName.trim().split(/\s+/);

      user.firstName = nameParts.length > 0 ? nameParts[0] : undefined;
    }
  }
}

module.exports = { restoreNames };
