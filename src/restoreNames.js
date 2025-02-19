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
    throw new Error('Input must be array of objects');
  }

  for (const user of users) {
    if (Object.prototype.toString.call(user) !== '[object Object]') {
      throw new Error('Input must be array of objects');
    }

    if (!user.fullName) {
      throw new Error('FullName is required');
    }

    if (!user.firstName || !user.lastName) {
      const fullName = user.fullName.split(' ');

      if (!user.firstName) {
        user.firstName = fullName[0];
      }

      if (!user.lastName) {
        if (fullName.length === 1) {
          user.lastName = '';
        } else if (fullName.length > 2) {
          user.lastName = fullName.slice(1).join(' ');
        } else {
          user.lastName = fullName.at(-1);
        }
      }
    }
  }

  return users;
}

module.exports = { restoreNames };
