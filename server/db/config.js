const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');

// ** hardcoded for the sake of convenience.
const user = 'postgres', pass = '', host = 'localhost', port = 5432, dbName = 'wemediaonsite';

const db = new Sequelize(`postgres://${user}:${pass}@${host}:${port}/${dbName}`)

const User = db.define('User', {
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
      notEmpty: true,
      len: [1,255]
    },
    unique: true,
  },
  password_digest: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  password: {
    type: Sequelize.VIRTUAL,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
}, {
  // freezeTableName: true,
  instanceMethods: {
    authenticate: (value) => {
      if (bcrypt.compareSync(value, this.password_digest))
        return this;
      else
        return false;
    }
  }
})

const hasSecurePassword = (user, options, callback) => {
  bcrypt.hash(user.get('password'), 10, (err, hash) => {
    if (err) return callback(err);
    user.set('password_digest', hash);
    return callback(null, options);
  })
}

User.beforeCreate((user, options, callback) => {
  user.email = user.email.toLowerCase();
  if (user.password) {
    hasSecurePassword(user, options, callback)
  } else {
    return callback(null, options)
  }
})

module.exports = { db, User };
