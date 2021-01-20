const createdAt = async context => {
  context.data.createdAt = new Date();
  context.data.createdBy = 'system';
  return context;
};

const updatedAt = async context => {
  context.data.updatedAt = new Date();
  context.data.updatedBy = 'system';
  return context;
};


module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [createdAt],
    update: [updatedAt],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
