const Rollout = require('./rollout');

const debug = require('debug')('express:rollout');

function initialize(options) {
  debug('initialize rollout middleware');

  return {
    middleware(req, res, next) {
      const client = new Rollout(options);
      req.rollout = client;

      next();
    }
  }
}

module.exports = {
  initialize
};
