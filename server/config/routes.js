const { checkUser, saveUser} = require('./helpers')

const postHandler = (req, res) => {
  checkUser(req.body.email, (err, data) => {
    if (err) {
      return res.status(409).send('user exists');
    }
    return saveUser(req.body, (err, info) => {
      if (err) {
        return res.status(500).send('Error saving to DB');
      }
      return res.status(201).send(info);
    })
  });
}

module.exports = (app, express) => {
  app.route('/register')
    .post(postHandler)
}