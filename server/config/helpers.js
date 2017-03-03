const { User } = require('../db/config');

const checkUser = (email, callback) => {
  User.findOne({ where: { email } })
  .then(response => {
    if (response === null) {
      return callback(null)
    }
    return callback(response);
  })
}

const saveUser = (data, callback) => {
  User.create(data)
  .then(response => callback(null, response))
  .catch(err => callback(err));
}

module.exports = { checkUser, saveUser };