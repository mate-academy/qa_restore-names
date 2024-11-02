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
    throw new Error('Users must be an array with users');
  }

  for (const user of users) {
    if (typeof user !== 'object' || Array.isArray(user) || !user) {
      throw new Error('User must be an object with fullName');
    }

    if (!user.firstName || typeof user.firstName !== 'string') {
      [user.firstName] = user.fullName.split(' ');
    }
  }
}

module.exports = { restoreNames };
