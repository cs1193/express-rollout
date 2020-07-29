const Rollout = require('./rollout');

const debug = require('debug')('express:rollout - index');

function initialize({features, ...options}) {
  debug('initialize rollout middleware');

  return {
    middleware(req, res, next) {
      const client = new Rollout(features, options);
      req.rollout = client;

      next();
    }
  }
}

module.exports = {
  initialize
};
