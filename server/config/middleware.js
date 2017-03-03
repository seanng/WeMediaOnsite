const bodyParser = require('body-parser');

module.exports = (app, express) => {

  app.use(bodyParser.json());

  // To serve static assets for app
  app.use(express.static(__dirname + '/../../app'));
  // app.use('/node_modules', express.static(__dirname + '/../../node_modules'))

}