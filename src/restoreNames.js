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
  // Checks for negative cases
  if (!Array.isArray(users)) {
    return `'users' must be an array`;
  };

  if (users.length < 1) {
    return `'users' must not be empty`;
  };

  for (const ch of users) {
    if (!(typeof ch === 'object'
      && !Array.isArray(ch)
      && ch !== null)) {
      return `All elements in 'users' must be an Object`;
    };
  };

  // Field 'lastName' was ignored in the check,
  // since it is considered always true by the condition of the task
  for (const user of users) {
    if (typeof (user.fullName) === 'string'
      && user.fullName.split(' ').length === 2) {
      if (!user.firstName
        || typeof (user.firstName) !== 'string'
        || user.firstName !== user.fullName.split(' ')[0]) {
        [user.firstName] = user.fullName.split(' ');
      }
    } else if (typeof (user.fullName) === 'string'
      && user.fullName.split(' ').length === 1
      && user.lastName !== user.fullName) {
      user.firstName = user.fullName;
      user.fullName += ' ' + user.lastName;
    } else {
      user.firstName = 'Unidentified';
    }
  }
}

module.exports = { restoreNames };
