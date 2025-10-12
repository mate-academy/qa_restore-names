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
    // jeśli brakuje firstName lub lastName, uzupełniamy z fullName
    if (!user.firstName || !user.lastName) {
      const [firstName, lastName] = user.fullName.split(' ');
      if (!user.firstName) user.firstName = firstName;
      if (!user.lastName) user.lastName = lastName;
    }
  }
}

module.exports = { restoreNames };

