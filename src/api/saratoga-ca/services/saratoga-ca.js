'use strict';

/**
 * saratoga-ca service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::saratoga-ca.saratoga-ca');
