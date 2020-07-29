const _ = require('lodash');
const debug = require('debug')('express:rollout - rollout');

class Rollout {
  constructor(features, options) {
    debug('express:rollout => rollout init');
    this.features = features;
    this.options = options;
  }

  isFeatureEnabled(feature_name, default_value) {
    debug(`express:rollout => isFeatureEnabled ${feature_name} ${default_value}`);
    return _.get(this.features, feature_name, default_value);
  }
}

module.exports = Rollout;
