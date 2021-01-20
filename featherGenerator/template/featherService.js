const { <name> } = require('./<name>.class');
const createModel = require('../../models/<name>.model');
const hooks = require('./<name>.hook');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/<name>', new <name>(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('<name>');

  service.hooks(hooks);
};
